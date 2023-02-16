let character = "Kris";

// character = 20; wrong type

const circle = (diam: number) => {
  return diam * Math.PI;
};

console.log(circle(20));

// arrays and objects

let arr_01 = ["Chris", "Madeleine"];

// cant add arr_01.push(3) bcs of type

let arr01 = ["Chris", 21, "Madeleine", 20];

arr01.push(32); // can add because of type declared at the beggining
arr01[0] = 13;

const obj = {
  name: "Chris",
  age: 21,
  speed: 1,
};

obj.name = "Madeleine";
//cant change type obj.age = true;
// cant add property to obj like this obj.skills = 'none'

// Explicit Types

let char: string;
let num: number;
let bool: boolean;

let arr: string[] = [];
let arr_num: number[];

// union type
let union: (string | number)[] = [];
union.push(21, "Chris");
console.log(union);

let uid: string | number;

// objects

let object: object;

object = {
  name: "Chris",
  age: 21,
};

let object2: {
  name: string;
  age: number;
};

object2 = {
  name: "Madeleine",
  age: 20,
};

console.log(object2);
