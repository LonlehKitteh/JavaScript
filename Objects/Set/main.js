var newSet = new Set([1, 2, 3, 5])

var newSet1 = new Set()

newSet1.add(1) // add 1 to Set
newSet1.add(2) // add 2 to Set

newSet1.clear() // clears Set

newSet.delete(3) // deletes 3 from Set

// const iterator = newSet[Symbol.iterator]()
// console.log(iterator.next())

console.log(newSet) // Set(3) {1, 2, 5}

const iterator = newSet.entries()
console.log(iterator.next()) // {value: [1, 1], done: false }
console.log(iterator.next()) // {value: [2, 2], done: false }
console.log(iterator.next()) // {value: [5, 5], done: false }

if (newSet.has(5)) console.log('Set has value: 5')

console.log(newSet.size) //3 <----> [1, 2, 5]

for (const value of newSet) {
    console.log(value) // 1, 2, 5
}

const arr = Array.from(newSet)
console.log(arr) // [1, 2, 5]

new Set(["g", "h", { x: 6, y: 7 }, 68]).forEach((value, key, set) => console.log(value === key, set)) // true Set(4) { 'g', 'h', { x: 6, y: 7 }, 68 }
console.log(newSet.has(2)) // true
console.log(newSet.keys(), newSet.values())