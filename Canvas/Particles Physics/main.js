const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// to cover entire window with canvas
canvas.height = window.innerHeight
canvas.width = window.innerWidth

let particleArray = []
let adjust = {
    x: 15,
    y: 40
}

// handle mouse
const mouse = {
    coordinats: {
        x: null,
        y: null
    },
    radius: 150
}

window.addEventListener("mousemove", event => {
    mouse.coordinats = {
        x: event.x,
        y: event.y
    }
})

ctx.fillStyle = 'white'
ctx.font = '40px Verdana'
ctx.fillText('I love JS.', 0, 40)
const textCoordinates = ctx.getImageData(0, 0, 200, 100)

class Particle {
    constructor({ x, y }) {
        this.coordinats = {
            x: x,
            y: y
        }
        this.size = 3
        this.base = {
            x: this.coordinats.x,
            y: this.coordinats.y
        }
        this.density = (Math.random() * 30) + 1
    }
    draw() {
        ctx.fillStyle = "teal"
        ctx.beginPath()
        ctx.arc(this.coordinats.x, this.coordinats.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
    }
    update() {
        const calculate = cord => mouse.coordinats[cord] - this.coordinats[cord]
        let dx = calculate("x")
        let dy = calculate("y")
        let distance = Math.hypot(dx, dy)
        let maxDistance = mouse.radius
        let force = (maxDistance - distance) / maxDistance
        let forceDirection = {
            x: dx / distance,
            y: dy / distance
        }
        let direction = {
            x: forceDirection.x * force * this.density,
            y: forceDirection.y * force * this.density
        }
        if (distance < mouse.radius) {
            this.coordinats.x -= direction.x
            this.coordinats.y -= direction.y
        } else {
            if (this.coordinats.x !== this.base.x) {
                let dx = this.coordinats.x - this.base.x
                this.coordinats.x -= dx / 10
            }
            if (this.coordinats.y !== this.base.y) {
                let dy = this.coordinats.y - this.base.y
                this.coordinats.y -= dy / 10
            }
        }
    }
}

function init() {
    particleArray = []
    for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
            if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                let spreed = 8
                let position = {
                    x: (x + adjust.x) * spreed,
                    y: (y + adjust.y) * spreed
                }
                particleArray.push(new Particle(position))
            }
        }
    }
}
init()

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particleArray.forEach(particle => {
        particle.draw()
        particle.update()
    })
    connect()
    requestAnimationFrame(animate) // recursion - rekurencja 
}
animate()

function connect() {
    for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
            let dx = particleArray[a].coordinats.x - particleArray[b].coordinats.x
            let dy = particleArray[a].coordinats.y - particleArray[b].coordinats.y
            let distance = Math.hypot(dx, dy)

            if (distance < 20) {
                ctx.strokeStyle = 'white'
                ctx.lineWidth = 2
                ctx.beginPath()
                ctx.moveTo(particleArray[a].coordinats.x, particleArray[a].coordinats.y)
                ctx.lineTo(particleArray[b].coordinats.x, particleArray[b].coordinats.y)
                ctx.stroke()
            }
        }
    }
}