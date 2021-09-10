import firebase from 'firebase/app'
import 'firebase/firestore'
const db = firebase.firestore()

export default async (_userId, _collection, _payload) => {
  const userId = _userId || false
  const collection = _collection || false
  const payload = _payload || false
  let resultsDocs

  if (userId && collection && payload) {
    if (payload.type === 'one') {
      resultsDocs = await getById(userId, collection, payload)
    } else if (payload.type === 'conditional') {
      resultsDocs = await getByCondition(userId, collection, payload)
    }

    return resultsDocs
  } else {
    throw new Error(`Parameters with false need a value ${(userId, collection, payload)}`)
  }
}

const getById = async (userId, collection, payload) => {
  let docData
  let docRef

  return new Promise(async (resolve, reject) => {
    try {
      docRef = await db.collection(collection).doc(payload).get()
      docData = await docRef.get()
      resolve(docData)
    } catch (error) {
      reject(error)
    }
  })
}

const getByCondition = async (userId, collection, payload) => {
  let docsRef
  const docsReturned = []

  return new Promise(async (resolve, reject) => {
    try {
      if (payload.sortBy && payload.where) {
        docsRef = await db
          .collection(collection)
          .where(payload.where.field, payload.where.condition, payload.where.value)
          .orderBy(payload.sortBy.field, payload.sortBy.type)
          .get()
      } else if (payload.where) {
        docsRef = await db
          .collection(collection)
          .where(payload.where.field, payload.where.condition, payload.where.value)
          .get()
      }

      docsRef.forEach((doc) => {
        docsReturned.push({ _id: doc.id, ...doc.data() })
      })
      resolve(docsReturned)
    } catch (error) {
      reject(error)
    }
  })
}
