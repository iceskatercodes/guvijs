class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(arr) {
        let pgArray = arr.filter((movie) => movie.rating == "PG")
        return pgArray
    }
}

let arr =[]
arr.push( new Movie("Casino Royale", "Eon Productions", "PG13"))
arr.push( new Movie("Inception", "Warner Bros", "PG"))
arr.push( new Movie("Iron Man", "Marvel Studios"))
arr.push( new Movie("Orphan", "Dark Castle Entertainment", "PG13"))
arr.push( new Movie("Cars", "Pixar", "G"))
arr.push( new Movie("Casino Royale", "Eon Productions", "PG13"))

console.log(Movie.getPG(arr))
