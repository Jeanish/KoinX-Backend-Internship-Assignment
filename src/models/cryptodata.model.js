import mongoose, { Schema } from "mongoose";

const cryptoSchema = new Schema({
  coin: {
    type: String,
    required: true,
    enum: ['bitcoin', 'matic-network', 'ethereum'],
  },
  price: {
    type: Number,
    required:true,
  },
  marketCap: {
    type: Number,
    required:true,
  },
  "24hChange":{
    required:true,
    type: Number,
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
},
});

export const CryptoData = mongoose.model("CryptoData", cryptoSchema);
