import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' name='username' onChange={handleChange} />
        <input type="password" placeholder='password' name='password' onChange={handleChange} />
        <button type='submit'>Login</button>
        {error && <p>{error}</p>}
        <span>Belum punya akun? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login