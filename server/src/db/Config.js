const dotenv = require('dotenv');
dotenv.config()

const { PORT, NODE_ENV, MONGODB } = process.env
if (!PORT || !NODE_ENV || !MONGODB) {
  let error = 'Se debe configurar las siguientas variables de entorno:'
  error += '\nPORT'
  error += '\nNODE_ENV'
  error += '\nMONGODB'
  console.log(error)
  process.exit(0)
}

module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: NODE_ENV,
  MONGODB
}
