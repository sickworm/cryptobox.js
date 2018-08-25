const {from, to} = require('./utils')
const CryptoJS = require("crypto-js");

let symmEnc = function (symmAlg, data, key, enc = {}) {
  let fromType = enc.from
  let toType = enc.to
  let keyType = enc.key
  data = from(data, fromType)
  key = from(key, keyType)

  let input = CryptoJS.lib.WordArray.create(data)
  let pass = CryptoJS.lib.WordArray.create(key)
  let result
  switch (symmAlg) {
    case 'des168':
    result = CryptoJS.TripleDES.encrypt(input, pass, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.NoPadding
    })
    break
    case 'aes':
    result = CryptoJS.AES.encrypt(input, pass, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.NoPadding
    })
    break
    default:
    throw new Error('unsupported symmetric algorithm')
  }
  result = Buffer.from(result.ciphertext.toString(CryptoJS.enc.Hex), 'hex')
  return to(result, toType)
}

let symmDec = function (symmAlg, data, key, enc) {
  let fromType = enc.from
  let toType = enc.to
  let keyType = enc.key
  data = from(data, fromType)
  key = from(key, keyType)

  let input = {ciphertext: CryptoJS.lib.WordArray.create(data)}
  let pass = CryptoJS.lib.WordArray.create(key)
  let result
  switch (symmAlg) {
    case 'des168':
    result = CryptoJS.TripleDES.decrypt(input, pass, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.NoPadding
    })
    break
    case 'aes':
    result = CryptoJS.AES.decrypt(input, pass, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.NoPadding
    })
    break
    default:
    throw new Error('unsupported symmetric algorithm')
  }
  result = Buffer.from(result.toString(CryptoJS.enc.Hex), 'hex')
  return to(result, toType)
}

module.exports = {
  symmEnc,

  symmDec,

  des168Enc (data, key, enc) {
    return symmEnc('des168', data, key, enc)
  },

  des168Dec (data, key, enc) {
    return symmDec('des168', data, key, enc)
  },

  aesEnc (data, key, enc) {
    return symmEnc('aes', data, key, enc)
  },

  aesDec (data, key, enc) {
    return symmDec('aes', data, key, enc)
  }
}