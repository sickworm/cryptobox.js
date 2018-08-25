const {from, to} = require('./utils')
const CryptoJS = require("crypto-js");

let symmEnc = function (symmAlg, data, key, args) {
  let fromType = args.from
  let toType = args.to
  let keyType = args.key
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

let symmDec = function (symmAlg, data, key, args) {
  let fromType = args.from
  let toType = args.to
  let keyType = args.key
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

  des168Enc (data, key, args) {
    return symmEnc('des168', data, key, args)
  },

  des168Dec (data, key, args) {
    return symmDec('des168', data, key, args)
  },

  aesEnc (data, key, args) {
    return symmEnc('aes', data, key, args)
  },

  aesDec (data, key, args) {
    return symmDec('aes', data, key, args)
  }
}