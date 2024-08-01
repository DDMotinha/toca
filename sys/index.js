const express = require('express')
const router = express.Router()

const users = require('./users')
router.use('/users', users)

const partys = require('./parties')
router.use('/parties', partys)

module.exports = router