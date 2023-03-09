import { useState } from "react";
import "./Users.css";

const Users = ({content} : {content: string})=> {
  const [username, setUsername] = useState(content);
  const [password, setPassword] = useState("");

  const handleInput = () => {
    console.log(username, password);
  };

  return (
    <div className='Users'>

      <span> Homework 3 </span>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        defaultValue='Hello' />

      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />

      <button onClick={() => handleInput()}> Input </button>

    </div>
  );
};

export default Users;
