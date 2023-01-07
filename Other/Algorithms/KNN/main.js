function setPoints(n) {
    const classes = ['A', 'B', 'C']
    let array = []
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
    const testData = setPoints(10).map(obj => ({ ...obj, className: "" })).sort((a, b) => a.hypot - b.hypot)
    let temp = [...testData, ...trainedData].sort((a, b) => a.hypot - b.hypot)

    console.table(testData)

    let result = []
    testData.forEach(obj => {
        trainedData.sort((a, b) => Math.abs(a.hypot - obj.hypot) - Math.abs(b.hypot - obj.hypot))
        result.push(trainedData.slice(0, k))
    })
    result.forEach(e => console.table(e))

    result.forEach((arr, i) => {
        arr = arr.map(obj => obj.className)

        const hashmap = arr.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1
            return acc
        }, {})
        testData[i].className = Object.entries(hashmap).sort((a, b) => b[1] - a[1])[0][0]
    })

    console.table(temp)
}

KNN(5)