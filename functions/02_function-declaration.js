function goodMorning() {
    console.log("Good Morning!")
}

goodMorning()

function sum(a, b) {
    return a + b
}

let result = sum(3, 4)
console.log(result) // 7

result = sum(3, 5, 5, 6, 7, 8)
console.log(result) // 8 - Ignora os outros números

result = sum(3)
console.log(result) // NaN (not a number) - Tenta somar 3 com undefined

// Podemos corrigir o erro NaN acima definindo um valor default para B
function secondSum(a = 0, b = 0) {
    return a + b
}