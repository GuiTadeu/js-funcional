function successOrNot(value, chanceToMakeAnError) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceToMakeAnError) {
            reject('Error!')
        } else {
            resolve(value)
        }
    });
}

// chanceToMakeAnErro - percent of error
successOrNot('Testing...', 0.9)
    .then(value => console.log(value))
    .catch(error => console.log(`Error: ${error}`))