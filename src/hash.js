const crypto = require('crypto-browserify')
const {from, to} = require('./utils')

let hash = function (data, hashType, fromType, toType) {
  data = from(data, fromType)
  let result = crypto.createHash(hashType).update(data).digest()
  return to(result, toType)
}

module.exports = {
  /**
   * 
   * @param {string, Buffer} data 
   * @param {string} fromType
   * @returns Buffer
   */
  md5 (data, fromType, toType) {
    return hash(data, 'md5', fromType, toType)
  },
}