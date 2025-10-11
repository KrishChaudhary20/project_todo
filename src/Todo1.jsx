import React from 'react';
function Todo1({todo, index, delTodo}) {
  return (
        <div className="TODO">
          <p> {todo} </p> 
          <div className="actions">
            <input type="checkbox"></input>
            <button onClick={() => delTodo(index)}>Delete</button>
          </div>
        </div>
  )
}

export default Todo1
