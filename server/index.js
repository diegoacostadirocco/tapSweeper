const helmet = require('helmet')
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const mongoose = require('mongoose');

const Config = require('./src/db/Config');
const indexRoutes = require('./src/routes/index');
const app = express();

app.use(helmet())
//console
app.use(morgan('tiny'))

console.log(Config);
app.listen(Config.PORT, () => {
    console.log(`connected to port ${Config.PORT}`)
})

app.use(cors())
app.use(compression())
app.use(express.json({ limit: '15MB' }))
app.use('/api', indexRoutes())

mongoose.connect(
    Config.MONGODB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connect to db'));