const findMoviesWithHighRatings = (movies) => {

    const matchingMovies = [];

    for (const movie of movies){
        
        if(movie.starRating > 3.0){
            matchingMovies.push(movie);
        }
    }

    if(matchingMovies.length === 0){
        console.log("Sorry, no movies found.");
        return [];
    }

    else{
        for (const movie of matchingMovies){
            console.log(`Name: ${movie.name}, Star Rating: ${movie.starRating}`);
        }
    }

    return matchingMovies;

}

const movies = [
    {  
        name: "Spiderman Across the Universe",
        year: 2022,
        starRating: 4.5,
    },
    {
        name: "A Thousand Words",
        year: 2012,
        starRating: 3.1,
    },
    {
        name: "Sly",
        year: 2023,
        starRating: 5,
    },
    {
        name: "The Whale",
        year: 2022,
        starRating: 4.98,
    },
    {
        name: "Crossover",
        year: 2006,
        starRating: 2.2,
    },

];


findMoviesWithHighRatings(movies);