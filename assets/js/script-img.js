
function rand (min, max) {
	const num = Math.random() * (max - min) + min;
	return Math.floor(num);
}

class Filmes {
    constructor() {

    }

    get movie () {
        const n = rand(0, movies.length);
        return movies[n];
    }
}

