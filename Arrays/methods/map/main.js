// map
// What is map() ?
var nums = [1, 2, 3, 4];
// num is every element inside array
// index is index of this element
// array is current array nums in this case
var multiplyThree = nums.map(function (num, index, arr) {
    return arr.map(function (num) { return num * 3; });
});
console.log(multiplyThree);
Array.prototype.myMap = function (callback) {
    var temp = [];
    for (var i = 0; i < this.length; i++) {
        temp.push(callback(this[i], i, this));
    }
    return temp;
};
var multiplyThree2 = nums.myMap(function (num, index, arr) {
    return arr.myMap(function (num) { return num * 3; });
});
console.log(multiplyThree2);
