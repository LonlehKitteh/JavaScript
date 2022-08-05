const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.fillStyle = 'crimson'

class Ball {
    constructor(effect) {
        this.effect = effect
        this.radius = Math.random() * 160 + 40
        this.coordinats = {
            x: this.radius * 2 + (Math.random() * (this.effect.width - this.radius * 4)),
            y: -this.radius
        }
        this.speed = {
            x: Math.random() - 0.2 - 0.1,
            y: Math.random() * 1.5 + 0.5
        }
        this.angle = 0
        this.va = Math.random() * 0.1 - 0.05 // velocity of angle
        this.vy = 0
        this.range = Math.random() * 30
        this.gravity = Math.random() * 0.005
    }
    update() {
        if (this.coordinats.x < this.radius || this.coordinats.x > this.effect.width - this.radius) this.speed.x *= -1
        if (this.coordinats.y > this.effect.height + this.radius) {
            this.coordinats.y = -this.radius
            this.vy = 0
            this.speed.y = Math.random() * 1.5 + 0.5
            this.coordinats.x = this.radius * 2 + (Math.random() * (this.effect.width - this.radius * 4))
        }
        if (this.coordinats.y > this.radius * 2) {
            this.vy += this.gravity
            this.speed.y += this.vy
        }
        this.coordinats.x += this.speed.x
        this.coordinats.y += this.speed.y
    }

    draw(context) {
        context.beginPath() // begin new path (new circle)
        context.arc(this.coordinats.x, this.coordinats.y, this.radius, 0, Math.PI * 2) // create circle
        context.fill() // fill circle
    }
    reset() {
        this.coordinats.x = this.effect.width * 0.5
        this.coordinats.y = this.effect.height * 0.5
    }
}

class MetaballsEffect {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.metaballsArray = []
    }
    init(numberOfBalls) {
        for (let i = 0; i < numberOfBalls; i++) {
            this.metaballsArray.push(new Ball(this))

        }
    }
    update() {
        this.metaballsArray.forEach(metaball => metaball.update())
    }
    draw(context) {
        this.metaballsArray.forEach(metaball => metaball.draw(context))
    }
    reset(newWidth, newHeight) {
        this.width = newWidth
        this.height = newHeight
        this.metaballsArray.forEach(metaball => metaball.reset())
    }
}

const effect = new MetaballsEffect(canvas.width, canvas.height)
effect.init(20)

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    effect.update()
    effect.draw(ctx)
    requestAnimationFrame(animate)
}
animate()

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.fillStyle = "white"
    effect.reset(canvas.width, canvas.height)
})