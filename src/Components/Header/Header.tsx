import { FC, useState } from "react";
import "./Header.css";

interface HeaderProps {
  textsTitle: string;
}

const Header: FC <HeaderProps> = ({ textsTitle }) => {
  const [header, setHeaderValue] = useState(textsTitle);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setHeaderValue(newValue);
  };
  
  return (
    <header className="Header">
        <input 
            type="text" 
            onChange={handleChangeInput} 
            value={header} 
        //    style={{
		// 			padding: '10px',
		// 			backgroundColor: header.length < 5 ? 'red' : 'green',
		//     }}
            /> 

        <p>{header}</p>
    </header>
  );
};

export default Header;


/*
import { FC, useState } from 'react';
import './Header.css';

interface HeaderProps {
	title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
	const [headerValue, setHeaderValue] = useState(title);

	const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;

		setHeaderValue(newValue);
	};

	return (
		<header className='Header'>
			<input
				type='text'
				onChange={handleChangeInputValue}
				value={headerValue}
				// style={{
				// 	padding: '10px',
				// 	backgroundColor:  ? 'red' : 'green',
				// }}
				className={headerValue.length < 5? 'inValid': 'valid'}
			/>
			<p>{headerValue}</p>
		</header>
	);
};

export default Header; */