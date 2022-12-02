import { useState } from "react";
import { Link } from "react-router-dom";
import TodoList from "../component/TodoList";
import Coins from "../component/Coins";
import "../css/Home.css";
import Popup from "../component/Popup";
import logo from "../logo.svg.png";

function Home() {
  const [todoHide, setTodoHide] = useState(false);
  const [coinsHide, setCoinsHide] = useState(false);
  const [popHide, setPopHide] = useState(false);

  const hideTodo = () => {
    setTodoHide(() => !todoHide);
  };
  const hideCoins = () => {
    setCoinsHide(() => !coinsHide);
  };
  const hidePop = () => {
    setPopHide(() => !popHide);
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
        <button className="appBtn" onClick={hideTodo}>
          {todoHide ? "hide todo" : "show todo"}
        </button>
        <button className="appBtn" onClick={hideCoins}>
          {coinsHide ? "hide coins" : "show coins"}
        </button>
        <button className="appBtn" onClick={hidePop}>
          {popHide ? "hide pop" : "show pop"}
        </button>
        <button className="appBtn">
          <Link to="/movies">movies info</Link>
        </button>
      </div>

      <div id="todo_wrap">
        <div id="todo">{todoHide ? <TodoList /> : null}</div>
      </div>
      <div id="coins">{coinsHide ? <Coins /> : null}</div>
      <div id="popup">{popHide ? <Popup /> : null}</div>
    </div>
  );
}

export default Home;
