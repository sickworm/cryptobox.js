const {expect} = require('chai')
const {md5} = require('../src/hash')

describe('test', function () {
  it('test1', () => {
    expect(1 + 1).to.equal(2)
  })
  it('test2', () => {
    expect(1 + 2).to.equal(3)
  })
  it('md5', function () {
    console.log(md5('a', 'hex', 'hex'))
  })
})