class Product {

    constructor(name, price, desc = 0.50) {
        this._name = name
        this.price = price
        this.desc = desc
    }

    get name() {
        return `Produto: ${this._name}`
    }

    set name(newName) {
        this._name = newName.toUpperCase()
    }

    // podemos usar o get para chamar como um atributo
    finalPrice() {
        return (this.price - (this.price * this.desc))
    }
}

const p1 = new Product('PS4', 2000)
console.log(typeof p1) // object
console.log(p1.name) // PS4
console.log(p1.price) // 2000
console.log(p1.finalPrice()) // 1000

p1.name = 'ps5'
console.log(p1.name) // Produto: PS5

// Podemos adicionar funcionalidades a objetos
// Caso queira que todas as instancias tenham a função: Object.defineProperty
Product.prototype.log = function() {
    console.log(`Name: ${this.name}, Price: R$ ${this.price}`)
}