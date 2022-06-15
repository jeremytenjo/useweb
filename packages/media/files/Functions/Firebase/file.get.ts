import firestoreRead from '../../../../data/database/firestore/read'

export default async (_userId, _collection, _payload) => {
  const userId = _userId || false
  const collection = _collection || false
  const payload = _payload || false
  let uploadedFileData

  if (userId && collection && payload) {
    uploadedFileData = await firestoreRead(userId, collection, payload)

    return uploadedFileData
  } else {
    throw new Error(`Parameters with false need a value ${(userId, collection, payload)}`)
  }
}
