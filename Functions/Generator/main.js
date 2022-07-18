function* simpleGenerator() {
    console.log('before 1')
    yield 1
    console.log('after 1')
    console.log('before 2')
    yield 2
    console.log('after 2')
    console.log('before 3')
    yield 3
    console.log('after 3')
}

const generatorObject = simpleGenerator()
console.log(generatorObject) // Object [Generator] {}
console.log(generatorObject.next()) // {value: 1, done: false} done means, futher code exist
// first time calling generator setting up generator object
// executes everything to yield -> .next()
function* generator() {
    yield 1
    yield 2
    yield 3
}

const generator1 = generator()
const generator2 = generator()
console.log('---------------------------------')
console.log(generator1.next()) // 1
console.log(generator1.next()) // 2
console.log(generator2.next()) // 1
console.log(generator2.next()) // 2
console.log('---------------------------------')
// when you create generator object its new instance ITS SEPARATE
function* generateId() {
    let id = 1

    while (true) {
        yield id
        id++
    }
}
const generatorId = generateId()
console.log(generatorId.next()) // 1
console.log(generatorId.next()) // 2
console.log(generatorId.next()) // 3
console.log(generatorId.next()) // 4
console.log(generatorId.next()) // 5
console.log(generatorId.next()) // 6
console.log(generatorId.next()) // 7
console.log(generatorId.next()) // 8
console.log('---------------------------------')

function* generatorArray(array) {
    for (const iterator in array) {
        yield array[iterator]
    }
}
const generateArray = generatorArray([7, 2, 3, 5])
console.log(generateArray.next()) // 7
console.log('---------------------------------')

function* generateId2() {
    let id = 1

    while (true) {
        const increment = yield id
        increment != null ? id += increment : id++
    }
}
const generatorId2 = generateId2()
console.log(generatorId2.next()) // 1
console.log(generatorId2.next()) // 2
console.log(generatorId2.next(3)) // 2 + 3
// console.log(generatorId2.throw(new Error('Hi'))) // Error: Hi
console.log(generatorId2.return(10)) // 10 done: true
console.log(generatorId2.next()) // undefined