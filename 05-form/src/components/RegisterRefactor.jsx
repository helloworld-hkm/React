import { useState } from "react";
function RegisterRefactor() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = () => {
    
  };

  return (
    <form>
      <h1>Register</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={user.username}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={user.password}
        // onChange={inputPassword}
      />
      <br />
      <button>Register</button>
    </form>
  );
}
export default RegisterRefactor;
