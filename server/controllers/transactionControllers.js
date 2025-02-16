import Client from "../models/authModel.js";
import Products from "../models/productsModel.js";
import Transaction from "../models/transactionModel.js";

const updateStock = async (transactionId, status) => {
  try {
    // Fetch the transaction details
    const transaction = await Transaction.findById(transactionId);
    if (!transaction) throw new Error("Transaction not found");

    // Get the product associated with the transaction
    const product = await Products.findById(transaction.productId._id);
    if (!product) throw new Error("Product not found");

    // Adjust stock based on the new status
    const quantity = transaction.quantity;
    if (status === "completed") {
      product.quantityInStock -= quantity; // Reduce stock
    } else if (status === "returned") {
      product.quantityInStock += quantity; // Increase stock
    } else {
      throw new Error(
        "Invalid status. Only 'completed' or 'returned' are allowed."
      );
    }

    // Save the updated product stock
    await product.save();

    // Update the transaction's status
    transaction.statusOrder = status;
    await transaction.save();

    console.log("Stock and transaction updated successfully");
  } catch (error) {
    console.error("Error updating stock:", error.message);
  }
};

// SEND TRANSACTION DATA AND ADD TO THE ORDERS
export const clientOrders = async (req, res) => {
  try {
    const {
      clientId,
      productId,
      price,
      quantity,
      priceAtSale,
      total,
      paymentMethod,
      statusOrder,
      saleDate,
    } = req.body;

    const product = await Products.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (statusOrder === "returned") {
      // If it's a return, simply add the stock without checking limits
      product.quantityInStock += quantity;
    }

    if (quantity > product.quantityInStock) {
      return res.status(400).json({
        message: `Insufficient stock. Available stock: ${product.quantityInStock}`,
      });
    }

    // Step 1: Save the transaction
    const newTransaction = new Transaction({
      clientId,
      productId,
      price,
      quantity,
      priceAtSale,
      total,
      paymentMethod,
      statusOrder,
      saleDate,
    });

    if (newTransaction.statusOrder === "completed") {
      // Adjust the stock
      await updateStock(newTransaction._id, "completed");
    }

    if (newTransaction.statusOrder === "returned") {
      // Adjust the stock
      await updateStock(newTransaction._id, "returned");
    }

    const savedTransaction = await newTransaction.save();

    // Step 2: Update the client document
    await Client.findByIdAndUpdate(
      clientId,
      {
        $push: {
          orders: {
            transactionId: savedTransaction._id,
          },
        },
      },
      { new: true } // Return updated document
    );

    return res
      .status(200)
      .json({ status: "Success", result: savedTransaction });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL THE ORDERS
export const getOrders = async (req, res) => {
  try {
    const order = await Client.findById(req.client._id).populate(
      "orders.transactionId"
    );

    if (!order) {
      return res
        .status(404)
        .json({ status: "Failed", message: "Order not found" });
    }

    const orders = order.orders.map((item) => item.transactionId);

    orders.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    return res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
