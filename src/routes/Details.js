import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Details.css";
import Loading from "../component/Loading";

function Details() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  const [backgroundCover, setBackgroundCover] = useState();
  /* const GetMovieInfo = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
  };
  useEffect(() => {
    GetMovieInfo();
    setLoading(false);

    console.log(loading);
  }, []);
  await의 사용법을 모르겠어서 fetch와 then으로 아래와 같이 대체함.
*/
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setMovieInfo(json);
        setLoading(false);
        setBackgroundCover(movieInfo.data.movie.background_image);
        console.log(movieInfo.data.movie);
      }, []);
  });

  let style = {
    backgroundImage: `url(${backgroundCover})`,
  };

  return (
    <div>
      {
        loading ? (
          <Loading />
        ) : (
          <div className="movieInfoWrap">
            <div>nav</div>

            <div className="backImg" style={style}></div>
            <div className="main-content">
              <div className="row">
                <div className="poster-wrap">
                  <img
                    src={movieInfo.data.movie.medium_cover_image}
                    alt="loading.."
                  />
                </div>
                <div className="movie-text-wrap">
                  <h1>{movieInfo.data.movie.title}</h1>
                  <h2>{movieInfo.data.movie.year}</h2>

                  {movieInfo.data.movie.genres.map((g) => (
                    <span className="genres">{g}</span>
                  ))}
                  <p>{movieInfo.data.movie.description_full}</p>
                </div>
              </div>
            </div>
          </div>
        )
        /*
      <div className="movieInfoWrap">
        <div className="imgBox">
          <img
            src={movieInfo.data.movie.large_cover_image}
            alt={movieInfo.data.movie.title}
          />
        </div>
        <div className="infoBox">
          <h2>{movieInfo.data.movie.title}</h2>
          <span>year: {movieInfo.data.movie.year}</span>
          <span>rating: {movieInfo.data.movie.rating}</span>
          <span>download: {movieInfo.data.movie.download_count}</span>
          <span>runtime: {movieInfo.data.movie.runtime} min</span>
          <span>language: {movieInfo.data.movie.language}</span>
          <p>{movieInfo.data.movie.description_intro}</p>
        </div>
    </div> */
      }
    </div>
  );
}

export default Details;
