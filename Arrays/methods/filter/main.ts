// What is filter() ?

const nums = [1, 2, 3, 4];

const moreThenTwo = nums.filter((num, index, arr) => {
  return num > 1;
});

console.log(moreThenTwo);

// polyfill filter()

// [].filter(num, i ,array)

interface Array<T> {
  myFilter<U>(callback: (value: T, index: number, array: T[]) => U): U[];
}

Array.prototype.myFilter = function <T, U>(
  callback: (value: T, index: number, array: T[]) => U
): U[] {
  let temp: U[] = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};

const moreThenTwo2 = nums.myFilter((num) => {
  return num > 1;
});

console.log(moreThenTwo2);
