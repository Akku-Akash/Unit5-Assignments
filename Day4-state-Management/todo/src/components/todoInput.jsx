import { useState } from "react";

export const TodoInput = ({cbFn}) => {
  const [text, setText] = useState("");
//   console.log(text);
  
  return (
      <div>
      <input
        onChange={(e) => {
            setText(e.target.value);
        }}
        type="text"
        name=""
        placeholder="Enter Text"
      />
      <button onClick={() => {cbFn(text)}}>Add To List</button>
    </div>
  );
};