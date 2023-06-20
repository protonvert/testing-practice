/* eslint-disable prefer-const */
const analyzeArray = (arr) => {
  let average
  let min = arr[0]
  let max = arr[0]
  let length = arr.length

  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (arr[i] < min) {
      min = arr[i]
    }

    if (arr[i] > max) {
      max = arr[i]
    }
  }

  average = sum / length

  const obj = {
    average,
    min,
    max,
    length
  }

  return obj
}

module.exports = analyzeArray
