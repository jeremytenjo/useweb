export default function create({ base, data }) {
  return new Promise((resolve, reject) => {
    const newRecordData = Array.isArray(data) ? data : [data]
    base.create(newRecordData, function done(err, record) {
      if (err) reject(err)
      resolve(record)
    })
  })
}
