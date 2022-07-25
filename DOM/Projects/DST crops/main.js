import { CROPS } from "./crops.js";

function handleClick(e) {
    let temp = []
    for (const key in CROPS) {
        if (Object.hasOwnProperty.call(CROPS, key)) {
            const element = CROPS[key];
            if (element.seasons.includes(e)) temp.push(element)
        }
    }
    getPossibleCombinations(temp)
}

document.querySelectorAll('.season-icon').forEach(season => {
    season.addEventListener('click', () => handleClick(season.id))
})

const getPossibleCombinations = (array) => {
    const combinations = []

    for (let i = 0; i < array.length - 2; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            for (let k = j + 1; k < array.length; k++) {
                const test = Object.values(array[i].fertilizer).every((n, index) => {
                    return n + Object.values(array[j].fertilizer)[index] + Object.values(array[k].fertilizer)[index] === 0
                })
                if (test) combinations.push([array[i], array[j], array[k]].map(e => e.url.match(/[A-Z]\w+/)[0]))
            }
        }
    }
    generateGrids(combinations)
}

function generateGrids(arr) {
    const main = document.querySelector('.main')
    if (main.children.length === 3) main.removeChild(document.querySelector('.content'))
    const content = document.createElement('div')
    content.className = 'content'

    arr.map(element => {
        const grid = document.createElement('div')
        grid.className = 'grid'

        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div')
            cell.className = 'cell'

            const img = document.createElement('img')
            img.src = `./assets/crops/${element[i % 3]}.webp`
            img.alt = element[i % 3]

            grid.appendChild(cell)
            cell.appendChild(img)
        }

        content.appendChild(grid)
    })

    main.appendChild(content)
}