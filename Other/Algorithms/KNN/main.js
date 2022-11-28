function setPoints(n) {
    const classes = ['A', 'B', 'C']
    let array = []
    Math.floor(Math.random() * 10)
    for (let i = 0; i < n; i++) {
        let temp = {
            x: +(Math.random() * 10 - 5).toFixed(2),
            y: +(Math.random() * 10 - 5).toFixed(2),
            className: `Class ${classes[Math.floor(Math.random() * 3)]}`
        }

        array.push({ ...temp, hypot: +Math.hypot(Math.abs(temp.x), Math.abs(temp.y)).toFixed(4) })
    }

    return array
}

function KNN(k) {
    const trainedData = setPoints(100)
    const testData = setPoints(10).map(obj => ({ ...obj, className: "" }))
    let temp = [...testData, ...trainedData].sort((a, b) => a.hypot - b.hypot).map((e, i) => ({ ...e, index: i }))

    temp.forEach((obj, i) => {
        if (!obj.className) {
            let n = k / 2
            while (n >= -k / 2) {
                // if (!temp[i + n].className) continue
                console.log(temp[i + n])

                n--;
            }
        }
    })

    // indexes.map(obj => {
    // console.log(obj)
    // console.log(temp.slice(obj.index - (k / 2), obj.index + (k / 2) + 1), obj.index)

    // if (obj.index === temp.length - 1) return ({ resolved: temp.slice(-k + i) })
    // if (obj.index === 0) return ({ resolved: temp.slice(i, k) })

    // console.log(temp.slice(k - 2 + obj.index, k + 2 + obj.index))

    // return ({ ...obj, resolved: resolved })
    // })
    // console.log(indexes)

}

KNN(4)