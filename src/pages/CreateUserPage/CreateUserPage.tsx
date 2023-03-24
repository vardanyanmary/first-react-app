import { useRegistration } from '../../Components/hooks/useRegistration'
import Button from '../../Components/UI/Button/Button'
import Input from '../../Components/UI/Input/Input'
import './CreateUserPage.scss'


export const CreateUserPage = () => {
  const {
    createNewUser,
    handleChangePassword,
    handleChangeUsername,
    password,
    username  
} = useRegistration()

  return (
    <>
    <div className="CreateUserPage">
      <Input
        type='text'
        placeholder='Enter username'
        label='Username:'
        value={username}
        onChange={handleChangeUsername}
      />
      <Input
        type='password'
        placeholder='Enter password'
        label='Password:'
        value={password}
        onChange={handleChangePassword}
      />

      <Button  
        onClick={createNewUser} 
        type='secondary'
      > Create User </Button>

    </div>
    </>
  )
}