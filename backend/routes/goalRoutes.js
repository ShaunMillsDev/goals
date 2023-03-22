const express = require('express')
const router = express.Router()
const { getGoals, setGoal, putGoal, deleteGoal, updateGoal } = require('../controllers/goalController')

router.route('/')
    .get(getGoals)
    .post(setGoal)

router.route('/:id')
    .put(updateGoal)
    .delete(deleteGoal)

// export our router
module.exports = router