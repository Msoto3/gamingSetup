import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DataContext from './context/DataContext'
import axios from 'axios';


const Sign= () => {
  const {username,setUsername,password,setPassword} = useContext(DataContext)
  const navigate = useNavigate()

  const login =() =>{
    const data = {username:username,password:password}
    axios.post("https://gamesetup-api.onrender.com/routes/login",data).then((res)=>{
      if(res.data.error){
        alert(res.data.error)
        
      }
      else{
        
        localStorage.setItem("token",res.data)
        navigate('/')
        window.location.reload()
      }
    })
   
  }

  const handleUser = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    login()   
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUser}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="signup-container">
        <p>Don't have an account?</p>
        <button className="signup-button"><Link to={'/signup'}>Sign Up</Link></button>
      </div>
    </div>
  );
}

export default Sign