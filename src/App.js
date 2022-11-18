import { useState } from "react";
import TodoList from "./TodoList";
import Coins from "./coins";
import "./app.css";
import Popup from "./Popup";

function App() {
  const [todoHide, setTodoHide] = useState(true);
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
      <div id="topBar">
        <button onClick={hideTodo}>
          {todoHide ? "hide todo" : "show todo"}
        </button>
        <button onClick={hideCoins}>
          {coinsHide ? "hide coins" : "show coins"}
        </button>
        <button onClick={hidePop}>{popHide ? "hide pop" : "show pop"}</button>
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
