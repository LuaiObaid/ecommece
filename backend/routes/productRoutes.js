const express = require("express");
const { createProduct } = require("../controllers/product");

const router = express.Router();

router.route("/").post(createProduct);
router.post("/product", createProduct);
module.exports = router;
