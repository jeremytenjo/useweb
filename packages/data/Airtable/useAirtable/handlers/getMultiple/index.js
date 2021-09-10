export default function getMultiple({ base, data }) {
  return new Promise((resolve, reject) => {
    base.select(data).eachPage(
      function page(records, fetchNextPage) {
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        resolve({ records, fetchNextPageFunction: fetchNextPage })
      },
      function done(err) {
        if (err) reject(err)
      },
    )
  })
}
