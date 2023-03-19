import useAuth from '../../Components/hooks/useAuth'
import Button from '../../Components/UI/Button/Button'
import Input from '../../Components/UI/Input/Input'
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
    <div className="LoginPage">
      <Input
        type = 'text'
        placeholder = 'Enter username'
        label = 'Username:'
        value = {username}
        onChange = {changeUsername}
      />
      <Input
        type = 'password'
        placeholder = 'Enter password'
        label = 'Password:'
        value = {password}
        onChange = {changePassword}
      />

      <Button onClick = {logIn} type = 'primary'> Log In </Button>
      
    </div>
  )
}