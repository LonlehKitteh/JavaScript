const variants = ['&diams;', '&hearts;', '&clubs;', '&spades;']

const createCard = (icon = '') => {
    const cardsContainer = document.querySelector('.cards-container')
    const values = ['K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2]


    // Holy shit
    for (const key in values) {
        const card = cardsContainer.children[0].cloneNode(true)
        card.classList = `card card${+key + 2}`
        const frontFlip = card.firstChild.nextSibling.firstChild.nextSibling

        frontFlip.children[0].innerHTML = `${values[key]} <i class='fa-solid fa-${icon}'></i>`
        if (key >= 3) repeat([...frontFlip.children[1].children], values[key], icon)
        if (key < 3) frontFlip.children[1].innerHTML = values[key]
        frontFlip.children[2].innerHTML = `${values[key]} <i class='fa-solid fa-${icon}'></i>`

        cardsContainer.appendChild(card)
    }
}

function repeat(elements, card = 0, icon = '') {
    let i = `<i>${icon}</i>`
    let oi = `<i style='transform: rotate(0.5turn)'>${icon}</i>`
    elements[4].innerHTML = ''
    if (card === 2) elements.map((element, index) => element.innerHTML = index > 8 ? element.remove() : index === 1 ? i : index === 7 ? oi : "")
    if (card === 3) elements.map((element, index) => element.innerHTML = index > 8 ? element.remove() : index === 1 || index === 4 ? i : index === 7 ? oi : "")
    if (card === 4) elements.map((element, index) => element.innerHTML = index > 8 ? element.remove() : index === 0 || index === 2 ? i : index === 8 || index === 6 ? oi : "")
    if (card === 5) elements.map((element, index) => element.innerHTML = index > 8 ? element.remove() : [0, 2, 4].includes(index) ? i : index === 8 || index === 6 ? oi : "")
    if (card === 6) elements.map((element, index) => element.innerHTML = index > 8 ? element.remove() : [0, 2, 3, 5].includes(index) ? i : index === 8 || index === 6 ? oi : "")
    if (card === 7) elements.map((element, index) => element.innerHTML = index > 8 ? element.remove() : [0, 2, 3, 5].includes(index) ? i : [6, 7, 8].includes(index) ? oi : "")
    if (card === 8) elements.map((element, index) => element.innerHTML = index > 8 ? element.remove() : index !== 4 ? index > 5 ? oi : i : '')
    if (card === 9) elements.map((element, index) => element.innerHTML = ![1, 9].includes(index) ? index > 5 ? oi : i : '')
    if (card === 10) elements.map((element, index) => element.innerHTML = index < 6 && index !== 4 ? i : index === 4 ? "" : oi)
}
const randomVariant = variants[Math.floor(Math.random() * 3)]

createCard(randomVariant)

if (['&clubs;', '&spades;'].includes(randomVariant)) document.querySelectorAll('.front-flip').forEach(element => element.style.setProperty('--color', 'black'))
document.querySelectorAll('i').forEach(i => i.innerHTML = randomVariant)