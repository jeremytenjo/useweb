module.exports = ($) => {
  const image = $('meta[name="twitter:image"]').attr('content')

  return image
}
