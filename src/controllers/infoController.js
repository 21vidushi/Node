const axios = require("axios");
const Ticker = require("../models/Tickers");

exports.getTickers = async(req, res) => {
    try {
        const {data} = await axios.get(`${process.env.SOURCE_URL}/api/v2/tickers`);
    
        // convert obect of objects to array of objects
        const arr = Object.keys(data).map((name) => data[name]);
       
        const tickers = arr.splice(0,10).map(async(ticker) => {
            const {name, last, buy, sell, volume, base_unit } = ticker;
    
            const updatedTicker = await Ticker.findOneAndUpdate(
                {name: ticker.name},
                {
                    $set: {
                        name, last, buy, sell, volume, base_unit
                    }
                },
                {upsert: true, new: true}
            );
            return updatedTicker
        });
    
        res.json({
            success: true,
            data: await Promise.all(tickers)
        });
        
    } catch (error) {      
        res.status(500).send({
            success: false,
            message: "Internal server error"
        })
    }
}