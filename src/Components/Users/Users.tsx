import "./Users.css";
import { useState } from "react";

const Users = () => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleInput = () => {
    console.log(username, password);
  };

  return (
    <div className = 'Users'>

      <span> Homework 3 </span>

      <input 
        placeholder = "Username" 
        onChange = { (e) => setUsername(e.target.value)} 
        defaultValue = 'Hello' 
      />

      <input
        placeholder = "Password"
        onChange = { (e) => setPassword(e.target.value)} 
      />

      <button onClick = { () => handleInput() }> Input </button>
      
    </div>
  );
};

export default Users;
