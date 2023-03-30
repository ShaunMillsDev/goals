const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe } = require('../controllers/userController')

// api/users/
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

// export our router
module.exports = router