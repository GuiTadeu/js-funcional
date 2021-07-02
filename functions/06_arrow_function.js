const hello = () => console.log("Hello!")
hello()

const greeting = (name) => `Hello ${name}!`
console.log(greeting("Guilherme"))

const sum = (...numbers) => {
    let total = 0
    for(let n of numbers) {
        total += n
    }
    return total
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // Result: 55