import useAuth from "../hooks/useAuth";
import { AppLink } from "../UI/AppLink/AppLink";
import Button from "../UI/Button/Button";
import './Navbar.scss'

export const Navbar = () => {
  const { userIsAuth, logOut } = useAuth()

  return (
      <div className="Navbar">
          {userIsAuth
              ? <span className="links">
                  <AppLink to='/' >Home</AppLink>
                  <AppLink to='/todo'>Todo</AppLink>
                  <AppLink to='/login'>Login</AppLink>
              </span>
              : <span className="links">
                  <AppLink to='/login'>Login</AppLink>
              </span>
          }

          <Button type="primary" onClick={logOut}> Log Out </Button>
      </div>
  )
};

