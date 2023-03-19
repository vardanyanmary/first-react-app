import "./Button.scss";
import PropTypes from 'prop-types';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Buttontext: string;
  primary?:boolean;
  secondary?:boolean
}

const Button = (props:ButtonProps) => {
    
  const {primary, secondary, Buttontext, ...buttonProps } = props;
  
  let style = {}

  if (primary) {
    style = {
      backgroundColor: 'var(--primary-button-color)',
      color: 'var(--secondary-button-color)',
      border: '3px solid var(--secondary-button-color)',
      padding: '10px 20px',
      borderRadius: '12px',
      cursor: 'pointer',
    };
  } else if (secondary) {
    style = {
      backgroundColor: 'var(--inverted-primary-button-color)',
      color: 'var(--inverted-secondary-button-color)',
      border: '2px solid var(--inverted-secondary-button-color)',
      padding: '10px 20px',
      borderRadius: '12px',
      cursor: 'pointer',
    };
  }

  return ( 
    <span>
      <button style={style} className="Button" {...buttonProps}>
        {Buttontext}
      </button>
    </span>
  );
};


export default Button;
