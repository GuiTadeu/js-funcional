const cart = [
    { name: 'Caneta', qtde: 10, price: 7.99 },
    { name: 'Impressora', qtde: 0, price: 649.50 },
    { name: 'Caderno', qtde: 4, price: 27.10 },
    { name: 'Lapis', qtde: 3, price: 5.82 },
    { name: 'Tesoura', qtde: 1, price: 19.20 }
]

const qtdeGreaterThen0 = item => item.qtde > 0
const validItems = cart.filter(qtdeGreaterThen0)
console.log(validItems)