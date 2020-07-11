


// ## SharedState
let imEverywhere = "yeah";


function here() {
    console.log(imEverywhere)
    imEverywhere= "nope"
}


here();


function andThere() {
    console.log(imEverywhere)
}

andThere();



function log(items){
    const arr = [...items] // shallow
    while(arr.length > 0){
        console.log(arr.shift());
    }
}


function app() {
    const items = ['a', 'c', 'b']
    log(items);
    items.sort();
    console.log(items);
}

app();


// Timing
const account = {balance: 2}

const add = (acc) => (acc.balance += 1)
const multiply = (acc) => (acc.balance *= 2)

add(account)
multiply(account)

console.log(account)













