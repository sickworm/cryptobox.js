const {expect} = require('chai')
const {md5, sha1, sha256, sha384, sha512, ripemd160} = require('../src/hash')

describe('test', function () {
  it('md5', function () {
    console.log(md5('31', {from: 'hex', to: 'hex'}))
  })

  it('sha1', function () {
    console.log(sha1('31', {from: 'hex', to: 'hex'}))
  })

  it('sha256', function () {
    console.log(sha256('31', {from: 'hex', to: 'hex'}))
  })

  it('sha384', function () {
    console.log(sha384('31', {from: 'hex', to: 'hex'}))
  })

  it('sha512', function () {
    console.log(sha512('31', {from: 'hex', to: 'hex'}))
  })

  it('ripemd160', function () {
    console.log(ripemd160('31', {from: 'hex', to: 'hex'}))
  })
})