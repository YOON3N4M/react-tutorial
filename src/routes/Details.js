import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  console.log(id);
  const GetMovieInfo = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    GetMovieInfo();
  }, []);
  return <div>hi</div>;
}

export default Details;
