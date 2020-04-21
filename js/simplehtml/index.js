import {test1} from './module.js'


console.log("testhtml")

let a={elo:123, fun:test1}



let decfun = function () {
    let count = 0
    return function(context, callback) {
        console.log("decfun this", this)
        count+=1
        console.log("Count: ", count)
        callback.call(context)
    }
}
let decorator = decfun()


let button = document.getElementById('testbtn')

button.addEventListener('click', () => {
    console.log("click", Math.round(Math.random()*100))
    a.elo+=1
    decorator(a, a.fun)
})