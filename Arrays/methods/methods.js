// concat

let arr01 = [1, 2, 3]
let arr02 = ['a', 'b', 'c']
let arr03 = [{
    isCompleted: true,
    speed: 4
}]
let newArray = arr01.concat(arr02, arr03)
//console.log(newArray[6].isCompleted)
console.log(newArray) // [ 1, 2, 3, 'a', 'b', 'c', { isCompleted: true, speed: 4 } ]

// -------------------------------

// copeWithin

const arr04 = ['a', 'b', 'c', 'd', 'e']
console.log(`${arr04} | ${arr04.copyWithin(0, 2, 5)}`) // [a, b, c, d, e] | [c, d, e, d, e]

// -------------------------------

// entries

const arr05 = ['a', 'b', 'c'];
const i = arr05.entries()
arr05.forEach(() => {
    console.log(i.next().value) // [ 0, 'a' ]  [ 1, 'b' ]  [ 2, 'c' ]
});
console.log(i.next().value) // undefined

// ------------------------------

// every

const arr06 = [50, 43, 23, 456, 32, 39]
console.log(arr06.every(e => e >= 50)) // false

// ------------------------------

const arr07 = [1, 2, 3, 4]

console.log(arr07.fill(0, 1, 4)) // fill "what", "from", "to" // [ 1, 0, 3, 4 ]

// ------------------------------

const arr08 = [12, 45, 32, 65, 21, 34];

console.log(arr08.filter(e => e > 20)) // [45, 32, 65, 21, 34]

// ------------------------------

const arr09 = [1, 6, -34, 66, -43, 26, -7, 6]

console.log(arr09.find(e => e < 0)); // -34

// ------------------------------

const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(arr10[arr10.findIndex(e => e > 6)]); // 7

// ------------------------------

const arr11 = [1, 2, [3, 4, [5, 6]]];

console.log(arr11.flat(2)); // [1, 2, 3, 4, 5, 6]

const arr12 = [1, , , , 3];

console.log(arr12.flat()) // [1, 3]

// ------------------------------

const arr13 = [13, 24, 23, 34, 45, 66];

arr13.forEach((value, index) => {
    console.log(`to jest value: ${value} a to jest index: ${index}`)
})

// ------------------------------

console.log(Array.from({ length: 8 }, (_, k) => k + 1)); // [1, ... , 8]

const arr14 = [2, 4, 6, 8]

console.log(Array.from(arr14, v => v / 2)) // [1, 2, 3, 4]

// ------------------------------

console.log([1, 2, 3].includes(2)) // true

// ------------------------------

const arr15 = [1, 2, 3]
console.log(arr15.indexOf(2)) // 1
console.log(arr15.indexOf(7)) // -1

// ------------------------------

console.log(Array.isArray([1, 2, 3, 4])); // true
console.log(Array.isArray(true)); // false

// ------------------------------

console.log([1, "JavaScript", true, [1, 2]].join('-')) // 1-JavaScript-true-1,2

// ------------------------------

const arr16 = ['a', 'b', 'c'];
const iteration = arr16.keys();
console.log(iteration.next()); // { value: 0, done: false }
console.log(iteration.next().value); // 1

// ------------------------------

console.log([2, 5, 8, 0, 2, , 2, 55, 8, 5, 8,].lastIndexOf(5));  // 9

// ------------------------------

const arr = [1, 5, 10, 15];
console.log(arr.map(element => element * 2)) // [2, 10 ,20 ,30]