import { useEffect, useState } from "react";
import GetMovie from "../component/GetMovie";
import "../css/Movie.css";
import Loading from "../component/Loading";

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year&limit=50"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="movieHeader">
            <span>Back</span>
            <span>Movie List</span>
            <span>sort by</span>
          </div>
          <div className="movieWrap">
            {movies.map((movie) => (
              <GetMovie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Movie;
