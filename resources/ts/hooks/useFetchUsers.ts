import { useState, } from 'react'
import type { User } from '../types/user'
import axios from 'axios'

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const fetchUsers = () => {
    axios.get<User[]>("http://localhost/api/users").then((res)=>{
      // console.log(res.data)
      setUsers(res.data)
    })
  }

  return { users, fetchUsers, }
};