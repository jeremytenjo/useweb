export default async function firestoreGet(query) {
  const data = []
  const querySnapshot = await query.get()

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() })
  })

  return data
}
