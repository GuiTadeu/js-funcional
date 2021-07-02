const cart = [
    { name: 'Caneta', qtde: 10, price: 7.99 },
    { name: 'Impressora', qtde: 0, price: 649.50 },
    { name: 'Caderno', qtde: 4, price: 27.10 },
    { name: 'Lapis', qtde: 3, price: 5.82 },
    { name: 'Tesoura', qtde: 1, price: 19.20 }
]

// Implementando o próprio reduce
Array.prototype.myReduce = function (fn, acc) {
    if(acc === undefined) {
        acc = this[0].qtde
    }

    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        acc = fn(acc, element)
    }

    return acc
}

const getTotalQtde = (acc, el) => el.qtde + acc

const totalQtde = cart.myReduce(getTotalQtde, 0)
console.log(totalQtde) // 18