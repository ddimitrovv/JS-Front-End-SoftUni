function movies(input) {

    let moviesCollection = [];

    for (const movie of input) {
        if (movie.includes('addMovie')) {
            movieName = movie.split('addMovie')[1];
            const currentMovie = {};
            currentMovie['name'] = movieName.trim();
            moviesCollection.push(currentMovie);

        } else if (movie.includes('directedBy')) {
            let currentInfo = movie.split(' directedBy ')
            for (const current of moviesCollection) {
                if (current['name'] === currentInfo[0]) {
                    current['director'] = currentInfo[1];
                }
            }
            
        } else if (movie.includes('onDate')) {
            let currentInfo = movie.split(' onDate ')
            for (const current of moviesCollection) {
                if (current['name'] === currentInfo[0]) {
                    current['date'] = currentInfo[1];
                }
            }
            
        }
    }
    for (const movie of moviesCollection) {
        if (('name' in movie && 'date' in movie && 'director' in movie)){
            console.log(JSON.stringify(movie))
        }
    }
}