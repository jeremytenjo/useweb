// Vendors
const express = require('express')
const router = express.Router()

// Routes
const Charge = require('./stripe.charge')

// Router
router.post('/charge', (req, res) => Charge(req, res))

// Exports
module.exports = router
