import './Users.scss';
import { useState } from 'react';
import UserService from '../../api/Services/UserService/UserService';
import { User } from '../../api/Services/UserService/types';
import Button from '../UI/Button/Button';

export const Users = ({ isHiddenUsers }: { isHiddenUsers: boolean }) => {
// const {getAllUsers,users} = useUsers()
	const [users, setUsers] = useState<User[]>()

	const handleGetAllUsers = async () => {
		try {
			const users = await UserService.getAllUsers()
			setUsers(users)
		} catch (error) {

		}
	}

	// useEffect(() => {
	// 	// console.log('mounted');

	// 	return () => {
	// 		console.log('unmounted');
	// 	};
	// }, []);

	return (
		<div>
			<Button type='secondary' onClick={handleGetAllUsers}>get all users </Button>
			{users?.map((user) => {
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



{// interface apiProps {
//   url: string;
// }

// export const Users = () => {
// 	const [users, setUsers] = useState<String[]>();
// 	useEffect(()=>{
// 		const BASE_URL = "https://jsonplaceholder.typicode.com";
// 		axios.post(BASE_URL)
// 		.then((response) => {
// 			console.log(response.data.username);
// 		})
// 		.catch(error=>console.error(error))
// 	},[]);

// 		return (
// 		<div>
// 			{setUsers ?
// 				users.map()
// 			}
// 		</div>
// 		);
// }
// export default Users;

// export const Users = ( { isHiddenUsers }: { isHiddenUsers: boolean }) => {
// 	useEffect(() => {
// 		console.log(isHiddenUsers, 'changed');

// 		return () => {
// 			console.log('unmount');
// 		};
// 	}, [isHiddenUsers]);

// 	return (
// 		<div>
// 		</div>
// 	);
// };

{
  /* {users.map((user) => {
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
})} */
}

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

{
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
}}
