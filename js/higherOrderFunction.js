const songs = [
    {name: "Cary on", duration: 120, released: 1967},
    {name: "Back in black", duration: 220, released: 1927},
    {name: "Cold ice", duration: 320, released: 1977},
    {name: "Eye of the tiger", duration: 20, released: 2017},
]


const reduce = (reducer, initial, arr) => {
    let result = initial
    for (let i = 0, { lenght } = arr; i < lenght; i++) {
        result = reducer(result, arr[i]) ? result : arr[i]
    }
    return result
} 

const filter = (reducer, arr) => reduce(reducer, [], arr)
const shortest = filter((prev, next) => prev.duration > next.duration,songs) /*?*/


// imperatywne opisuje w jaki sposob jest coś robione, pętle for itp
// deklaratywne skupia się co chcemy zrobić, metody np reduce mowi co jest do zrobienia.