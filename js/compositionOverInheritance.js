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

const latestMovie = movie("Kompozycja vs. dziedziczenie")
latestMovie.record();
latestMovie.share();
console.log(latestMovie.watch());






