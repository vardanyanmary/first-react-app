import { useState, useEffect, SetStateAction } from "react";
import "./MainPage.scss";

interface UserPas {
  username: string;
  password: string;
}

const MainPage = () => {
  const USERS = "USERS_REGISTRATION_DETAILS";
  const [remembered, setRemembered] = useState(false);
  const [formData, setFormData] = useState<UserPas>({
    username: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (remembered) {
      localStorage.setItem(USERS, JSON.stringify(formData));
    } 
  };

  useEffect(() => {
    // type NewType = SetStateAction<UserPas> | null;
    const storedData = localStorage.getItem(USERS);
    if (storedData) {
      setRemembered(true);
      setFormData(storedData);
    }
  }, []);

  
  return (
    <div className="userLogin">
      <form onSubmit={handleSubmit}>
          <label>
          <p>Username:</p>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={formData.username}
            />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default MainPage;




//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const loggedIn = localStorage.getItem('user');
//     if (loggedIn) {
//       const foundUser = JSON.parse(loggedIn);
//       setUser(foundUser);
//     }
//   }, []);

//   const handleSubmit = async (e:any) => {
//     e.preventDefault();
//     const user = { username, password };
//     const response = await axios.post( "http://blogservice.herokuapp.com/api/login", {username,password} );
//     setUser(response.data);
//     localStorage.setItem("user", JSON.stringify(response.data));

//     if (user) {
//       return (<p>{user.username} is loggged in </p>);
//     }
//   };