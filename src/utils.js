
module.exports = {
  from (data, fromType) {
    if (fromType === 'hex') return Buffer.from(data, 'hex')
    if (fromType === 'base64') return Buffer.from(data, 'base64')
    return Buffer.from(data)
  },

  to (buffer, toType) {
    if (!toType) return buffer
    return buffer.toString(toType)
  },

  checkHex (data) {
    if (typeof data !== 'string') {
      throw Error('Data is not string!')
    }
    if (data.length % 2 !== 0) {
      throw Error('Invalid hex data size, length % 2 !== 0!')
    }
    if (!data.match(/^[a-fA-F0-9]+$/)) {
      throw Error('Data is not 0-9/a-f/A-F string!')
    }
  }
}