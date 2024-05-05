// reduce
// What is reduce() ?
var nums = [1, 2, 3, 4];
// accumulator is a result of previous computation
// current is the current value
// index is index bruh
// array is current array is in our case nums
var sum = nums.reduce(function (acc, current, index, array) {
    return acc + current;
}, 0);
console.log(sum);
Array.prototype.myReduce = function (callback, initialValue) {
    var accumulator = initialValue;
    for (var i = 0; i < this.length; i++) {
        accumulator = accumulator
            ? callback(accumulator, this[i], i, this)
            : this[i];
    }
    return accumulator;
};
var sum2 = nums.myReduce(function (acc, current, index, array) {
    return acc + current;
}, 0);
console.log(sum2);
