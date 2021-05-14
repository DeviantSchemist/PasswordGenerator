document.getElementById('generate').addEventListener('click', () => {
  let lower = 'abcdefghijklmnopqrstuvwxyz'
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numeric = '0123456789'
  let special = '!@#$%^&*()'

  let array = [lower, upper, numeric, special]

  let length = parseInt(prompt("Enter length of password: "))
  let checkLower = confirm('Use lowercase letters?')
  let checkUpper = confirm('Use uppercase letters?')
  let checkNumeric = confirm('Use numbers?')
  let checkSpecial = confirm('Use special characters?')

  let min = Math.ceil(0), max = 0, random = 0, arrayIndexMax = 0, arrayIndexRandom = 0
  let arrayIndex = []

  if (checkLower) {
    arrayIndex.push(0)
  }
  if (checkUpper) {
    arrayIndex.push(1)
  }
  if (checkNumeric) {
    arrayIndex.push(2)
  }
  if (checkSpecial) {
    arrayIndex.push(3)
  }

  let password = ""

  for (let i = 0; i < length; i++) {
    arrayIndexMax = Math.floor(arrayIndex.length)
    arrayIndexRandom = Math.floor(Math.random() * (arrayIndexMax - min) + min)


    max = Math.floor(array[arrayIndex[arrayIndexRandom]].length)
    random = Math.floor(Math.random() * (max - min) + min)
    password += array[arrayIndex[arrayIndexRandom]][random]
  }

  document.getElementById('password').readonly = false
  document.getElementById('password').textContent = password
})
