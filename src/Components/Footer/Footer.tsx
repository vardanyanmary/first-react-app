import { FC } from "react";
import "./Footer.css";

interface Footer {
  footer: string;
}

const Footer: FC <Footer> = ({ footer }) => {
  return (
    <footer className="Footer">
        <span>
            {footer}
        </span>
    </footer>
  );
};

export default Footer;
