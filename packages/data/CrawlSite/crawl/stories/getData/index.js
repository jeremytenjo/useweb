const crawl = require('../..')

const getTitle = require('./handlers/getTitle')
const getDescription = require('./handlers/getDescription')
const getImage = require('./handlers/getImage')

module.exports = async ({ url } = {}) => {
  const $ = await crawl(url)
  const title = getTitle($)
  const description = getDescription($)
  const image = getImage($)

  return {
    title,
    description,
    image,
  }
}
