function waitFor(seconds = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), seconds)
    })
}

waitFor(2000)
    .then(() => console.log('Executando Promise 1...'))
    .then(waitFor)
    .then(() => console.log('Executando Promise 2...'))
    .then(waitFor)
    .then(() => console.log('Executando Promise 3...'))

// Async/Await -> Um código que parece sincrono mas é assincrono
// Await -> Não quero receber a promise, quero receber o valor
async function execute(params) {

    await waitFor(1500)
    console.log('Async/Await 1...')

    await waitFor(1500)
    console.log('Async/Await 2...')

    await waitFor(1500)
    console.log('Async/Await 3...')
}

execute()