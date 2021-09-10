function myLocalIp() {
  const n = require('os').networkInterfaces()

  const myIp = (module.exports = () => {
    for (const k in n) {
      const inter = n[k]
      for (const j in inter)
        if (inter[j].family === 'IPv4' && !inter[j].internal) return inter[j].address
    }
  })

  if (!module.parent) return console.log(myIp())
}

module.exports = function getMyIpAddress() {
  const myLocalIpAddress = myLocalIp()
  return myLocalIpAddress
}
