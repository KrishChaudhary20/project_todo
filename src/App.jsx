import { useState } from "react";
import "./App.css";
import Input from "./Input";
import Todo1 from "./Todo";
function App() {
  const [inputVal, setInputVal] = useState(" ");
  const [todos, setTodos] = useState([ ]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal != ' ') {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal(' ');
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) => prevTodos.filter((prevTodos, prevTodosIndex) => {
      return prevTodosIndex != todoIndex
      })
    )
  }

  console.log(todos);
  return (
    <main>
      <h1>To Do List</h1>

      <Input inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
      <Todo1 todos={todos} delTodo={delTodo} />
    </main>
  );
}

export default App;
