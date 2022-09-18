const person = {
    name: "Chris"
}

const personProxy = new Proxy(person, {
    get: (obj, property) => {
        return property in obj ? obj[property] : "No value!"
    },
    set: (obj, property, value) => {
        if (property === "age" && value < 20) {
            console.log("You are too young for JS!")
        }


        obj[property] = value
    },
    has: (obj, property) => {
        if (property === "age") return false

        return property in obj
    }
})
console.log(personProxy.age) // No value!
console.log(personProxy.name) // Chris

personProxy.age = 17

console.log(personProxy.age) // 17

console.log("age" in personProxy) // false