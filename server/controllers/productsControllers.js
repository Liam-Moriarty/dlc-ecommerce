import Products from "../models/productsModel.js";

// GET PAGINATED PRODUCTS
export const getPaginatedProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;
    const totalItems = await Products.countDocuments();

    const products = await Products.find()
      .sort({ product: 1 })
      .skip(startIndex)
      .limit(limit);

    const product = products.map((item) => ({
      ...item.toObject(),
    }));

    res.json({
      totalItems,
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit),
      product,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const products = await Products.find({}).sort({ product: 1 });

    const product = products.map((item) => ({
      ...item.toObject(),
      product: item.product.toLowerCase(),
      category: item.category.toLowerCase(),
      status: item.status.toLowerCase(),
    }));

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
