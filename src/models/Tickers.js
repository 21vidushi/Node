const {Schema, model} = require("mongoose");

const tickerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    last: {
        type: Number,
        required: true
    },
    buy: {
        type: Number,
        required: true
    },
    sell: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    },
    base_unit: {
        type: String,
        required: true
    },
}, {timestamps: true});

module.exports = model("Tickers", tickerSchema);