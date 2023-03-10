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
