const {from, to} = require('./utils')
const crypto = require('crypto-browserify')

let hash = function (hashAlg, data, enc = {}) {
  let fromType = enc.from
  let toType = enc.to
  data = from(data, fromType)
  let result = crypto.createHash(hashAlg).update(data).digest()
  return to(result, toType)
}

module.exports = {
  hash,

  md5 (data, enc) {
    return hash('md5', data, enc)
  },

  sha1 (data, enc) {
    return hash('sha1', data, enc)
  },

  sha256 (data, enc) {
    return hash('sha256', data, enc)
  },

  sha384 (data, enc) {
    return hash('sha384', data, enc)
  },

  sha512 (data, enc) {
    return hash('sha512', data, enc)
  },

  ripemd160 (data, enc) {
    return hash('ripemd160', data, enc)
  }
}