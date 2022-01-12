const express = require('express')
const dashboardController = require('../controllers/dashboardController')
const router = express.Router()

router.get('/', dashboardController.homepage)
router.get('/addtask',dashboardController.addtask)
router.post('/addtask', dashboardController.addtask)
router.get('/settings',dashboardController.settings)


module.exports = router