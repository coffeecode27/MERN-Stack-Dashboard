/* Model => memungkinkan kita melakukan modeling skema database, dan berinteraksi dengan database */
import mongoose from "mongoose";

/* Skema data produk */
const ProductStatSchema = new mongoose.Schema(
    {
      productId: String,
      yearlySalesTotal: Number,
      yearlyTotalSoldUnits: Number,
      year: Number,
      monthlyData: [
        {
            month: String,
            totalSales: Number,
            totalUnits: Number
        }
      ],
      dailyData: [
        {
        date: String,
        totalSales: Number,
        totalUnits: Number
      }
    ]
    },
    {
        timestamps: true
    }
       
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema)
export default ProductStat; 