const getUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1. get user data")
            resolve()
        }, 800)
    })
}
const validateData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("2. validate data")
            // resolve()
            reject('Validation error')
        }, 900)
    })
}
const registerUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3. register user")
            resolve()
        }, 400)
    })
}
const sendEmail = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("4. send Email")
            resolve()
        }, 200)
    })
}

// getUserData(() => {
//     validateData(() => {
//         registerUser(() => {
//             sendEmail()
//         })
//     })
// }) // callback hell 
// It works but why
// ------------ INSTEAD ----------------
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Working...")
        resolve(2)
    }, 800)
})
    .then(response => response * 2)
    .then(response => console.log(response)) // 4
// -------------------------------------
getUserData()
    .then(validateData)
    .then(registerUser)
    .then(sendEmail)
    .catch(err => {
        console.log('Error: ', err)
    })