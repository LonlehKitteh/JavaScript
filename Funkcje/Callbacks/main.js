function someFunction(x) {
    console.log(x)
}

const a = 'blabla'
const b = () => console.log("Function in someFunction")

someFunction(a) // blabla
someFunction(b) // function: b

// ---------- IMAGINE -----------

function logA(callback) {
    setTimeout(() => {
        console.log('a')

        const someValue = 'This is from a'
        callback(someValue)
    }, 1000)
}

function logB(x) {
    console.log("b")
    console.log(x)
}

logA(logB)

const arr = [1, 3, 5].map(e => e * 2) // <------ this is callback
console.log(arr)

const arr1 = [1, 3, 5]

const multiply = e => e * 2
const add = e => e + 1
const odd = e => e - 1

const transformArray = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i])
    }
}

transformArray(arr1, odd)

console.log(arr1)