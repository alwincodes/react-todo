import React from "react";
import Todo from "./Todo";

const Todolist =({todos, setTodos})=>{
    return(
        <div className="todo-container">
          <ul className="todo-list">
            {
              todos.map(todo=>(
                <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text = {todo.text}/>
              ))
            }
          </ul>
        </div>
         );
}

export default Todolist;