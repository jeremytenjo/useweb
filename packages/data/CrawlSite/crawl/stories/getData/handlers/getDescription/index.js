module.exports = ($) => {
  const description = $('meta[name="twitter:description"]').attr('content')

  return description
}
