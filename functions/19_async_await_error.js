function range(min, max, forbiddenNumbers) {
    if(min > max) {
        // De um lado temos o destructuring, do outro temos um array
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const random = parseInt(Math.random() * (max - min + 1)) + min
        if(forbiddenNumbers.includes(random)) {
            reject('Number Not Allowed!')
        }
        resolve(random)
    })
}

// A forma que você tem para rejeitar uma função assincrona
// é estourando uma exception
// Para resolver, é simplesmente retornando o valor
async function megaSena(qtNumbers, attempts = 1) {
    try {
        const numbers = []
        for(let _ of Array(qtNumbers).fill()) {
            numbers.push(await range(1, 60, numbers))
        }
        return numbers
    } catch(exception) {
        if(attempts > 10) {
            throw "Boring!"
        } else {
            return megaSena(qtNumbers, attempts + 1)
        }
    }

}

megaSena(15)
    .then(console.log)
    .catch(console.log)