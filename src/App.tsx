import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./Components/hooks/useTheme";
import { Navbar } from "./Components/Navbar/Navbar";
import {Theme, ThemeSwitcher} from "./Components/UI/ThemeSwitcher/ThemeSwitcher";
import { useAuth }  from "./Providers/AuthProvider";
import { privateRoutes, publicRoutes } from "./routes/routes";

const App = () => {
  // const [theme, setTheme] = useState<Theme>("dark");
  const [theme, toggleTheme] = useTheme();

  const { userIsAuth } = useAuth();

  return (
    <div className={`App ${theme}`}>
    <Navbar />
    <ThemeSwitcher setTheme={toggleTheme} />
    <Routes>
      {
        (!userIsAuth ? publicRoutes : privateRoutes).map(({ element, path }) =>
          <Route path={path} element={element} key={path} />
        )
      }
    </Routes>
  </div>
  );
};

export default App;