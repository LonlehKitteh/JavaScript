const alfabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = [1, 2, 3, 4, 5, 6, 7]

// const [a, b] = alfabet
// const [a,, c] = alfabet
const [a, , c, ...rest] = alfabet

// const newArray = [...alfabet, ...numbers]
const newArray = alfabet.concat(numbers)

console.log(a, c, rest)
console.log(newArray)

function sumAndMultiply(a, b) {
    return [a + b, a * b, a / b]
}

const [sum, multiply, division = "no division"] = sumAndMultiply(2, 3)

console.log(sum, multiply, division)


// ---------------- OBJECTS ------------------- //

const personOne = {
    name: "Magda",
    age: 18,
    adress: {
        city: "Będzin",
        street: "Paziowa"
    }
}

const personTwo = {
    favouriteFood: "Bułka",
    age: 19,
}

const { name: firstName, age, adress: { city }, ...restObj } = personOne

console.log(firstName, age, restObj, city)

const match = { ...personOne, ...personTwo }

console.log(match)

const person = {
    name: "Karolina",
    age: 17,
    favouriteFood: "Bułka",
    adress: {
        city: "Będzin",
        street: "Paziowa"
    }
}

function printUser({ name, age }) {
    console.log(name, age)
}
printUser(person)