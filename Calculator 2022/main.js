const buttons = document.querySelectorAll('button')
const screenValue = document.querySelector('.value')
const history = document.querySelector(".history")
var fanish = false

const buttonHandle = () => {
    buttons.forEach((button, key) => {
        button.addEventListener('click', e => screenValue.value = callback(e, key))
    })
}

const callback = (e, key) => {
    let value = screenValue.value
    if (fanish) {
        fanish = false
        return e.target.innerHTML
    }

    // main part
    if (key === 0) return factorialize(value)
    if (key === 1) return [...value.split(' ').slice(0, -1), 0].join(' ')
    if (key === 2) return 0
    if (key === 3) return value.length !== 1 ? value.substring(0, value.length - 1) : 0 // repair
    if (key === 4) return +value === 0 ? 0 : 1 / value
    if (key === 5) {
        return history.innerHTML += Math.sqrt(value.split(' ')[value.split(' ').length - 1]).toFixed(8)
    }
    if (key === 6) return Math.pow(value, 2)
    if ([7, 11, 15, 19].includes(key)) {
        console.log(e.target.value)
        history.innerHTML = value + ` ${e.target.value} `
        fanish = true
        return value
    }
    if (key === 20) return value * -1
    if (key === 22) return Number(value + '.' + 1) || value.split(' ')[value.split(' ').length - 1].length === 1 ? value + '.' : value
    if (key === 23) return eval(history.innerHTML + value)
    if ([8, 9, 10, 12, 13, 14, 16, 17, 18, 21].includes(key))
        return (value + e.target.innerHTML).split(' ').map(e => +e === Number(e) ? +e : e).join(' ')

}

buttonHandle()

const factorialize = num => {
    let result = num
    if (num === 0 || num === 1) return 1
    while (num > 1) {
        num--
        result *= num
    }
    return result.toString().length >= 14 || result === 'Infinity' ? 'Infinity' : result
}