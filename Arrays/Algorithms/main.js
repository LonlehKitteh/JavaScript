// repeat params in exact order, and return array of params with set length in special param declared in function 

function repetation(...params) {
    let restOfResult;
    let arrLength = params.find(e => typeof e === 'object' && e.ARRAY_LENGTH)

    if (!arrLength) {
        console.error("Invalid data!");
        return;
    }

    const result = [];


    params = params.filter((_, i) => i !== params.indexOf(arrLength))

    if (arrLength.ARRAY_LENGTH % params.length !== 0)
        restOfResult = params.slice(0, arrLength.ARRAY_LENGTH % params.length)

    arrLength = Math.floor(arrLength.ARRAY_LENGTH / params.length)

    while (arrLength > 0) {
        result.push(...params)
        arrLength--;
    }

    return [...result, ...restOfResult];
}

console.log(repetation('string', 1, true, { ARRAY_LENGTH: 19 }, [2, 3, 1, 2, 3], { name: 'Chris' }))