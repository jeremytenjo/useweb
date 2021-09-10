export default ({ post, operator, value }) => {
  switch (operator) {
    case '>':
      return post > value
    case '<':
      return post < value
    case '>=':
      return post >= value
    case '<=':
      return post <= value
    case '===':
      return post === value
    case '!==':
      return post !== value
    default:
      return `Options available > , < , >= , <= , === , !== , instead got ${operator}`
  }
}
