module.exports = ($) => {
  const title = $('meta[property="og:title"]').attr('content')

  return title
}
