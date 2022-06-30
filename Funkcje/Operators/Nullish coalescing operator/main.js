const value1 = false && true // false
const value2 = true || false // true
// But...
console.log(Boolean(NaN)) // false
// falsy elements
// - null
// - undefined
// - "" , ''
// - NaN
// - 0
console.log(42 || '0') // 42 prom ---> get 42 and if its falsy then go further but 42 its truly
// && - this AND that then if this is truly AND that is truly return that
// || - this OR that then if this is truly return this
// ?? - this OR that then if this is null or undefined then go further
console.log(40 && 45)
console.log(null ?? undefined) // undefined because that was the last tested value
// ----------------- TEST --------------------
console.log(42 ?? undefined) // 42
console.log('0' || []) // '0'
console.log('String' && 7) // 7
console.log((null ?? 5) && 45) // 45
console.log('' && 'String') // ''
console.log((null || {}) && 5) // 5
console.log('String' && 4) // 4
console.log((4 ?? null) && (7 || '') && (null ?? 2)) // 4 && 7 && 2 --> 2