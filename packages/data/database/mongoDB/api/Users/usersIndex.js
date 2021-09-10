// Vendors
const express = require('express')
const router = express.Router()

// Functions
const create = require('./create')
const addCategory = require('./addCategory')
const removeCategory = require('./removeCategory')
const searchByName = require('./searchByName')
const searchByCategory = require('./searchByCategory')

// Middleware
router.use((req, res, next) => {
  const db = req.db
  req.collection = db.collection('users')
  req.payload = req.body.payload

  return next()
})

// Router
router.post('/create', (req, res) => create(req, res))
router.post('/addCategory', (req, res) => addCategory(req, res))
router.post('/removeCategory', (req, res) => removeCategory(req, res))
router.post('/searchByName', (req, res) => searchByName(req, res))
router.post('/searchByCategory', (req, res) => searchByCategory(req, res))

// Exports
module.exports = router
