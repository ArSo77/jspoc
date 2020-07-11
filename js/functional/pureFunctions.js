// Mapping
const sum = (a, b) => a + b
//Procedure
const update = (data) => {
    const user = userDB.findById(user.id)
    user = {...user, ...data}
    return userDB.save(user)
}
// I/O
const showMessage = (message) => {
    document.querySelector(".form-message").innerHTML = message;
}

// Pure skupia się na mapowaniu 
// do funkcji wpada albo wartość albo przez referencje

//start
// By value Primitive Types (Strings, Numbers, ...)
// By reference: Arrays & Objects


// Non-pure
const convertPlayTime = (games) => {
    games.forEach((game) => (game.playtime = toHour(game.playtime)))
    return games
}

// Pure
const convertPlayTime = (games) => {
    return games.map((game) => ({ ...game, playtime: toHour(game.playtime)}))
}