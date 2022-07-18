example1() // You can use it before declaration because of hoisting and Js interpreter first get every single function and after that runs code from first line
// It works the same with objects but only to his local scope
function example1() {
    console.log("Hi 1")
}

// example2() // error because cannot access function before initialization same with example3()

const example2 = function () {
    console.log("Hi 2")
}

const example3 = () => {
    console.log("Hi 3")
}

example2()
example3(); // this is important for autocall remember put ; when you autocall functions

(function autocall() {
    console.log("I logged automaticly!")
}())

const person = {
    name: 'Kris',
    surname: 'Kovalsky',
    showName1() {
        const say = function () {
            console.log("Hi")
        }
        return say
    },
    showName2: function () {
        console.log(this.name) // Kris
    },
    showName3: () => {
        console.log(this.name) // this = global, but this.name = undefined
    }
}

person.showName1()() // yes you can but why :D
person.showName2()
person.showName3()