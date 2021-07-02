// callbacks x promises

// promise é promessa, algo que você vai resolver no futuro
// uma promise sempre recebe e retorna um só valor
// caso queira mais valores, crie um objeto ou uma lista
let promise = new Promise(function(promiseDone) {
    promiseDone(3)
})

// Podemos chamar vários thens aqui
// O resultado de um then é passado para o próximo
promise
    .then(num => num * 2)
    .then(value => console.log(value)) // 6