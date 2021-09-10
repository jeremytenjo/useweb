// // Vendors
// const express = require('express')
// const app = express()
// const MongoClient = require('mongodb').MongoClient

// // Routes
// const Users = require('./Users/usersIndex.js')
// const Photos = require('./Photos/photosIndex.js')

// // Vars
// const dbName = 'Estilistta-db'

// // Middleware
// app.use(async (req, res, next) => {
//   const db_uri =
//     'mongodb://jeremytenjo:Shadowsombra7!@cluster0-shard-00-00-ji1uv.mongodb.net:27017,cluster0-shard-00-01-ji1uv.mongodb.net:27017,cluster0-shard-00-02-ji1uv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'

//   MongoClient.connect(db_uri, { useNewUrlParser: true })
//     .then((client) => {
//       req.client = client
//       req.db = client.db(dbName)
//       return next()
//     })
//     .catch((error) => {
//       console.log(error)
//       res.json(error)
//     })
// })

// // Router
// app.use('/users', Users)
// app.use('/photos', Photos)

// // Endware
// app.use((req) => {
//   console.log('SHOULD RUN LATS to close client')
//   req.client.close()
// })

// // Exports
// module.exports = app
