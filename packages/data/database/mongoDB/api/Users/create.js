const create = (req, res) => {
  const data = req.payload || { name: 5 }
  const client = req.client
  const collection = req.collection

  //make sure user desent exist
  collection
    .find({ _id: data._id })
    .toArray()
    .then((user) => {
      //create user if one doesent exist
      if (user.length === 0) {
        collection
          .insertOne(data)
          .then((newUser) => {
            res.json(newUser.insertedId)
          })
          .catch((err) => {
            res.status(500).json(err.message)
          })
      } else {
        res.status(500).json('User Already extts')
      }

      client.close()
    })
}

module.exports = create
