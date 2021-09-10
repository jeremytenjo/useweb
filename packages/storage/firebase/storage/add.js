import firebase from 'firebase/app'
import 'firebase/storage'

export default async (_userId, _savePath, _payload) => {
  const savePath = _savePath || false
  const payload = _payload || false
  let resultsDocs

  if (savePath && payload) {
    if (typeof payload === 'object' || payload.length > 1) {
      resultsDocs = await one(savePath, payload)
    }

    return resultsDocs
  } else {
    throw new Error(`Parameters with false need a value ${(savePath, payload)}`)
  }
}

const one = (savePath, file) => {
  return new Promise(async (resolve, reject) => {
    const storageRef = firebase.storage().ref()
    const fileRef = storageRef.child(savePath)
    const upleadedFile = fileRef.put(file)
    let uploadUrl

    upleadedFile.on(
      'state_changed',
      () => {},
      (error) => {
        reject(error.code)
      },
      async () => {
        uploadUrl = await upleadedFile.snapshot.ref.getDownloadURL()
        resolve(uploadUrl)
      },
    )
  })
}
