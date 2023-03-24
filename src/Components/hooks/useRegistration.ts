import { useState} from 'react'
import userService from '../../api/Services/UserService/UserService';

export function useRegistration() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const createNewUser = async () => {
        try {
            const response  = await userService.createUser(username, password)
            return response
        } catch (error) { }  
    }

    return {
        username,
        password,
        handleChangeUsername,
        handleChangePassword,
        createNewUser
    }
}