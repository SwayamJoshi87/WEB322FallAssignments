

// P-1 the arrow function

const findMoviesWithHighRatings = (movies) => {

    //create the result array
    const matchingMovies = [];

    //iterate over the movies array using the for of loop
    for (const movie of movies){
        //Search criteria 
        if(movie.starRating > 3.0){
            //add the movie to the result array
            matchingMovies.push(movie);
        }
    }

    if(matchingMovies.length === 0){
        console.log("Sorry, no movies found.");
        return [];
    }
    
    //Print the name and star rating of the result/matching movies to the console
    else{
        for (const movie of matchingMovies){
            console.log(`Name: ${movie.name}, Star Rating: ${movie.starRating}`);
        }
    }

    return matchingMovies;

}

//P - 2 create the movies array
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

//Call the function
findMoviesWithHighRatings(movies);