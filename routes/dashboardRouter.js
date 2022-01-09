const express = require('express')
const dashboardController = require('../controllers/dashboardController')
const router = express.Router()

router.get('/', dashboardController.homepage)
router.get('/addtask',dashboardController.addtask)

module.exports = router