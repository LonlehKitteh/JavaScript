// generate an array with opposite values with given n length

const opposite = (n = 1, firstValue, secondValue) => Array(n).fill([firstValue, secondValue]).flat(1).filter((_,i) => i < n)

console.log(opposite(27, 'banan', 'kiwi'))