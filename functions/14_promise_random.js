function range(min, max) {
    if(min > max) {
        // De um lado temos o destructuring, do outro temos um array
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const random = parseInt(Math.random() * (max - min + 1)) + min
        resolve(random)
    })
}

range(10, 30).then(console.log)