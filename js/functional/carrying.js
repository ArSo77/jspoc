// Problem
const numbers = [44, 3, 84, 23];
function multiply(value, multiplier) {
    return value * multiplier
}
// Partial Application
const double = multiply.bind(null , 2);
double(5);
console.log(numbers.map(double))


//Unary & binary
const unary = (x) => console.log(x);
const binary = (x, y) => x + y;

const binToUnrFunc = function (x) {
    return function (y) {
        return x + y;
    }
}

//Curring
const unaryCurring = (x) => (y) => x + y;
unaryCurring(1);
unaryCurring(1)(2);

//Ramda








