const obj1 = {
    name: 'Magda',
    showName: function showName() {
        console.log(this)
    },
    address: {
        city: 'Będzin',
        street: 'Paziowa',
        number: 3,
        getAddress: () => console.log(this),
        problems: this,
        getCity() {
            console.log(this)
         }
    },
    hobbies: {
        makingMeUpset: true,
        skating: true,
        playingGames: false,
        showHobbies1(){
            const logHobbies = () => console.log(this);
            logHobbies();
        },
        showHobbies2: function(){
            (function logHobbies(){
                console.log(this)
            }())
        }
    }
}
obj1.showName();
obj1.address.getAddress();
console.log(obj1.address.problems);
obj1.address.getCity();
obj1.hobbies.showHobbies1();
obj1.hobbies.showHobbies2();

const pet = {
    name: 'Nikuś',
    showName: obj1.showName
}
pet.showName()

const Dog = function(){
    this.name = 'Spadzigapacz'
}
Dog.prototype.showDog = function(){
    console.log(this)
}
const dog = new Dog();
dog.showDog();

String.prototype.lol = function(){
    console.log(this)
}

'test'.lol()
