import mongoose from "mongoose";
import Client from "../models/authModel.js";
import Products from "../models/productsModel.js";

// ADD TO CART
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "No product id found" });
    }

    const client = await Client.findById(req.client._id);

    if (!client) {
      return res
        .status(404)
        .json({ status: "Failed", message: "Client not found" });
    }

    const product = await Products.findById(productId);

    if (!product) {
      return res
        .status(404)
        .json({ status: "Failed", message: "Product not found" });
    }

    const cartItem = client.cart.find(
      (item) => item.productId.toString() === productId
    );

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      client.cart.push({ productId, quantity });
    }

    await client.save({ validateBeforeSave: false });

    res.json({ message: "Item added to cart", cart: client.cart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET CART ITEMS
export const cartItems = async (req, res) => {
  try {
    const client = await Client.findById(req.client._id).populate(
      "cart.productId"
    );

    if (!client) {
      return res
        .status(404)
        .json({ status: "Failed", message: "Client not found" });
    }

    client.cart.sort(
      (a, b) =>
        new Date(b.productId.updatedAt) - new Date(a.productId.updatedAt)
    );

    return res.status(200).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE CART ITEMS
export const removeItems = async (req, res) => {
  try {
    const { productId } = req.body;
    const client = await Client.findById(req.client._id);

    if (!client) {
      return res
        .status(404)
        .json({ status: "Failed", message: "Client not found" });
    }

    client.cart = client.cart.filter(
      (item) => item.productId.toString() !== productId
    );

    await client.save({ validateBeforeSave: false });

    res.json({ message: "Item removed from cart", cart: client.cart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProductId = async (req, res) => {
  try {
    const cart = await Products.findById(req.params.id);

    if (!cart) {
      return res
        .status(404)
        .json({ status: "Failed", message: "Item not found" });
    }

    return res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
