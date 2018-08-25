const ECDSA = require('elliptic').ec;

/**
 * supported curves:
 * secp256k1
 * p192
 * p224
 * p256
 * p384
 * p521
 * curve25519
 * ed25519
 */
function EC(options = {}) {
  let curve = options.curve || 'secp256k1'
  this.ec = new ECDSA(curve)

  if (options.priv) {
    this.key = this.ec.keypair({priv: options.priv, pub: options.pub})
  } else if (options.pub) {
    this.key = this.ec.keypair({pub: options.pub})
  } else {
    this.key = this.ec.genKeyPair()
  }
}

EC.prototype.getKeyPair = function () {
  return {
    priv: this.getPrivate(),
    pub: this.getPublic()
  }
}

EC.prototype.getPrivate = function () {
  return this.key.getPrivate()
}

EC.prototype.getPublic = function () {
  return this.key.getPublic()
}

EC.prototype.sign = function (msgHash) {
  return this.key.sign(msgHash)
}

EC.prototype.verify = function (msgHash, signature) {
  return this.key.verify(msgHash, signature)
}

EC.prototype.encrypt = function () {
  throw new Error('not support yet')
}

EC.prototype.decrypt = function () {
  throw new Error('not support yet')
}

module.exports = {
  EC: EC
}