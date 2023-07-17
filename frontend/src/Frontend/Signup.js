import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sign= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const specs = {
    headset:null,
    mousepad:null,
    monitor:null,
    pc:null,
    keyboard:null,
    mouse:null
      
  }
  const [allUsers,setAllUsers] = useState([])
  const navigate = useNavigate()

  const createUser = async () =>{
    const data = {username:username}
    try{
      const response = await axios.get("https://gamesetup-api.onrender.com/routes/getUsers",{params:data})
      if(response.data.error) return false
      await axios.post("https://gamesetup-api.onrender.com/routes/createUser",{
        username,
        password,
        specs

      }).then((res) =>{
        setAllUsers([
          ...allUsers,
          {
            username,
            password,
            specs
          }
        ])
    
      })

    

    return true

    }
    catch(err){
      console.log("Error creating the user")
      return false
    }
    

  }

  

  const handleUser = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    

    
    // Perform login logic here using the username and password
    const UserCreated = await createUser()

    if(UserCreated){
      alert("Account Created")
      navigate('/')
    }
    else{
      alert("Username Exists")
    }
    
    
  };

  return (
    <div className="login-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUser}
            placeholder='create username'
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            placeholder='create password'
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
     
    </div>
  );
}

export default Sign