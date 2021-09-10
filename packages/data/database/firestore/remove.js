import firebase from 'firebase/app'
import 'firebase/firestore'
const db = firebase.firestore()

export default async (_userId, _fileId, _collection) => {
  return new Promise(async (resolve, reject) => {
    const fileId = _fileId || false
    const collection = _collection || false

    try {
      await db.collection(collection).doc(fileId).delete()

      resolve('succes')
    } catch (error) {
      reject(error)
    }
  })
}
