import axios from "axios"
import { asyncHandler } from "../utils/asynchandler";
import { ApiError } from "../utils/apiError";

const fetchCryptoData = asyncHandler(async (coin) => {
    try {
        const url = `https://api.coingecko.com/api/v3/coins/${coin}`;
        const { data } = await axios.get(url);
        const price = data.market_data.current_price.usd;
        const marketCap = data.market_data.market_cap.usd;
        const change24h = data.market_data.price_change_percentage_24h;

        return { price, marketCap, '24hChange': change24h };
    } catch (error) {
        console.error(`Failed to fetch data for ${coin}`, error);
        throw new ApiError(error);
    }
});

export {fetchCryptoData}
