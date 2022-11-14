// Symbol is a new primitive type like Number() or String()
// Symbol is different every time unique value

const sym1 = Symbol() // to make things clear pass string inside Symbol('cat') 
const sym2 = Symbol() // symbol is NOT created based on string so it's only for debuging

console.log(sym1 === sym2) // false

let user = {
    id: 2831,
    name: "Chris",
    city: 'Mikolow',
    age: 20
};

const idSym = Symbol('id');
user[idSym] = 2893172387129;

// or 

const idSym2 = Symbol('id');
let user2 = {
    id: 2831,
    name: "Chris",
    city: 'Mikolow',
    age: 20,
    [idSym]: 2893172387129
};

console.log(Object.keys(user))

const sameSymbol1 = Symbol.for("cat")
const sameSymbol2 = Symbol.for("cat")

console.log(sameSymbol1 === sameSymbol2) // true

