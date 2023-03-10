import "./Users.css";
import { users } from "./Users.data";
import { useState } from "react";

const Users = () => {
  return (
    <div className="Users">
      <p> Homework 3 </p>
      <div className="usersData">
        {/* <button onClick = {createUsers}> Input </button> */}
        {users.map((user) => {
          return (
            <span>
              {user.name} -- Users data {user.id}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Users;

// {content} : {content: string}
// const [username, setUsername] = useState(content);
// const [password, setPassword] = useState("");

// const handleInput = () => {
//   console.log(username, password);
// };

{
  /* <input
      placeholder="Username"
      defaultValue="Hello"
      // onChange={(e) => setUsername(e.target.value)}
  />*/
}

{
  /*<input
      placeholder="Password"
      // onChange={(e) => setPassword(e.target.value)}
    /> */
}
