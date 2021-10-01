
const express = require('express');
const GAME = require('./GAME');

const indexRoutes = () => {
  const router = express.Router()

  router.use('/game', GAME)


  return router
}

module.exports = indexRoutes;