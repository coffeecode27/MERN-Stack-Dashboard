/* Model => memungkinkan kita melakukan modeling skema database, dan berinteraksi dengan database */
import mongoose from "mongoose";

/* Skema data produk */
const AffiliateStatSchema = new mongoose.Schema(
    {
        userId: {type: mongoose.Types.ObjectId, ref: "User"},
        affiliateSales: {
            type: [mongoose.Types.ObjectId],
            ref: "Transactions",
        },
    },
    {
        timestamps: true
    }
       
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema)
export default AffiliateStat;