import { FC , useState} from "react";
import "./Footer.css";

interface FooterProps {
  footer: string;
}

const Footer: FC <FooterProps> = ({ footer }) => {

  const [footerValue, setFooterValue] = useState(footer);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setFooterValue(newValue)
  }

  return (
    <footer className="Footer">
        <input 
            type = "text" 
            onChange = {handleChangeInput}
            value = {footerValue}
        />
        <p> {footerValue} </p>
    </footer>
  );
};

export default Footer;
