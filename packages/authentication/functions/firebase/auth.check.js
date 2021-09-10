import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'

export default async () => {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.analytics().setUserId(user.uid)
        resolve({ user })
      } else resolve(false)
    })
  })
}
// export default async () => {
//   const user = await firebase.auth().currentUser

//   if (user && firebase.analytics().setUserId) {
//     firebase.analytics().setUserId(user.uid)
//     return user
//   } else return false
// }
