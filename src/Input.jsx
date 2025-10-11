import React from "react";
function Input({inputVal, writeTodo, addTodo}) {
  return (
    <div className="input-container">
      <input type="text" placeholder="Enter the Task" value={inputVal} onChange={writeTodo}/>
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default Input;
