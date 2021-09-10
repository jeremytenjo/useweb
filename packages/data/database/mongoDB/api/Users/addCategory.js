const addCategory = (req) => {
  const client = req.client
  // const collection = db.collection('users')
  // const name = req.payload

  // //only add if not already present
  // collection
  //   .updateOne(
  //     { name: 'Hayle Whitehead' },
  //     { $addToSet: { categories: { $each: ['d3'] } } },
  //   )
  //   .catch((e) => {
  //     res.send(e)
  //   })

  // res.status(500).json(error)
  client.close()
}

module.exports = addCategory
