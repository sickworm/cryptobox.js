const {expect} = require('chai')
const {des168Enc, des168Dec, aesEnc, aesDec} = require('../src/symm')

describe('test', function () {
  it('des168', function () {
    console.log(des168Enc('3131313131313131', '313131313131313131313131313131313131313131313131', {from: 'hex', to: 'hex', key: 'hex'}))
    console.log(des168Dec('655ea628cf62585f', '313131313131313131313131313131313131313131313131', {from: 'hex', to: 'hex', key: 'hex'}))
  })
  it('aes', function () {
    console.log(aesEnc('31313131313131313131313131313131', '3131313131313131313131313131313131313131313131313131313131313131', {from: 'hex', to: 'hex', key: 'hex'}))
    console.log(aesDec('ab6940d666395010132ca3bbbc69f428', '3131313131313131313131313131313131313131313131313131313131313131', {from: 'hex', to: 'hex', key: 'hex'}))
  })
})