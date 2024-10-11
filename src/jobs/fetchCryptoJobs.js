import cron from "node-cron"
import CryptoData from "../models/cryptodata.model.js"
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asynchandler.js";

const { fetchCryptoData } = require('../services/cryptoService.js');

const fetchCryptoJob = asyncHandler(() => {
    cron.schedule('0 */2 * * *', async () => {
        try {
            const coins = ['bitcoin', 'matic-network', 'ethereum'];

            for (const coin of coins) {
                const { price, marketCap, '24hChange': change24h } = await fetchCryptoData(coin);

                await CryptoData.create({ coin, price, marketCap, '24hChange': change24h });
            }
            
            console.log('Crypto data successfully stored');
            
        } catch (error) {

            console.error('Failed to store crypto data', error);
            throw new ApiError(500,"Failed to store crypto data")
        }
    });
});

export { fetchCryptoJob };
