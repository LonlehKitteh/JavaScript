// for..in 
//    - leci po polach
//    - tylko po enumerowalnych
//    - sprawdza również pola prototypu

// for..of
//    - leci po wartościach
//    - tylko po iterowalnych

const person = {
    name: 'Magda',
    surname: 'Wroniecka',
    age: 19,
    adress: {
        street: 'Paziowa',
        number: 3,
        city: 'Będzin'
    },
    inRelation: true
}

const descriptor = Object.getOwnPropertyDescriptor(person, 'name')
console.log(descriptor) // {value: 'Magda', enumerable: true, ...}

Object.defineProperty(person, 'pet', { value: 'Nikuś', enumerable: false })
Object.prototype.testValue = 'some value'

const siblings = ['Michał', 'Martyna']

for (const key in person) {
    if (person.hasOwnProperty(key)) { // without this testValue should be consoled
        console.log(key) // name, surname, age... but without Nikuś
    }
}
console.log(Object.keys(person)) // name, surname, age... but without Nikuś

for(const value of siblings[0]){
    console.log(value) // M i c h a ł
}

// object is not iterable
console.log(person[Symbol.iterator]) // undefined