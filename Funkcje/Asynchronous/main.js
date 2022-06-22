const getUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1. get user data')
            resolve({ name: 'Jon' })
        }, 600)
    })
}

const registerUser = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('2. register user')
            resolve({ name: user.name, id: 42 })
        }, 400)
    })
}

const sendEmail = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Name: ${user.name}, id: ${user.id}`)
            resolve()
        }, 500)
    })
}
// getUserData()
// .then(registerUser)
// .then(sendEmail)
// .then(() => console.log("end!"))

async function someAsyncFunction() {
    const userData = await getUserData()
    const registeredUser = await registerUser(userData)
    await sendEmail(registeredUser)
    console.log('end!')
}

someAsyncFunction()