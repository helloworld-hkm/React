import { useState } from "react";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputUsername = (event) => {
    setUsername(event.target.value);
  };
  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const register = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
  };
  const inputPhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <form onSubmit={register}>
      <h1>register</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={inputUsername}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={inputPassword}
      />
      <br />
      <button>Register</button>
      
    </form>
    
  );
}
export default Register;
