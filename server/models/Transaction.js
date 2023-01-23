/* Model => memungkinkan kita melakukan modeling skema database, dan berinteraksi dengan database */
import mongoose from "mongoose";

/* Skema data transaksi */
const TransactionSchema = new mongoose.Schema(
    {
        userId: String,
        cost: String,
        products: {
            type: [mongoose.Types.ObjectId],
            of : Number
        },
    },
    {
        timestamps: true
    }
       
);

const Transaction = mongoose.model("Transaction", TransactionSchema)
export default Transaction;