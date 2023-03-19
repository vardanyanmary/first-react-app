import { useState, useEffect, SetStateAction } from "react";
import Button from "../../Components/Button/Button";
import { USERS } from "../../Components/constants/localStorage";
import Input from "../../Components/Input/Input";
import "./Login.scss";

interface UserPas {
  username: string;
  password: string;
}

const Login = () => {
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
      alert(JSON.stringify(formData, null, 2))
      localStorage.setItem(USERS, JSON.stringify(formData));
    }
  };

  useEffect(() => {
    // type NewType = SetStateAction<UserPas> | null;

    const storedData = JSON?.parse(
      localStorage.getItem(USERS) || ""
    ) as UserPas;
    if (storedData) {
      setRemembered(true);
      setFormData(storedData);
      setFormData({
        username: "",
        password: "",
      });
    }
  }, []);

  return (
    <div className="userLogin">

      <form onSubmit={handleSubmit}>

        <Input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={formData.username}
          label="Username:"
        />

        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          label="Password:"
        />

        <Button color="primary" Buttontext="Log In" type="submit" primary />
        
      </form>
    </div>
  );
};

export default Login;
