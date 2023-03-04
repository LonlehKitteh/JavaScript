var character = "Kris";
// character = 20; wrong type
var circle = function (diam) {
    return diam * Math.PI;
};
console.log(circle(20));
// arrays and objects
var arr_01 = ["Chris", "Madeleine"];
// cant add arr_01.push(3) bcs of type
var arr01 = ["Chris", 21, "Madeleine", 20];
arr01.push(32); // can add because of type declared at the beggining
arr01[0] = 13;
var obj = {
    name: "Chris",
    age: 21,
    speed: 1
};
obj.name = "Madeleine";
//cant change type obj.age = true;
// cant add property to obj like this obj.skills = 'none'
// Explicit Types
var char;
var num;
var bool;
var arr = [];
var arr_num;
// union type
var union = [];
union.push(21, "Chris");
console.log(union);
var uid;
// objects
var object;
object = {
    name: "Chris",
    age: 21
};
var object2;
object2 = {
    name: "Madeleine",
    age: 20
};
console.log(object2);
// any type
var thing = 25;
thing = "Chris";
console.log(thing);
var mixed = [];
mixed = [21, "Chris", true];
var anyObj = { name: 21, age: "Chris" };
console.log(anyObj);
// functions
var greet = function () {
    console.log("Hello World!");
};
// error cannot change type like this greet = 'hello';
var greet1;
greet1 = function () {
    console.log("Hello, again!");
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b + c); // c?: number optional parameter
};
add(2, 3);
var minus = function (a, b) {
    return String(a - b);
};
var subtraction = minus(5, 2);
var logDetails = function (user) {
    console.log("".concat(user.name, " logged in!"));
};
// function signatures
var ex1;
ex1 = function (name, city) {
    console.log("".concat(name, " lives in ").concat(city, "!"));
};
var ex2;
ex2 = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
var ex3;
ex3 = function (obj) {
    console.log("".concat(obj.name, " is ").concat(obj.age, " years old"));
};
