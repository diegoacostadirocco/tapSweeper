const express = require('express')

const GAME = require('../controllers/GAME')

const router = express.Router()

router.get('/', GAME.getGame)
router.post('/', GAME.createGame)


module.exports = router
