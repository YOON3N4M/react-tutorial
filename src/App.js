import { useState } from "react";
import TodoList from "./TodoList";
import Coins from "./coins";

function App() {
  const [todoHide, setTodoHide] = useState(true);
  const [coinsHide, setCoinsHide] = useState(true);

  const hideTodo = () => {
    setTodoHide(() => !todoHide);
  };
  const hideCoins = () => {
    setCoinsHide(() => !coinsHide);
  };
  return (
    <div>
      <div>
        <button onClick={hideTodo}>hide todo test</button>
        <button onClick={hideCoins}>hide coins</button>
      </div>
      <div id="todo">{todoHide ? <TodoList /> : null}</div>
      <div id="coins">{coinsHide ? <Coins /> : null}</div>
    </div>
  );
}

export default App;
