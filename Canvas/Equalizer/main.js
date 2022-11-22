import { audio } from './sound.js'

const btn1 = document.getElementById("btn1")
const audioCtx = new AudioContext()

btn1.addEventListener("click", () => {
    audio.play()

    audio.addEventListener("playing", () => {
        console.log("hi")
    })

    audio.addEventListener("ended", () => {
        console.log("bye")
    })
})

const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    const oscillator = audioCtx.createOscillator();
    oscillator.connect(audioCtx.destination);
    oscillator.type = "triangle"
    oscillator.start()
    setTimeout(() => oscillator.stop(), 100)
})

// 19. 30