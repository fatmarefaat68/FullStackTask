import React from 'react';
import {useState} from "react";
import "./login.scss";
import { useDispatch } from "react-redux";
import {login} from "./../../features/userSlice"; 
import { useNavigate } from "react-router-dom";
// import { userSlice } from './../../features/userSlice';
const Login = () => {

  const [name,setName] = useState("");
  const [password,setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({
      username: name,
      password: password,
      loggedIn: true
    }));
    
    navigate("/search");
  };

  return (
    <div className='login'>

    <form action="" className="login__form" onSubmit={handleSubmit}>
    <h1>Login</h1>
    <input type="text"
     placeholder="Username"
     value={name}
     onChange={(e)=> setName(e.target.value)}
    />
    <input type="password"
    placeholder="Password"
    value={password}
    onChange={(e)=> setPassword(e.target.value)}

    />
    <button type='submit'>Login</button>
  </form>
    </div>
  )
}

export default Login;