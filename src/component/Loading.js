import "../css/Loading.css";
import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
  return (
    <div className="loadingScreen">
      <BeatLoader color="#b9bde1" size={27} />
    </div>
  );
}
