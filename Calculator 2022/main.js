const buttons = document.querySelectorAll('button')
const screenValue = document.querySelector('.value')
const history = document.querySelector(".history")

const buttonHandle = () => {
    buttons.forEach((button, key) => {
        button.addEventListener('click', e => screenValue.innerHTML = callback(e, key))
    })
}

const callback = (e, key) => {
    let value = screenValue.innerHTML

    // main part
    if (key === 0) return
    if (key === 1) {
        let test = value.split(' ')
        test[test.length - 1] = 0
        value = test
        return value.join(' ')
    }
    if (key === 2) return 0
    if (key === 3) return value.length !== 1 ? value.substring(0, value.length - 1) : 0
    if (key === 4) return 1 / value
    if (key === 5) return Math.sqrt(value)
    if (key === 6) return Math.pow(value, 2)
    if (key === 7) return history.innerHTML = value + ' / '
    if (key === 11) return history.innerHTML = value + ' * '
    if (key === 15) return history.innerHTML = value + ' - '
    if (key === 19) return history.innerHTML = value + ' + '
    if (key === 20) return history.innerHTML = value * -1
    if (key === 23) return eval(value)
    if ([8, 9, 10, 12, 13, 14, 16, 17, 18].includes(key)) return value + e.target.innerHTML
    // jebac to
}

buttonHandle()