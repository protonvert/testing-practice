/* eslint-disable no-undef */
const { capitalize, reverseString, ceaserCipher } = require('./stringFunctions')

test('capitalize', () => {
  expect(capitalize('test')).toEqual('Test')
})

test('reverse string', () => {
  expect(reverseString('Test')).toEqual('tseT')
})

test('ceaser cipher', () => {
  expect(ceaserCipher('abcd', 1)).toEqual('bcde')
})

test('ceaser cipher wrapping', () => {
  expect(ceaserCipher('xyyz', 5)).toEqual('cdde')
})

test('ceaser cipher same case', () => {
  expect(ceaserCipher('AbCdE', 1)).toEqual('BcDeF')
})

test('ceaser cipher punctuation', () => {
  expect(ceaserCipher('DeB!!x', 1)).toEqual('EfC!!y')
})
