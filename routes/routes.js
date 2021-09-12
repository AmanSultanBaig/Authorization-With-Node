const express = require('express')
const router = express.Router()

const permission = require('../middlewares/authorization.middleware')

const UserController = require('../controllers/user.contorller')

router.get("/api/get-users-list", permission.checkAuthorization(['USER']) ,UserController.getUserList)

module.exports = router