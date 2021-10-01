const GAME = require('../models/GAME')

exports.createGame = async (req, res) => {
    const { _id, name, board } = req.body

    if (!name || board.length === 0) {
        return res.status(400).json({
            success: false,
            message: 'couldnt create game',
        })
    }

    if (_id) {
        const finded = await GAME.findOne({ _id })
        if (finded) {
            finded.board = board
            finded.save()
        }
    } else {
        const { errors } = await GAME.create(req.body)
        if (errors) {
            return res.status(500).json({
                message: 'game not created!',
                success: false,
            })
        }
    }

    return res.status(201).json({
        success: true,
        message: 'game saved!',
    })

}

exports.getGame = async (req, res) => {
    const { name } = req.query
    const finded = await GAME.findOne({ name })
    if (!finded) {
        return res.status(400).json({ success: false, message: "no se encontro" })
    }
    return res.status(200).json({ success: true, data: finded })

}
