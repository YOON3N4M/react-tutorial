import { useState } from "react";
import TodoList from "./TodoList";
import Coins from "./coins";
import "./app.css";
import Popup from "./Popup";
import logo from "./logo.svg.png";

function App() {
  const [todoHide, setTodoHide] = useState(false);
  const [coinsHide, setCoinsHide] = useState(false);
  const [popHide, setPopHide] = useState(false);
  const [movieHide, setMovieHide] = useState(false);

  const hideTodo = () => {
    setTodoHide(() => !todoHide);
  };
  const hideCoins = () => {
    setCoinsHide(() => !coinsHide);
  };
  const hidePop = () => {
    setPopHide(() => !popHide);
  };
  const hideMovie = () => {
    setMovieHide(() => !movieHide);
  };
  return (
    <div id="appWrap">
      <div id="title">
        <img id="logo" src={logo} alt="logo"></img>
        <h1 id="titleName" style={{ color: "white" }}>
          {" "}
          React Tutorial{" "}
        </h1>
      </div>
      <div id="topBar">
        <button onClick={hideTodo}>
          {todoHide ? "hide todo" : "show todo"}
        </button>
        <button onClick={hideCoins}>
          {coinsHide ? "hide coins" : "show coins"}
        </button>
        <button onClick={hidePop}>{popHide ? "hide pop" : "show pop"}</button>
        <button onClick={hideMovie}>
          {movieHide ? "hide movie" : "show movie"}
        </button>
      </div>

      <div id="todo_wrap">
        <div id="todo">{todoHide ? <TodoList /> : null}</div>
      </div>
      <div id="coins">{coinsHide ? <Coins /> : null}</div>
      <div id="popup">{popHide ? <Popup /> : null}</div>
      <div></div>
    </div>
  );
}

export default App;
