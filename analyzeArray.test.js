/* eslint-disable no-undef */
const analyzeArray = require('./analyzeArray')

const arr = [5, 10, 30, 20, 90]

test('analyze array', () => {
  expect(analyzeArray(arr)).toEqual({
    average: 31,
    min: 5,
    max: 90,
    length: 5
  })
})
