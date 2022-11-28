function KNN(k) {
    function createPoint() {
        const temp = ['A', 'B', 'C']

        return ({ x: Math.floor(Math.random() * 10) - 5, y: Math.floor(Math.random() * 10) - 5, class: `Class ${temp[Math.floor(Math.random() * 3)]}` })
    }

    function setPoints(n) {
        let array = []
        Math.floor(Math.random() * 10)
        for (let i = 0; i < n; i++) {
            array.push(createPoint())
        }

        return array
    }

    const trainedData = setPoints(100)
    const testData = setPoints(10).map(property => ({ x: property.x, y: property.y }))
    let temp = [...testData, ...trainedData].sort((a, b) => a.x - b.x)

    console.log(temp)
}

KNN(4)