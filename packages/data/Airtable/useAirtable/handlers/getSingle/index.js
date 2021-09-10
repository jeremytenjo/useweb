export default function geSingle({ base, data: recordId }) {
  return new Promise((resolve, reject) => {
    base.find(recordId, function done(err, record) {
      if (err) reject(err)
      resolve(record)
    })
  })
}
