const {from, to} = require('./utils')
const crypto = require('crypto-browserify')

let hash = function (hashAlg, data, args) {
  let fromType = args.from
  let toType = args.to
  data = from(data, fromType)
  let result = crypto.createHash(hashAlg).update(data).digest()
  return to(result, toType)
}

module.exports = {
  hash,

  md5 (data, args) {
    return hash('md5', data, args)
  },

  sha1 (data, args) {
    return hash('sha1', data, args)
  },

  sha256 (data, args) {
    return hash('sha256', data, args)
  },

  sha384 (data, args) {
    return hash('sha384', data, args)
  },

  sha512 (data, args) {
    return hash('sha512', data, args)
  },

  ripemd160 (data, args) {
    return hash('ripemd160', data, args)
  }
}