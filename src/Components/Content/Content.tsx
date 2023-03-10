import { FC } from "react";
import Users from "../Users/Users";
import "./Content.css";

export interface ContentProps {
  content: string;
}

const Content: FC<ContentProps> = ({ content }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("success");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    console.log("success");
  };

  // const enterMouse = () => {
  //     console.log(' Hi ) ');
  // };

  // const leaveMouse = () => {
  //     console.log(' Byee ( ');
  // };

  return (
    <>
      <main className="Content">
        <p> {content} </p>

        <form onSubmit={handleSubmit}>
          <label>
            Username :
            <input type="text" name="username" />
          </label>

          <label>
            Password :
            <input type="password" name="password" />
          </label>

          <button
            type="submit" // onClick = {handleClick}
          > Login </button>

          <button type="reset"> Reset </button>

          <button type="button"> Button </button>
        </form>
      </main> 
    </>
  );
};
export default Content;
