/**
 * @example
 * const collections = await getAllCollections(projectDatabase)
 */ //  db is = projectFbData.firestore()
module.exports = async (db) => {
  const projectCollections = await db.listCollections().then((snapshot) =>
    snapshot.map((snaps) => {
      return snaps['_queryOptions'].collectionId
    }),
  )
  return projectCollections
}
