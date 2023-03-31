import React from 'react';
import {useState} from "react";
import { Link } from 'react-router-dom';
import "./search.scss";
import { useSelector } from "react-redux";
import { selectUser } from "./../../features/userSlice";

const Search = () => {
  // const apiAccessKey = "e2Ak8Od98kIa8Gjeo5HXZ8zOoaQWyTWt";
  const [text,setText] = useState("");
  const [status,setStatus] = useState("");
  const user = useSelector(selectUser);
  
  const searching = (e) => {
    e.preventDefault();
    const code = "+20";

    fetch(`https://api.apilayer.com/number_verification/validate?number=${text}&countrycode=${code}`, {
      method: 'GET',
      headers: {
        "apikey": "e2Ak8Od98kIa8Gjeo5HXZ8zOoaQWyTWt",
      },
    }).then(response => response.json())
		.then(response => {
      setStatus(response.valid);
      // response.valid?
      //   alert("valid Number!!"): 
      // alert("Invalid Number!!!")

    })
		.catch(err => console.error(err));

    if(status){
      alert("valid Number!!");
    }else{
      alert("Invalid Number!!!");
    }

    fetch(`http://localhost:8800/result`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: user.username,phoneNumber:text,status: (status? "Valid":"Invalid")})
    }).then(response => response.json())
    .then(response => console.log(response))
		.catch(err => console.error(err));
  }

  return (
    <div className="parent">
      <div className="history">
        <Link to="/history" className='link'>History</Link>
      </div>
      <div className='search'>
        <form action="" onSubmit={searching}> 
        <input type="text" 
        placeholder='Enter the number' 
        value={text}
        onChange={(e) => setText(e.target.value)}/>
        <button type='submit'>Verify</button>
        </form>
      </div>
    </div>
  )
}

export default Search;