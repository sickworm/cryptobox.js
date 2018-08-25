const {expect} = require('chai')
const ECDSA = require('elliptic').ec
const EC = require('../src/ecdsa').EC

describe('test', function () {
  it('test1', function () {
    let ec = new ECDSA('secp256k1')
    let key = ec.genKeyPair()
    console.log('key1', key)
    let publicKey = key.getPublic();
    console.log('publicKey1', publicKey)

    let msgHash = Buffer.from('0001020304050607080900A', 'hex')
    let signature = key.sign(msgHash)
    console.log('signature1', signature)
    let result = key.verify(msgHash, signature)
    console.log('verify result1', result)
  })
  it('test', function () {
    let ecdsa = new EC()
    console.log('key', ecdsa.getKeyPair())
    let msgHash = Buffer.from('0001020304050607080900A', 'hex')
    let signature = ecdsa.sign(msgHash)
    console.log('signature', signature)
    let result = ecdsa.verify(msgHash, signature)
    console.log('verify result', result)
  })
})
