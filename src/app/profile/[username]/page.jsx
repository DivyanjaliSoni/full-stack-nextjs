"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import axios from 'axios'

const UserProfile = ({params}) => {
  const router = useRouter()
  const logout = async () =>{
    try {
       await axios.get("/api/users/logout")
       router.push("/login")
    } catch (error) {
      console.log(error.mesage)
    }
  }
  return (
    <>
    <div>{params.username}</div>
    <button onClick={logout}>Logout</button>
    </>
  )
}

export default UserProfile