const Location = () => {
  if (typeof location !== 'undefined') return location

  return {
    pathname: '',
    hostname: '',
    href: '',
  }
}

export default Location
