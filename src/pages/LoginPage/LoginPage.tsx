import { AppLink } from '../../Components/UI/AppLink/AppLink'
import Button from '../../Components/UI/Button/Button'
import Input from '../../Components/UI/Input/Input'
import { useAuth } from '../../Providers/AuthProvider'
import './LoginPage.scss'


export const LoginPage = () => {
  const {
    logIn,
    changeUsername,
    changePassword,
    password,
    username
  } = useAuth()

  return (
    <>
    <div className="LoginPage">
      <Input
        type='text'
        placeholder='Enter username'
        label='Username:'
        value={username}
        onChange={changeUsername}
      />
      <Input
        type='password'
        placeholder='Enter password'
        label='Password:'
        value={password}
        onChange={changePassword}
      />

      <Button  onClick={logIn} type='primary'> Login </Button>

      <AppLink to='/createUser'>Create user</AppLink>

    </div>
    </>
  )
}