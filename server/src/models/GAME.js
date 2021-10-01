const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GAME = new Schema(
    {
        name: { type: String, required: true, unique: true },
        board: [{ col: { type: Number, required: true }, row: { type: Number, required: true }, dimensions: { type: Number } }]


    },
    { timestamps: true }
)

module.exports = mongoose.model('game', GAME)