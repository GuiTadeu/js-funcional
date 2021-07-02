function goodMorning() {
    console.log("Good Morning!")
}

const goodNight = function abc() {
    console.log("Good Night!")
}

function execute(fn) {
   if(typeof fn === 'function') {
       fn()
   }
}

execute(3) // 3 not is a function
execute(goodMorning)
execute(goodNight)