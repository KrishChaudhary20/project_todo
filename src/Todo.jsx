import Todo1 from "./Todo1";

function Todo({todos, delTodo}) {
  return (
    <div className="container">
      {todos.map((todo, index)=>{
        return (
            <Todo1 todo={todo} index={index} delTodo={delTodo}/>
        )
      })}
    </div>
  );
}

export default Todo;