import * as functions from 'firebase-functions'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((req, res) => {
  const data = JSON.parse(req.body)

  res.json(
    JSON.stringify({
      hello: `hello my name is ${data.name}`,
    }),
  )
})
