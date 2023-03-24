import { api } from "../../api"
import { User } from "./types";

type CreateUserResponse = {
    username: string,
    password: string,
    id: number
}

class UserService {
    async getAllUsers() {
        try {
            const response = await api.get<User[]>('users')
            return response.data
        } catch (error) {
            console.log(error);
        }
    }

    async createUser (username:string , password:string){
        try {
            const newUser = { username, password }
            const res = await api.post<CreateUserResponse>( 'users', newUser )
            return res.data
        } catch (error) {

            console.log(error);

            if (error instanceof ReferenceError) {
                //do something
            }
            if (error instanceof TypeError) {
                //do something else
            }

            throw new Error(' unknown error ') //handle karvi mi kark verevum , aysinqn es mer gracy mi hark vereva qcum et errory 
        
        }
    }
}

const userService = new UserService() 
export default userService 