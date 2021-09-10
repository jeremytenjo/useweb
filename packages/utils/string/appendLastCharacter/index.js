// appends character at the end of string if not there eg
// let test = hello.com appendLastCharacter(test, /) returns hello.com/
// let test = hello.com/ appendLastCharacter(test, /) returns hello.com/

module.exports = (string, character = '') => {
  const appendedString = string[string.length - 1] !== character ? `${string}/` : string

  return appendedString
}
