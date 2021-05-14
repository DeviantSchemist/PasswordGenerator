document.getElementById('generate').addEventListener('click', () => {

  // initialize all character and number sets
  let lower = 'abcdefghijklmnopqrstuvwxyz'
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numeric = '0123456789'
  let special = '!@#$%^&*()'

  // put all the sets into an array for indexing
  let array = [lower, upper, numeric, special]

  // length of password
  let length = 0

  // input validation
  do {
    let validate = prompt("Enter length of password: ")
    // input must be a valid integer and be greater than or equal to 8
    if (Number.isInteger(parseInt(validate)) && parseInt(validate) >= 8) {
      length = validate
      break
    }
    else {
      alert('Invalid input. Enter again.')
    }
  } while (true)

  // the password criteria
  let checkLower = confirm('Use lowercase letters?')
  let checkUpper = confirm('Use uppercase letters?')
  let checkNumeric = confirm('Use numbers?')
  let checkSpecial = confirm('Use special characters?')

  // variables used to randomize
  let min = Math.ceil(0), max = 0, random = 0, arrayIndexMax = 0, arrayIndexRandom = 0

  /* an empty array that will fill up based on password criteria
    is used to select a random set within the set array
  */
  let arrayIndex = []

  // fills up the empty array based on password criteria
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

  // the password to be generated
  let password = ""

  // add a random character to the password then loops based on the length of password
  for (let i = 0; i < length; i++) {

    // randomizing for set selection
    arrayIndexMax = Math.floor(arrayIndex.length)
    arrayIndexRandom = Math.floor(Math.random() * (arrayIndexMax - min) + min)

    // randomizing for character selection within one of the sets
    max = Math.floor(array[arrayIndex[arrayIndexRandom]].length)
    random = Math.floor(Math.random() * (max - min) + min)

    // adding the random character to the password
    password += array[arrayIndex[arrayIndexRandom]][random]
  }

  // displays the generated password onto the HTML page
  document.getElementById('password').readonly = false
  document.getElementById('password').textContent = password
})
