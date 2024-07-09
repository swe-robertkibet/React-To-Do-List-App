import { useEffect } from "react";
import "./CSS/Todo.css";
import { useState, useRef } from "react";
import TodoItems from "./TodoItems";

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    if (inputRef.current.value.trim() === "") return; // Prevent adding empty tasks
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    const storedCount = localStorage.getItem("todos_count");
    if (storedTodos) setTodos(storedTodos);
    if (storedCount) count = parseInt(storedCount, 10) || 0; // Ensure count is a number and handle NaN
  }, []);

  useEffect(() => {
    console.log("Todos state updated", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add Your Task"
          className="todo-input"
        />
        <div onClick={add} className="todo-add-btn">
          ADD
        </div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => (
          <TodoItems
            key={index}
            setTodos={setTodos}
            no={item.no}
            display={item.display}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
