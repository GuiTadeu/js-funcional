// Código fica mais aninhado, callback-hell
setTimeout(function() {
    console.log('Executando Callback...')
    
    setTimeout(function() {
        console.log('Executando Callback 2...')

            setTimeout(function() {
                console.log('Executando Callback 3...')
            }, 2000)

    }, 2000)
}, 2000)

// Como fazer isso usando Promises?
// Uma vez que o resolve for chamado, o then poderá ser usado
function waitFor(seconds = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando Promise...')
            resolve()
        }, seconds)
    })
}

// Olha a diferença desse código para o callback
let promise = waitFor()
    .then(() => waitFor())
    .then(() => waitFor())