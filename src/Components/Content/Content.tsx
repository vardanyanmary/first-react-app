import React, { FC, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { Users } from "../Users/Users";
import "./Content.scss";

export interface ContentProps {
  content: string;
}

const Content: FC<ContentProps> = ({ content }) => {
//   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     console.log("success");
//   };

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     // e.preventDefault();
  //     console.log("success");
  //   };

  const [value, setValue] = useState("");
//   const ref = useRef<HTMLInputElement>(null);

  const [isHiddenUsers, setHiddenUsers] = useState(false);

//   const enterMouse = () => {
//     console.log(" Hi ) ");
//   };

//   const leaveMouse = () => {
	//     console.log(" Byee ( ");
	//   };
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	
	//   const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		//     setValue((prevState) => {
			//       return `blur ${prevState}`;
			//     });
			//   };
		
  return (
    <>
      <main className="Content">
        <p className="ContentP"> {content} </p>

        <form onSubmit={handleSubmit}>
       
            <Input
              type="text"
              name="username"
              onChange={handleChange}
            //   onBlur={handleBlur}
              value={value}
			  label="Username:"
			  className="ContentInputs"
            />

          <Input 		  	
			// ref={ref} 
		  	type="ref" 
		  	name="ref" 
		  	label="Ref:"
			className="ContentInputs" 
		  />
          {/* <p>{value}</p> */}
            <Input 
				type="password" 
				name="password" 
				label="Password:"
				className="ContentInputs"
			/>

          <Button type="primary" > Login </Button>
          {/* <button type="reset"> Reset </button> */}
          {/* <button type="button"> Button </button> */}
          {/* <Button  type='secondary'  onClick={() => setHiddenUsers((prev) => !prev)} > Hide users </Button> */}
        </form>
        {
			<Users isHiddenUsers = {isHiddenUsers}  />
			// isHiddenUsers = {isHiddenUsers} 
	  
		} 
      </main>
    </>
  );
};
export default Content;

/*
import { FC, useRef, useState } from 'react';
import { Users } from '../Users/Users';
import './Content.css';

interface ContentProps {
	content: string;
}

// const fruits = () => ['', () => 'state'];

// const [fruits, setFruits] = fruits();

const Content: FC<ContentProps> = ({ content }) => {
	const [value, setValue] = useState('');
	const ref = useRef<HTMLInputElement>(null);
	const [isHiddenUsers, setHiddenUsers] = useState(false);
	// const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
	// 	e.preventDefault();
	// 	console.log('login');
	// };

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		setValue((prevState) => {
			return `blur ${prevState}`;
		});
	};

	return (
		<main className='Content'>
			<p>{content}</p>
			<form onSubmit={handleSubmit}>
				<label>
					Username
					<input
						type='text'
						name='username'
						onChange={handleChange}
						onBlur={handleBlur}
						// defaultValue='default value'
						value={value}
					/>
				</label>
				<label>
					ref
					<input
						ref={ref}
						type='ref'
						name='ref'
						// onChange={(e)=> ref.current = e.target.value}
					/>
				</label>
				<p>{value}</p>
				{/* <p>{ref.current}</p> 
				<label>
					Password
					<input type='password' name='password' />
				</label>
				<button type='submit'>submit button</button>
				<button
					type='reset'
					// onClick={handleClick}
				>
					reset button
				</button>
				<button type='button' onClick={() => setHiddenUsers((prev) => !prev)}>
					hide users
				</button>
			</form>
			{<Users isHiddenUsers={isHiddenUsers} />}
		</main>
	);
};

export default Content;
*/
