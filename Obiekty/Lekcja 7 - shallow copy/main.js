// const cloneDeep = require('lodash.cloneDeep')

const Magda = {
    name: 'Magda',
    surname: 'Wroniecka',
    address: {
        country: 'Poland',
        city: 'Będzin',
        street: 'Paziowa',
        number: 3
    },
    showName() {
        console.log(this.name)
    }
}
// --------------------------------
// const Krzysztof = Magda
// # No. Just no. It isn't an option!
// --------------------------------
// const Krzysztof = {}
// Krzysztof.name = Magda.name
// Krzysztof.surname = Magda.surname
// itd ... lub 
// # Its also a big no! What the hell even is this!
// --------------------------------
// OR const Krzysztof = {...Magda} OR const Krzysztof = Object.assign({}, Magda) shallow copy

const Szymon = {
    ...Magda,
    name: 'Szymon',
    surname: 'Smolorz',
    address: { ...Magda.address }
} // deep copy
Szymon.address = { homeless: true }
console.log(Szymon, Magda)

const Emilka = JSON.parse(JSON.stringify(Magda)) // JSON can't contain functions or objects

console.log(Emilka) // copy without functions

// const Krzysztof = cloneDeep(Magda)