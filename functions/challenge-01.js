function firstSum(n1) {
    return function(n2) {
        return function (n3) {
            return n1 + n2 + n3
        }
    }
}

const secondSum = firstSum(5)
const thirdSum = secondSum(10)
const result = thirdSum(15)
console.log(result) // Result: 30

console.log(firstSum(6)(12)(18)) // Result: 36