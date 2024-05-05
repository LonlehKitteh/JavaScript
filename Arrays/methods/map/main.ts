// map

// What is map() ?

const nums = [1, 2, 3, 4];

// num is every element inside array
// index is index of this element
// array is current array nums in this case
const multiplyThree = nums.map((num, index, arr) => {
  return arr.map((num) => num * 3);
});

console.log(multiplyThree);

// Polyfill for map()

interface Array<T> {
  myMap<U>(callback: (value: T, index: number, array: T[]) => U): U[];
}

Array.prototype.myMap = function <T, U>(
  callback: (value: T, index: number, array: T[]) => U
): U[] {
  let temp: U[] = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }

  return temp;
};

const multiplyThree2 = nums.myMap((num, index, arr) => {
  return arr.myMap((num) => num * 3);
});

console.log(multiplyThree2);
