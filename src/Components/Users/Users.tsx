import "./Users.css";
import { users } from "./Users.data";
import { useEffect } from "react";

export const Users = ( { isHiddenUsers }: { isHiddenUsers: boolean }) => {
  useEffect(() => {
    // console.log(isHiddenUsers, "changed");
 
    return () => {
      console.log("unmount");
    };
  }, [isHiddenUsers]);


  return (
    <div className="Users">
      <p> Homework 3 </p>
      <div className="usersData">
        {/* <button onClick = {createUsers}> Input </button> */}
        {users.map((user) => {
          return (
            <span key={user.id}>
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

/*
import './Users.css';
import { users } from './users.data';
import { useEffect, useState } from 'react';

export const Users = ({ isHiddenUsers }: { isHiddenUsers: boolean }) => {
	useEffect(() => {
		console.log(isHiddenUsers, 'changed');

		return () => {
			console.log('unmount');
		};
	}, [isHiddenUsers]);

	return (
		<div>
			{users.map((user) => {
				return (
					<p
						onClick={(e) => {
							console.log(e.currentTarget.getAttribute('data-secondattribute'));
						}}
						key={user.id}
						data-testid={user.id}
						data-secondattribute={user.phone}
					>
						{user.name}
					</p>
				);
			})}
		</div>
	);
};

// useRef, useEffect
// attributes, custom attributes
*/