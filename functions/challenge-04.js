const cart = [
    { name: 'Caneta', qtde: 10, price: 7.99 },
    { name: 'Impressora', qtde: 0, price: 649.50 },
    { name: 'Caderno', qtde: 4, price: 27.10 },
    { name: 'Lapis', qtde: 3, price: 5.82 },
    { name: 'Tesoura', qtde: 1, price: 19.20 }
]

// Implementando o próprio filter
Array.prototype.myFilter = function(fn) {
    let newArray = []
    for (let index = 0; index < this.length; index++) {
        if(fn(this[index])) {
            newArray.push(this[index])
        }
    }
    return newArray
}

const getQtdeGreaterThen1 = item => item.qtde > 1
console.log(cart.myFilter(getQtdeGreaterThen1))