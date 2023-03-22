import { useState, useEffect } from 'react';
import { User } from '../../api/Services/UserService/types';
import userService from '../../api/Services/UserService/UserService';
import { api } from '../../api/api';

export const useUsers = () => {
    
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await api.get('users');
      setUsers(response.data);
    };
    getUsers();
  }, []);

  const createUser = async (name: string, email: string) => {
    const response = await userService.createUser(name, email);
    setUsers([...users, response.data]);
  };

  return { users, createUser };
};