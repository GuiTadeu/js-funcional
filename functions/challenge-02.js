function calc(n1) {
    return function(n2) {
        return function(fn) {
            if(typeof fn === 'function') {
                return fn(n1, n2)
            }
        }
    }
} 

function sum(n1, n2) {
    return n1 + n2
}

function sub(n1, n2) {
    return n1 - n2
}

function mult(n1, n2) {
    return n1 * n2
}

function div(n1, n2) {
    return n1 / n2
}

console.log(calc(5)(5)(sum)) // Result: 10
console.log(calc(5)(5)(sub)) // Result: 0
console.log(calc(5)(5)(mult)) // Result: 25
console.log(calc(5)(5)(div)) // Result: 1
