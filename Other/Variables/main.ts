// var vs let vs const
// Scope

// function name() {} // function scope
// {} // block scope

// let a; // declaration
// let a = 5; // initialization
// a = 5; //assigment

// var is functional scope
// let is block scope
// const is block scope

{
  var a = 5;
  let b = 6;
}

console.log(a); // b is not defined

// variable shadowing

function shadow() {
  // legal shadowing
  var a = "Hello";
  let b = "Bye";

  if (true) {
    let a = "Hi";
    // var b = "Goodbye"; // illegal shadowing because var is functional scope was already declared
    console.log(a);
    console.log(b);
  }

  console.log(a);
}

shadow();

// Declaration

function declaration() {
  var a: number;
  var a: number;
  // fine

  // let b: number;
  // let b: number;
  // error b already has been declared

  // const c;
  // const c;
  // error const must be initialized
}

// declaration without initialization

function declaration2() {
  var a; // OK
  let b; // OK
  // const c; // ERROR
}

// Re-initialization

function initialization() {
  var a = 5;
  a = 6;
  // OK

  let b = 5;
  b = 6;
  // OK

  const c = 5;
  // c = 6; //ERROR cannot update const value
}

// Hoisting

// Temporal Dead Zone
// Is time between declaration and initialization of let var and const variables
// All variables are hoisted but let and const goes to Temporal Dead Zone

function host() {
  console.log(a, b, c);

  var a = 5;
  let b = 10;
  const c = 30;
}
