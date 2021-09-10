// import fbLogin from './firebase/auth.email'
// import cmSave from './WebApi/CredentialMangment/cm.save'

// export default async ({ email, password }) => {
//   // Firebase Login
//   let user = await fbLogin(email, password)

//   let { errMsg, type } = user
//   if (!type) return { errMsg }

//   const {
//     userData: {
//       user: { photoURL, displayName, uid },
//     },
//   } = user

//   const userInfo = {
//     id: uid,
//     email,
//     password,
//     photoURL,
//     name: displayName,
//   }

//   // Save cred to Credential Manager
//   cmSave(userInfo)

//   return { user: userInfo }
// }

// // email: cmUser.id, password
