import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { ThemeSwitcher } from "./Components/UI/ThemeSwitcher/ThemeSwitcher";
import { useAuth } from "./Providers/AuthProvider";
import { useTheme } from "./Providers/ThemeProvider";
import { privateRoutes, publicRoutes } from "./routes/routes";

const App = () => {
  // const [theme, setTheme] = useState<Theme>("dark");
  // const [theme, toggleTheme] = useTheme();

  const { theme } = useTheme();

  const { userIsAuth } = useAuth();

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <ThemeSwitcher  />
      <Routes>
        {(!userIsAuth ? publicRoutes : privateRoutes).map(
          ({ element, path }) => (
            <Route path = {path} element = {element} key = {path} />
          )
        )}
      </Routes>
    </div>
  );
};

export default App;
