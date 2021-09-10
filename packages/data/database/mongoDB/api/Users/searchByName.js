const searchByName = async (req, res) => {
  const client = req.client
  const collection = req.collection
  const payload = req.payload
  const regxName = new RegExp(payload)

  try {
    const foundUsers = await collection
      .find({ name: { $regex: regxName, options: 'i' } })
      .toArray()

    res.json(foundUsers)
  } catch (error) {
    res.status(500).json(error)
  }

  client.close()
}

// Exports
module.exports = searchByName
