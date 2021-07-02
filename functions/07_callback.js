// Callback -> Aconteceu algum evento ele retorna (chama) a função

function exec(fn, a, b) {
    return fn(a, b)
}

const sum = (x, y) => console.log(x + y)
const sub = (x, y) => console.log(x - y)

exec(sum, 56, 38)
exec(sub, 182, 27)

setInterval(function() {
    console.log('Exec...')
}, 5000)