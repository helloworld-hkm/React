import axios from "axios";
import { useEffect, useState } from "react";
function Todo() {
  const [todo, setTodo] = useState([]);
  const [inputTodo, setInputTodo] = useState("");
  const [count,setCount] = useState(1)
  const addTodo = (event) => {
    event.preventDefault();
    // request data ke axios
    const data ={
        title:inputTodo,   
        isDone : false
    }
    axios.post("https://64690fc5183682d61438f5aa.mockapi.io/todo",data
    ).then(()=>setCount(count+1))
  } 

  useEffect(() => {
    axios("https://64690fc5183682d61438f5aa.mockapi.io/todo").then(({ data }) =>setTodo(data));
  }, [count])
  return (
    <>
      <form onSubmit={addTodo}>
        <input
          type="text"
          name="inputTodo"
          placeholder="Input your ToDo"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
      {todo.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
          <span>{item.isDone ? "✅" : "❌"}</span>
        </div>
      ))}
    </>
  );
}
export default Todo;
