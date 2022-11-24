import { useEffect, useState } from "react";

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        "Loading.."
      ) : (
        <div>
          <h1>Moive List</h1>
          <div>
            {movies.map((movie) => (
              <div key={movie.id}>
                <img src={movie.medium_cover_image} alt="none" />
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                <ul>
                  {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Movie;
