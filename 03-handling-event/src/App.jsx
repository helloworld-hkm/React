// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Counter from "./components/Counter";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import CartList from "./components/CartList";
function App() {
  const [name, setName] = useState("hakim");
  const handleClick = () => {
    console.log("test");
  };
  return (
    <>
      <h1 onClick={() => setName("firman")}>{name}</h1>
      <h1 onClick={handleClick}>Click Me</h1>
      <Counter/>
      <CartList/>
    </>
  );
}

export default App;
