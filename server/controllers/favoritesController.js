import Client from "../models/authModel.js";
import Products from "../models/productsModel.js";

export const addToFavorites = async (req, res) => {
  try {
    const { productsId } = req.body;

    const clientFavorite = await Client.findById(req.client._id);

    if (!clientFavorite) {
      return res.status(404).json({ message: "Client not Found" });
    }

    const product = await Products.findById(productsId);

    if (!product) {
      return res.status(404).json({ message: "Product not Found" });
    }

    // Check if product is already in favorites
    const isAlreadyFavorited = clientFavorite.favorites.some(
      (fav) => fav.productsId.toString() === productsId
    );

    if (isAlreadyFavorited) {
      return res.status(400).json({ message: "Product already in favorites" });
    }

    clientFavorite.favorites.push({ productsId });

    await clientFavorite.save({ validateBeforeSave: false });

    return res.status(200).json({
      status: "Product added to favorites",
      favorites: clientFavorite.favorites,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteFavorites = async (req, res) => {
  try {
    const { productsId } = req.body;

    const clientFavorite = await Client.findById(req.client._id);

    if (!clientFavorite) {
      return res.status(404).json({ message: "Client not Found" });
    }

    const product = await Products.findById(productsId);

    if (!product) {
      return res.status(404).json({ message: "Product not Found" });
    }

    clientFavorite.favorites = clientFavorite.favorites.filter(
      (item) => item.productsId.toString() !== productsId
    );

    await clientFavorite.save({ validateBeforeSave: false });

    return res.status(200).json({
      status: "Product deleted to favorites",
      favorites: clientFavorite.favorites,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getFavorites = async (req, res) => {
  try {
    const client = await Client.findById(req.client._id).populate(
      "favorites.productsId"
    );

    if (!client) {
      return res.status(404).json({ message: "Client not Found" });
    }

    await client.save({ validateBeforeSave: false });

    return res.status(200).json({
      status: "Success",
      favorites: client.favorites,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
