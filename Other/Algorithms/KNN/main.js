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

    let testIndexes = temp.filter(obj => !obj.className)
    let onlyClasses = temp.filter(obj => obj.className)

    let result = []
    testIndexes.forEach(obj => {
        let arr = [...onlyClasses]

        arr.sort((a, b) => Math.abs(a.hypot - obj.hypot) - Math.abs(b.hypot - obj.hypot))
        result.push(arr.slice(0, k))
    })

    result.forEach(e => console.table(e))
    console.table(temp)
}

KNN(4)