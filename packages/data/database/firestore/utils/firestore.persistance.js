import 'firebase/firestore'

export default (firebase) =>
  firebase
    .firestore()
    .enablePersistence()
    .catch((err) => {
      if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        console.log(err.code)
      } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        console.log(err.code)
      }
    })
