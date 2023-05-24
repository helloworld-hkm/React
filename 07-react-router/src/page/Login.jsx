import {useNavigate} from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
    
    const login=(e)=>{
        event.preventDefault()
        // perintah validasi username dan password
        //jika benar maka dialihkan ke halaman yang lain
        navigate("/")
    }
  return (
    <>
      <form onSubmit={login}>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </>
  );
}
export default Login
