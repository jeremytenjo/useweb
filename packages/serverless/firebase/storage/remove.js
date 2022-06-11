import React from 'react'
import firebase from 'firebase/app'
import 'firebase/storage'

export default async (_userId, _payload, _savePath) => {
  const userId = _userId || false
  const payload = _payload || false
  const savePath = _savePath || false
  let resultsDocs

  if (userId && payload) {
    if (payload.length > 1) {
      resultsDocs = await one(userId, payload)
    } else if (payload.length === 1) {
      resultsDocs = await mulitple(payload)
    }
    return resultsDocs
  } else {
    throw new Error(`Parameters with false need a value ${(userId, savePath)}`)
  }
}

const one = async (userId, payload) => {
  return new Promise(async (resolve, reject) => {
    const storageRef = firebase.storage().ref()
    const fileRef = storageRef.child(`users/${userId}/${payload}`)

    try {
      await fileRef.delete()
      resolve('Success')
    } catch (error) {
      reject(error)
    }
  })
}

const mulitple = () => {
  return new Promise(async () => {})
}
