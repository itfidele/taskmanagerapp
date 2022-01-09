const express = require('express')
const dashboardController = require('../controllers/dashboardController')
const router = express.Router()

router.get('/', dashboardController)

module.exports = router