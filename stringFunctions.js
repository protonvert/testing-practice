const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1)
}

const isUpperCase = (character) => {
  if (character.toUpperCase() === character) {
    return true
  } else {
    return false
  }
}

const reverseString = (str) => {
  const q = []
  const reversedString = []
  str = Array.from(str)

  str.forEach((letter) => {
    q.push(letter)
  })

  for (let i = 0; i < str.length; i++) {
    reversedString.push(q.pop())
  }

  return reversedString.join('')
}

const ceaserCipher = (str, shift) => {
  const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz')
  str = Array.from(str)

  const newWordArray = str.map((letter) => {
    if (alphabet.indexOf(letter.toLowerCase()) === -1) {
      return letter
    }

    const currentLetterIndex = alphabet.indexOf(letter.toLowerCase())

    let newIndex = currentLetterIndex + shift
    if (newIndex > 25) {
      newIndex = newIndex - 26
    }

    if (isUpperCase(letter) === true) {
      return alphabet[newIndex].toUpperCase()
    } else {
      return alphabet[newIndex]
    }
  })

  return newWordArray.join('')
}

module.exports = { reverseString, capitalize, ceaserCipher }
