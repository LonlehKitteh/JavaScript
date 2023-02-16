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
