const fetch = require('node-fetch')
const cheerio = require('cheerio')

module.exports = (url) =>
  new Promise(async (resolve, reject) => {
    try {
      const data = await fetch(url)
      const html = await data.text()
      const $ = cheerio.load(html)

      resolve($)
    } catch (error) {
      reject(error)
    }
  })
