const cart = [
    { name: 'Caneta', qtde: 10, price: 7.99, fragile: true },
    { name: 'Impressora', qtde: 0, price: 649.50, fragile: true },
    { name: 'Caderno', qtde: 4, price: 27.10, fragile: false },
    { name: 'Lapis', qtde: 3, price: 5.82, fragile: false },
    { name: 'Tesoura', qtde: 1, price: 19.20, fragile: true }
]

const getFragile = item => item.fragile
const getTotalItem = item => item.price * item.qtde
const getMedia = (acc, el, _idx, src) => (el / src.length) + acc

const media = cart
    .filter(getFragile)
    .map(getTotalItem)
    .reduce(getMedia, 0)

console.log(media)