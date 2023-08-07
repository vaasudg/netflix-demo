const express = require('express')
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const dataRouter = require('./router/data.router')

const { NODE_ENV, CLIENTURL, LOCALURL, PORT } = process.env

const app = express()
const port = NODE_ENV === 'production' ? PORT : 3001
const origin = () => (NODE_ENV === 'production' ? CLIENTURL : LOCALURL)

app.use(express.static(path.join(__dirname, '../build')))

app.use(helmet())
app.use(compression())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded())
app.use(
  cors({
    origin: [origin],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
)

// Define API routes here
app.use('/api', dataRouter)
// Define a catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
