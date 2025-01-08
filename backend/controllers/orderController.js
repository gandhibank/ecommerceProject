const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");

// create order => /api/v1/order
exports.createOrder = async (req, res, next) => {
  const cartItems = req.body;
  const amount = Number(
    cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  ).toFixed(2);
  const status = "Pending";

  // /stock update
  cartItems.forEach(async (item) => {
    const product = await productModel.findById(item.product._id);
    product.stock = product.stock - item.quantity;
    await product.save();
  });

  const order = await orderModel.create({ cartItems, amount, status });

  res.json({
    success: true,
    order,
  });
};
