const number1 = document.querySelector('.number1')
const number2 = document.querySelector('.number2')
const spinner = document.querySelector('.spinner')

const arithmetic = async (callback) => {
    if (number1.value == '' || number2.value == '' || !/\d/.test(number1.value) || !/\d/.test(number2.value)) return
    document.querySelector('.value').innerHTML = await callback()
}

const add = () => {
    return new Promise((resolve) => {
        spinner.classList.add('show')
        setTimeout(() => {
            spinner.classList.remove('show')
            resolve(Number(number1.value) + Number(number2.value))
        }, 3000)
    })
}
const odd = () => {
    return new Promise((resolve) => {
        spinner.classList.add('show')
        setTimeout(() => {
            spinner.classList.remove('show')
            resolve(Number(number1.value) - Number(number2.value))
        }, 3000)
    })
}
const multiply = () => {
    return new Promise((resolve) => {
        spinner.classList.add('show')
        setTimeout(() => {
            spinner.classList.remove('show')
            resolve(Number(number1.value) * Number(number2.value))
        }, 3000)
    })
}
const divide = () => {
    if (+number2.value === 0) return 'Cannot divide by 0!'
    return new Promise((resolve) => {
        spinner.classList.add('show')
        setTimeout(() => {
            spinner.classList.remove('show')
            resolve(Number(number1.value) / Number(number2.value))
        }, 3000)
    })
}

const operations = [add, odd, multiply, divide]

document.querySelectorAll('.btn').forEach((button, key) => {
    button.addEventListener('click', () => arithmetic(operations[key]))
})