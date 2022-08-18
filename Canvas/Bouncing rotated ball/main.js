const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var particleAray = []

class Particle {
    constructor({ x, y }) {
        this.coordinates = {
            x: x,
            y: y
        }
        this.size = Math.random() * 20 + 50
        this.speed = {
            x: (Math.random() - 0.5) * 10,
            y: (Math.random() - 0.5) * 10
        }
        this.theta = 0
        this.thetaInc = 0.08
    }
    draw() {
        this.coordinates.x += this.speed.x
        this.coordinates.y += this.speed.y
        this.theta += this.thetaInc

        ctx.beginPath()
        ctx.lineWidth = 2
        ctx.arc(this.coordinates.x, this.coordinates.y, this.size, 0, Math.PI * 2, false)
        ctx.moveTo(this.coordinates.x - this.size * Math.cos(this.theta), this.coordinates.y - this.size * Math.sin(this.theta))
        ctx.lineTo(this.coordinates.x + this.size * Math.cos(this.theta), this.coordinates.y + this.size * Math.sin(this.theta))
        ctx.stroke()

        if (this.coordinates.y > canvas.height - this.size || this.coordinates.y - this.size < 0) this.speed.y *= -1
        if (this.coordinates.x > canvas.width - this.size || this.coordinates.x < this.size) this.speed.x *= -1
    }
}

function init(n) {
    for (let i = 0; i < n; i++) {
        let coordinates = {
            x: canvas.width / 2,
            y: canvas.height / 2
        }

        particleAray.push(new Particle(coordinates))
    }
}
init(1)

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particleAray.forEach(particle => {
        particle.draw()
    })

    requestAnimationFrame(animate)
}
animate()
