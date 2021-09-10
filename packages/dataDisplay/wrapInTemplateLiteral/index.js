module.exports = function wrapInTemplateLiteral(string, { simple = false } = {}) {
  const stringWrappedInTemplateLiteral = !simple
    ? `${'`${'}${string}${'}`'}`
    : `${'`'}${string}${'`'}`

  return stringWrappedInTemplateLiteral
}
