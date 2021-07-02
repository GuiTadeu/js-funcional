function pow(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const powOfTwo = pow(2) // base
console.log(powOfTwo(8)) // exp - Result: 256