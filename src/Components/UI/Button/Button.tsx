import "./Button.scss";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' >{
  children: React.ReactNode;
  type: 'primary' | 'secondary'
}

const Button = (props:ButtonProps) => {
    
  const {
    type, 
    children, 
    ...rest } = props;


  return ( 
    <span>
      <button className={`Button ${type}`} {...rest}>
        {children}
      </button>
    </span>
  );
};


export default Button;
