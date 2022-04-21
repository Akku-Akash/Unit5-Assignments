import { useState } from "react";
import { TodoInput } from "./todoInput";

export const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const cbFn = (text) => {
    setTodoList([...todoList,text]);
  }

  return (
    <div>
      <TodoInput cbFn={cbFn}/>
      {todoList.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
};