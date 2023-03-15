import { useState, useEffect } from "react";
import "./MainPage.scss";

interface UserPas {
  username: string;
  password: string;
}

const MainPage = () => {
  const SECRET_KEY = "SECRET_KEY";
  const [remembered, setRemembered] = useState(false);
  const [formData, setFormData] = useState<UserPas>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (remembered) {
      localStorage.setItem(SECRET_KEY, JSON.stringify(formData));
    } 
  };

  useEffect(() => {
    const storedData = localStorage.getItem(SECRET_KEY);
    if (storedData) {
      setRemembered(true);
    //   setFormData(storedData);
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
            onChange={handleChange}
            name="username"
            value={formData.username}
            />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
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