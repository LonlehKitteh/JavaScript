const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.fillStyle = "pink"
ctx.font = '40px Verdana'
ctx.fillText('A', 0, 40)
const textCoordinates = ctx.getImageData(0, 0, 200, 100)

let adjust = {
    x: 5,
    y: 5
}

class Particle {
    constructor(effect, { x, y }) {
        this.effect = effect
        this.coordinates = {
            x: x,
            y: y
        }
        this.radius = 10
    }
    draw(context) {
        context.beginPath()
        context.arc(this.coordinates.x, this.coordinates.y, this.radius, 0, Math.PI * 2)
        context.fill()
    }
}

class MetaballsEffect {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.metaballsArray = []
    }
    init() {
        for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
            for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
                if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                    let spreed = 8
                    let position = {
                        x: (x + adjust.x) * spreed,
                        y: (y + adjust.y) * spreed
                    }
                    this.metaballsArray.push(new Particle(this, position))
                }
            }
        }
    }
    update() {

    }
    draw(context) {
        this.metaballsArray.forEach(metaball => metaball.draw(context))
    }
}
const effect = new MetaballsEffect(canvas.width, canvas.height)
effect.init()
console.log(effect)

function animate() {
    effect.draw(ctx)
    requestAnimationFrame(animate)
}
animate()