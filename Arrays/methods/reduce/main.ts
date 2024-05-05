// reduce

// What is reduce() ?

const nums = [1, 2, 3, 4];

// accumulator is a result of previous computation
// current is the current value
// index is index bruh
// array is current array is in our case nums
const sum = nums.reduce((acc, current, index, array) => {
  return acc + current;
}, 0);

console.log(sum);

// Polyfill for reduce()

// arr.reduce((acc,curr,i,arr)=>{}, initialValue)

interface Array<T> {
  myReduce<U>(
    callback: (acc: U, current: T, index: number, array: T[]) => U,
    initialValue: U
  ): U;
}

Array.prototype.myReduce = function <T, U>(
  callback: (acc: U, current: T, index: number, array: T[]) => U,
  initialValue: U
): U {
  let accumulator: U = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }

  return accumulator;
};

const sum2 = nums.myReduce((acc, current, index, array) => {
  return acc + current;
}, 0);

console.log(sum2);
