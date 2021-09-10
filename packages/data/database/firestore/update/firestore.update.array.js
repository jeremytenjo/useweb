import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

export default async ({ collection, field, value, action, docId }) => {
  const type =
    action === 'add'
      ? firebase.firestore.FieldValue.arrayUnion
      : action === 'remove'
      ? firebase.firestore.FieldValue.arrayRemove
      : null

  await db
    .collection(collection)
    .doc(docId)
    .update({
      [field]: type(value),
    })
}
