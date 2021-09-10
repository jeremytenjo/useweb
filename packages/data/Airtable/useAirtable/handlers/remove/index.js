export default function remove({ base, data: recordId }) {
  return new Promise((resolve, reject) => {
    base.destroy(recordId, function done(err, record) {
      if (err) reject(err)
      resolve(record)
    })
  })
}
