// Resources:
// https://docs.mongodb.com/manual/tutorial/query-arrays/

const searchByCategory = (req, res) => {
  const query = req.payload
  const client = req.client
  const collection = req.collection

  collection
    .find({ categories: { $all: query } })
    .toArray()
    .then((users) => {
      // console.log(users)
      res.json(users)
    })
    .catch((error) => {
      res.status(500).json(error)
    })

  client.close()
}

module.exports = searchByCategory
