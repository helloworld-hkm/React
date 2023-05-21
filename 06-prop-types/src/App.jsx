import Profile from "./components/Profile";
import { useState } from 'react';
import Todo from "./components/Todo";


function App() {
  const [users,setusers] = useState([
    {name:"alpha",age:20},
    {name:"beta",age:20},
    {name:"charlie",age:20},
  ])

  return (
    <>
    {users.map((item,index) =>(
      <Profile key={index} name={item.name} age={item.age}/>
    ))}
    <hr/>
    <Todo/>
    </>
  )
}

export default App
