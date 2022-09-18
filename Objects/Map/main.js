const map = new Map([
    [1, "first value"],
    [2, "second value"]
])

console.log(map) // Map(2) { 1 => 'first value', 2 => 'second value' }

// How to set value in Map

map.set(3, "third value")

// How to get new value

console.log(map.get(3))

// How to delete new value

map.delete(3)

console.log(map) // Map(2) { 1 => 'first value', 2 => 'second value' }

// How to get all keys from Map

console.log(map.keys()) // [Map Iterator] { 1, 2 }

// How to get rid of the Map Iterator

console.log(Array.from(map.keys()))

// How to check if something is in the Map

console.log(map.has(2)) // true

// How to get all values from Map

console.log(map.values()) // [Map Iterator] { 'first value', 'second value' }

// How to get all entries (keys and values)

console.log(map.entries()) // [Map Entries] { [ 1, 'first value' ], [ 2, 'second value' ] }

// How to get length of Map

console.log(map.size) // 2

// Iteration for

for (const [key, value] of map) {
    console.log({ key, value })
}

// Iteration forEach

map.forEach((value, key) => {
    console.log({ key, value })
})

// Swap Keys & Values 

const swapMap = Array.from(map).reduce((acc, [key, value]) => acc.set(value, key), new Map())

console.log(swapMap)