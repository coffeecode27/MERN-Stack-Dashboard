/* Model => memungkinkan kita melakukan modeling skema database, dan berinteraksi dengan database */
import mongoose from "mongoose";

/* Skema data produk */
const ProductSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        description: String,
        category: String,
        rating: Number,
        supply: Number
    },
    {
        timestamps: true
    }
       
);

const Product = mongoose.model("Product", ProductSchema)
export default Product;