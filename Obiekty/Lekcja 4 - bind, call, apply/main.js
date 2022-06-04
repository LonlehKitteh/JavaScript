const human = {
    showName() {
        console.log(this.name) // undefined
    },
    showFullName(options){
        console.log(`My full name is: ${this.name} ${this.surname ? this.surname : options.surname} ${options.age ?? ''}`)
    },
    showThis: function(){
        console.log(this)
    }
}

const personA = {
    name: 'Tom'
}

const people = [
    {
        name: 'Magda',
        surname: 'Wroniecka'
    },
    {
        name: 'Szymon'
    },
    {
        name: 'Michał'
    }
]

human.showName()
human.showName.call(personA) // Tom

people.forEach(person => human.showName.call(person)) // Magda Szymon Michał
people.forEach(person => human.showFullName.apply(person, [{surname: 'Kowalski'}])) // apply extra parameters 
people.forEach(person => {
    human.showFullName.bind(person, {surname:'Nowak'})() // autocall bind but its better to use call in this situation
    // ------- instead -----------
    // const newHuman = human.showFullName.bind(person, 'Nowak');
    // newHuman();
})
human.showThis.call() // Window