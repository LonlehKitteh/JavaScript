const easyPasswordGen = () => {
  // easy [a-z] + [A-Z] + at least 6 long
  let password = "";
  const randomLength = Math.floor(Math.random() * 2 + 6);
  for (let i = 0; i < randomLength; i++) {
    let asciiValue = Math.floor(Math.random() * 26) + 97 // generate lowercase letter
    if (Math.random() < 0.3)
      asciiValue -= 32; // convert to uppercase
    password += String.fromCharCode(asciiValue)
  }
  if (password === password.toLocaleLowerCase()) {
    const passArr = Array.from(password)
    const randomLetter = Math.floor(Math.random() * 6)
    passArr[randomLetter] = passArr[randomLetter].toUpperCase()
    password = passArr.join('')
  }
  return password;
};

console.log(easyPasswordGen());
