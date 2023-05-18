
import { useEffect, useState } from "react";
import ListDigimon from "./components/ListDigimon";

function App() {
  const [greeting,setGreeting] =  useState("hallo")
  const [count, setCount] = useState(0)
  // console.log("1");
  useEffect(()=>{
    // console.log("3");
  },[])
  return (
    
      <>
       
        <h1 onClick={()=>setGreeting("tess")}>{greeting}</h1>
        <button onClick={()=>setCount(count+1)}>its count {count}</button>
        <ListDigimon/>
        
      </>
  );
}

export default App;
