import "./Navbar.css"
import logo from "../assets/react.svg"

function Navbar() {
 
  
  return (
    <header>
        <img src={logo} width={50} alt="" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>register</li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
