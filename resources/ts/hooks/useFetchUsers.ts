import { useState, } from 'react'
import type { User } from '../types/user'
import axios from 'axios'

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchUsers = () => {
    setIsLoading(true)
    axios.get<User[]>("http://localhost/api/users").
    then((res)=>{
      setUsers(res.data)
    }).
    catch(() => alert('Error') ).
    finally(() => setIsLoading(false) )
  }

  return { users, fetchUsers, isLoading, }
};