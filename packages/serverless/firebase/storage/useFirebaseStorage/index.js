import { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/storage'

import useAsync from '../../../../data/useAsync'

export default function useFirebaseStorage({ path, file, type = 'upload' }) {
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(null)

  const fetcher = async () => {
    return new Promise(async (resolve, reject) => {
      if (type === 'upload' && !file) reject('missing file')

      const storageRef = firebase.storage().ref()
      const fileRef = storageRef.child(path)

      if (type === 'upload') {
        const upleadedFile = fileRef.put(file)
        let uploadUrl

        upleadedFile.on(
          'state_changed',
          (snapshot) => {
            const currentProgress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgress(currentProgress)
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED:
                setPaused(true)
                break
              case firebase.storage.TaskState.RUNNING:
                setPaused(false)
                break
            }
          },
          (error) => {
            reject(error.code)
          },
          async () => {
            uploadUrl = await upleadedFile.snapshot.ref.getDownloadURL()
            resolve(uploadUrl)
          },
        )
      }

      if (type === 'delete') {
        if (!path) reject('missing path param')

        try {
          await fileRef.delete()
          resolve(`${path} deleted successfuly`)
        } catch (error) {
          reject(error)
        }
      }
    })
  }

  const promise = useAsync(fetcher)

  return { ...promise, progress, paused }
}
