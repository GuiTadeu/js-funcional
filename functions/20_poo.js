// Como criar uma função para instanciar um objeto?
// No JS, uma classe é uma função :D

// Constructor Function
function Product(name, price) {
    
}

console.log(typeof Product) // function
console.log(typeof Promise) // function
console.log(typeof Object) // function

const p1 = new Product('Smartphone', 800.59)
console.log(typeof p1) // object
console.log(p1.name) // undefined

const p2 = new Product('Notebook', 4000)
console.log(typeof p2) // object
console.log(p2.name) // undefined

// Sempre que usamos o this os attr são publicos
// Para ficar privado usamos o let
function ProductWithAttr(name, price, desc = 0.50) {
    this.name = name
    this.price = price
    this.desc = desc

    let privateAttr = 3

    this.finalPrice = () => {
        return (this.price - (this.price * this.desc))
    }
}

const p3 = new ProductWithAttr('PS4', 2000)
console.log(typeof p3) // object
console.log(p3.name) // PS4
console.log(p3.price) // 2000
console.log(p3.privateAttr) // undefined
console.log(p3.finalPrice()) // 1000