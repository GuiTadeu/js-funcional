function range(min, max, time) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(function() {
            const random = parseInt(Math.random() * (max - min + 1)) + min
            resolve(random)
        }, time)
    })
}

// Queremos gerar vários números aleatórios
function variousRandomNumbers() {
    return Promise.all([
        range(1, 60, 4000),
        range(1, 60, 1000),
        range(1, 60, 500),
        range(1, 60, 3000),
        range(1, 60, 100),
        range(1, 60, 1500),
    ]);
}

console.time('promise')

// Só quando chegar todas as respostas será executado o console.log
variousRandomNumbers()
    .then(numbers => console.log(numbers))
    .then(() => {
        console.timeEnd('promise') // ~4s
    });