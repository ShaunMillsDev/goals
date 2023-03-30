const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

const goalRoutes = require('./routes/goalRoutes')
const userRoutes = require('./routes/userRoutes')

// routes and middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', goalRoutes)
app.use('/api/users', userRoutes)

// error handling middleware
app.use(errorHandler)

// listen for connections
app.listen(port, () => console.log(`Server started on port ${port}`))
