import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Theme, ThemeSwitcher } from "./Components/ThemeSwitcher/ThemeSwitcher";
import { AppLink } from "./Components/AppLink/AppLink";
import { USERS } from "./Components/constants/localStorage";
import { privateRoutes, publicRoutes } from "./routes/routes";
import {AppLinksProps} from "./Components/AppLink/AppLink"

const App = () => {

  const [theme, setTheme] = useState<Theme>("light");
  const userIsAuth = localStorage.getItem(USERS);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(USERS);
    navigate("/");
  };

  if (!userIsAuth) {
    navigate("/");
  }

  return (
    <div className={`App ${theme}`}>
      <ThemeSwitcher setTheme={setTheme} />

      {/* <AppLink links = {links} > {} </AppLink> */}

      {/* <AppLink to="/all">Home</AppLink>
      <AppLink to="/todo">Todo</AppLink> */}

      <Routes>
        <>
          {/* {!userIsAuth ? (
            <>
              {publicRoutes.map(({ path, name }) => {
                <AppLink to = {path}> {name} </AppLink>;
              })}
            </>
          ) : (
            <>
              {privateRoutes.map(({ path, name }) => (
                <AppLink to={path}>{name}</AppLink>
              ))}
            </>
          )} */}

          {!userIsAuth ? (
            <>
              {publicRoutes.map(({ element, path }) => (
                <Route path = {path} element = {element} key = {path} />
              ))}
            </>
          ) : (
            <>
              {privateRoutes.map(({ element, path }) => (
                <Route path = {path} element = {element} key = {path} />
              ))}
            </>
          )}
        </>
      </Routes>
    </div>
  );
};

export default App;

{
  /* <Route path="/" element={<MainPage />}/>
  <Route path="/todo" element={<ToDo />} />
  <Route path="/all" element={<AllInOne />} />
  <Route path="*" element={<NotFound />} /> */
}


