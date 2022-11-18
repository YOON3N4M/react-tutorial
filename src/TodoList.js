import { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  ///////
  const delBtn = (index) => {
    setToDos((curToDos) =>
      curToDos.filter((_, curIndex) => curIndex !== index)
    );
    console.log("hi");
  };
  return (
    <div id="todoWrap">
      <div id="todoTitle">
        {" "}
        <h1>MY TODOS ({toDos.length})</h1>{" "}
      </div>

      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="write your today to do"
        ></input>
        <button>add toDo</button>
      </form>

      <div id="todoP">
        <ul id="todoUl">
          {toDos.map((item, index) => (
            <li id="todoLi" key={index}>
              <div id="itemWrap">
                <span>◻</span>
                {item}
                <button id="delBtn" onClick={() => delBtn(index)}>
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <hr></hr>
    </div>
  );
}

export default TodoList;
