import {CryptoData} from '../models/cryptodata.model.js';
import { calculateStandardDeviation } from '../utils/standardDeviation.js';
import { asyncHandler } from '../utils/asynchandler.js';
import { ApiError } from '../utils/apiError.js';   
import { ApiResponse } from '../utils/apiResponse.js';


const getCryptoStats = asyncHandler(async (req, res) => {
    const { coin } = req.query;

    const latestData = await CryptoData.findOne({ coin }).sort({ timestamp: -1 });

    if (!latestData) {
        throw new ApiError(
            404,
            `No data found for ${coin}`
    )}

    return res.status(200).json(new ApiResponse(200,{
        price: latestData.price,
        marketCap: latestData.marketCap,
        '24hChange': latestData['24hChange'],
    },       
    `Stats fetched successfully for ${coin}`
));    
});

const getPriceDeviation = asyncHandler(async (req, res) => {
    const { coin } = req.query;

    const prices = await CryptoData.find({ coin })
        .sort({ timestamp: -1 })
        .limit(100)
        .select('price');

    if (prices.length < 2) {
        throw new ApiError(400,`Not enough data to calculate deviation for ${coin}`)
    }

    const priceArray = prices.map(p => p.price);

    const deviation = calculateStandardDeviation(priceArray);
    return res.status(200).json(new ApiResponse(200,{
        deviation: deviation,
    },
    `Deviation fetched successfully for ${coin}`
));
});

export{getCryptoStats,getPriceDeviation}
