// script to run on website 
// inserts random word in multiple places on website

const getWord = (word) => {
    const elements = [...document.querySelectorAll("body *")].filter(e => e.innerText && !e.childElementCount)

    for (let i = 0; i < Math.floor(Math.random() * elements.length) + 20; i++) {
        const randomIndex = Math.floor(Math.random() * elements.length)
        const arr = elements[randomIndex].innerText.split(" ")
        arr.splice(Math.floor(Math.random() * arr.length), 0, word)
        elements[randomIndex].innerText = arr.join(" ")
    }
}
getWord("hate")