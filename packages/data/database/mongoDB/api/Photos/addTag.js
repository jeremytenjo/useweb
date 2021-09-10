const addTag = async (req) => {
  const payload = req.payload
  // const client = req.client
  // const collection = req.collection
  console.log(payload)
  //  collection
  //    .find({ name: data.name })
  //    .toArray()
  //    .then((user) => {
  //      //addTag user if one doesent exist
  //      if (user.length === 0) {
  //        collection
  //          .insertOne(data)
  //          .then((newUser) => {
  //            res.json(newUser.insertedId)
  //          })
  //          .catch((err) => {
  //            res.json(err.message)
  //          })
  //      } else {
  //        res.json('User Already Exists')
  //      }
  //      client.close()
  //    })
}

module.exports = addTag
