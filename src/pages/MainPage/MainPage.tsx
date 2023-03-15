import { useState, useEffect } from "react";
import axios from "axios";

const MainPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedIn = localStorage.getItem('user');
    if (loggedIn) {
      const foundUser = JSON.parse(loggedIn);
      setUser(foundUser);
    }
  }, []);


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const user = { username, password };
    const response = await axios.post( "http://blogservice.herokuapp.com/api/login", user );
    setUser(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));

    if (user) {
      return (<p>{user.username} is loggged in </p>);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            value={username}
            placeholder="enter a username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              value={password}
              placeholder="enter a password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default MainPage;




// {const userName = document.getElementById("userName");
// const password = document.getElementById("password");

// let obj: User = {
//   userName: "",
//   password: "",
// };

// const changeObjectValues = (e: Event): void => {
//   const target = e.target as Element;
//   obj = { ...obj, [target.id]: (target as unknown as { value: string }).value };
//   console.log(`${JSON.stringify(obj)}`);
// };

// userName?.addEventListener("change", changeObjectValues);
// password?.addEventListener("change", changeObjectValues);

// const submit = document.getElementById("submit");
// const stringify = JSON.stringify(obj);

// const userPas = async (obj: User): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//       if (obj) {
//         resolve(JSON.stringify(obj));
//       } else {
//         reject(Error("It doesn't work!"));
//       }
//     });

//   try {
//     return JSON.stringify(obj);
//   } catch {
//     throw new Error('oops !!')
//     // return "It doesn't work!";
//   }

//   // return ''
// };

// const clickToSubmit = async () => {
//   try {
//     const res = await userPas(obj);
//     const parsed = JSON.parse(res) as typeof obj;
//     console.log(parsed);
//   } catch (error) {
//     console.log(error, "error");
//   }
// };

// submit?.addEventListener("click", clickToSubmit);}
