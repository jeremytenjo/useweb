import firebase from 'firebase/app'
import 'firebase/firestore'
const db = firebase.firestore()

export default async (_userId, _collection, _payload) => {
  return new Promise(async (resolve, reject) => {
    const collection = _collection || false
    const payload = _payload || false
    let docRef
    let docData

    try {
      docRef = await db.collection(collection).add(payload)
      docData = await docRef.id

      resolve(docData)
    } catch (error) {
      reject(error)
    }
  })
}
