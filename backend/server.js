const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000
const app = express()
const goalRoutes = require('./routes/goalRoutes')

// routes and middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/goals', goalRoutes)

// error handling middleware
app.use(errorHandler)

// listen for connections
app.listen(port, () => console.log(`Server started on port ${port}`))
