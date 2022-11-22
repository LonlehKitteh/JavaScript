import { audio } from './sound.js'

const btn1 = document.getElementById("btn1")
const audioCtx = new AudioContext()
const audioCtx1 = new AudioContext()

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
    const oscillator = audioCtx1.createOscillator();
    oscillator.connect(audioCtx1.destination);
    oscillator.type = "triangle"
    oscillator.start()
    setTimeout(() => oscillator.stop(), 100)
})

const container = document.getElementById('container')
const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')
let audioSource, analyser

container.addEventListener('click', () => {
    audio.play()
    audioSource = audioCtx.createMediaElementSource(audio)
    analyser = audioCtx.createAnalyser()
    audioSource.connect(analyser)
    analyser.connect(audioCtx.destination)
    analyser.fftSize = 64 // higher number more canvas
    const bufferLength = analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    const barWidth = canvas.width / bufferLength
    let barHeight
    let x = 0

    function animate() {
        x = 0
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        analyser.getByteFrequencyData(dataArray)

        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i]
            ctx.fillStyle = "white"
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)
            x += barWidth
        }

        requestAnimationFrame(animate)
    }
    animate()
})