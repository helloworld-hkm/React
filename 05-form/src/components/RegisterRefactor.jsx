import { useState } from "react";
function RegisterRefactor() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  console.log(user);
  return (
    <form>
      <h1>Register refactor</h1>
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
        onChange={handleChange}
      />
      <br />
      <button>Register</button>
    </form>
  );
}
export default RegisterRefactor;
