const cart = [
    { name: 'Caneta', qtde: 10, price: 7.99 },
    { name: 'Impressora', qtde: 0, price: 649.50 },
    { name: 'Caderno', qtde: 4, price: 27.10 },
    { name: 'Lapis', qtde: 3, price: 5.82 },
    { name: 'Tesoura', qtde: 1, price: 19.20 }
]

/*
const getName = function(item) {
    return item.name
}
*/
const getName = item => item.name

// A função map recebe uma fn(value, index, array)
console.log(cart.map(getName))

const getTotal = item => item.qtde * item.price
console.log(cart.map(getTotal))

// Implementando o próprio map
Array.prototype.myMap = function(fn) {
    let newArray = []
    for (let index = 0; index < this.length; index++) {
        newArray.push(fn(this[index]));
    }
    return newArray
}

const getQtdes = item => item.qtde
console.log(cart.myMap(getQtdes))