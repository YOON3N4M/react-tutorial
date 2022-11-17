import { useState } from "react";

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
    <div>
      <h1>MY TODOS ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="write your today to do"
        ></input>
        <button>add toDo</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => delBtn(index)}>❌</button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default TodoList;
