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
