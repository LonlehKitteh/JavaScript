// What is filter() ?
var nums = [1, 2, 3, 4];
var moreThenTwo = nums.filter(function (num, index, arr) {
    return num > 1;
});
console.log(moreThenTwo);
Array.prototype.myFilter = function (callback) {
    var temp = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this))
            temp.push(this[i]);
    }
    return temp;
};
var moreThenTwo2 = nums.myFilter(function (num) {
    return num > 1;
});
console.log(moreThenTwo2);
