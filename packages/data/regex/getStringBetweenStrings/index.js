module.exports = function getStringBetweenStrings(string, stringLeft, strinRight) {
  const regEx = new RegExp(`${stringLeft}(.*)${strinRight}`, 'g')
  const res = string.match(regEx)

  return res
}

// Or test.match(new RegExp(firstvariable + "(.*)" + secondvariable));
