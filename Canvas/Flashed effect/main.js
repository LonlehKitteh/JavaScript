const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.height = window.innerHeight
canvas.width = window.innerWidth
ctx.fillStyle = "pink"

class Circle {
    constructor(effect) {
        this.effect = effect
        this.radius = Math.random() * 80 + 50
        this.coordinats = {
            x: Math.random() * (this.effect.width - this.radius * 2) + this.radius,
            y: Math.random() * (this.effect.height - this.radius * 2) + this.radius
        }
        this.speed = Math.random() * 1
    }

    draw(context) {
        context.beginPath()
        context.arc(this.coordinats.x, this.coordinats.y, this.radius, 0, Math.PI * 2)
        context.fill()
    }

    update() {
        if (this.radius - this.speed < 0) this.radius = Math.random() * 80 + 50
        this.radius -= this.speed
    }
    reset() {
        this.coordinats.x = this.effect.width / 2
        this.coordinats.y = this.effect.height / 2
    }
}

class MetaballsEffect {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.metaballsArray = []
    }
    init(n) {
        for (let i = 0; i < n; i++) {
            this.metaballsArray.push(new Circle(this))
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
effect.init(50)

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    effect.update()
    effect.draw(ctx)
    requestAnimationFrame(animate)
}
animate()

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.fillStyle = "white"
    effect.reset(canvas.width, canvas.height)
})