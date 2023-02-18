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

// any type

let thing: any = 25;
thing = "Chris";

console.log(thing);

let mixed: any[] = [];

mixed = [21, "Chris", true];

let anyObj: { name: any; age: any } = { name: 21, age: "Chris" };

console.log(anyObj);

// functions

let greet = () => {
  console.log("Hello World!");
};

// error cannot change type like this greet = 'hello';

let greet1: Function;

greet1 = () => {
  console.log("Hello, again!");
};

const add = (a: number, b: number, c: number = 10) => {
  console.log(a + b + c); // c?: number optional parameter
};

add(2, 3);

const minus = (a: number, b: number): string => {
  return String(a - b);
};
let subtraction = minus(5, 2);

// type aliases

type StringOrNum = string | number;

const logDetails = (user: { name: string; uid: StringOrNum }) => {
  console.log(`${user.name} logged in!`);
};

// function signatures

let ex1: (a: string, b: string) => void;

ex1 = (name: string, city: string) => {
  console.log(`${name} lives in ${city}!`);
};

let ex2: (a: number, b: number, c: string) => number;

ex2 = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};
type person = { name: string; age: number };

let ex3: (obj: person) => void;

ex3 = (obj: person) => {
  console.log(`${obj.name} is ${obj.age} years old`);
};
