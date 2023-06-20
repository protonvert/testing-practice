/* eslint-disable no-undef */
const { add, subtract, divide, multiply } = require('./calculator')

test('add', () => {
  expect(add(5, 5)).toEqual(10)
})

test('subtract', () => {
  expect(subtract(20, 5)).toEqual(15)
})

test('divide', () => {
  expect(divide(20, 5)).toEqual(4)
})

test('multiply', () => {
  expect(multiply(10, 10)).toEqual(100)
})
