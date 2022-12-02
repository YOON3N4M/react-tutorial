import { Link } from "react-router-dom";

function GetMovie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="movieBox">
      <Link to={`${id}`}>
        <img className="movie" src={coverImg} alt={title} />
      </Link>
      {/*<h2>
        <Link to={`/movies/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
        */}
    </div>
  );
}

export default GetMovie;
