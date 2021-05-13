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

  let min = Math.ceil(0), max = 0, random = 0
  let arrayMin = 0, arrayMax = 0, arrayRandom = 0

  let password = ""

  for (let i = 0; i < length; i++) {

    arrayMax = Math.floor(array.length)
    arrayRandom = Math.floor(Math.random() * (arrayMax - min) + min)

    if (checkLower) {
      max = Math.floor(lower.length)
      random = Math.floor(Math.random() * (max - min) + min)
      password += lower[random]
    }
    if (checkUpper) {
      max = Math.floor(upper.length)
      random = Math.floor(Math.random() * (max - min) + min)
      password += upper[random]
    }
    if (checkNumeric) {
      max = Math.floor(numeric.length)
      random = Math.floor(Math.random() * (max - min) + min)
      password += numeric[random]
    }
    if (checkSpecial) {
      max = Math.floor(special.length)
      random = Math.floor(Math.random() * (max - min) + min)
      password += special[random]
    }
  }

  alert(`Your password is: ${password}`)
})
