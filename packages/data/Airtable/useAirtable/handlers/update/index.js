export default function update({ base, data: recordId }) {
  return new Promise((resolve, reject) => {
    base.update(recordId, function done(err, record) {
      if (err) reject(err)
      resolve(record)
    })
  })
}
