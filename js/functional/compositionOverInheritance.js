//Inheritance

class Media {
    record() {}
    share() {}
}

class Movie extends Media {
    watch() {}
}

class Podcast extends Media{
    listen() {}
}

class Resource {
    share() {}
}

class Newsletter extends Resource {
    write() {}
    read() {}
}

class Snippet extends Resource {
    gather() {}
}


// Composition
const recordable = (state) => ({
    record: () => `I'm recording a new ${state.type}!`
});

const shareable = (state) => ({
    share: () => `I'm shareing a ${state.name}!`
});

const watchable = (state) => ({
    watch: () => `I'm watching a ${state.name}!`
});

//factory function
const movie = (name) => {
    const state = {name: name, type: 'movie'};
    return Object.assign({}, recordable(state), shareable(state), watchable(state))
}

// const latestMovie = movie("Kompozycja vs. dziedziczenie")
// latestMovie.record();
// latestMovie.share();
// console.log(latestMovie.watch());











//Function composition



const bookshelf = [
    {title: "aaa", pages: 1, genre: "it"},
    {title: "bbb", pages: 10, genre: "it"},
    {title: "ccc", pages: 100, genre: "bluetooth"},
    {title: "ddd", pages: 1000, genre: "it"},
    {title: "eee", pages: 10000, genre: "it"},
]

const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x)

const getBusiness = (list) => list.filter((book) => book.genre === 'it')
const getPages = (list) => list.map(({pages}) => pages)
const countPages = (book) => book.reduce((acc, pages) => acc + pages)

const buisness = compose(countPages, getPages, getBusiness)
console.log(buisness(bookshelf))

console.log(compose(countPages, getPages, getBusiness)(bookshelf))//skrócony zapis
