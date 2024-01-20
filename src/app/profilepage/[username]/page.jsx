"use client"
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import axios from 'axios'
import { IoPersonAddOutline } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineGridOn } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import Link from 'next/link';

const ProfilePage = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [userInfo , setUserInfo] = useState([])
    const username = pathname.split('page/').pop();
    const getUserFromId = async () =>{
        try {
            const userinfo = await axios.post("/api/users/getuserfromusername",{username:username})
            setUserInfo(userinfo)
            console.log(userinfo)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
            getUserFromId()
            console.log(userInfo)
    },[])
  return (
    
    <div className="block md:hidden">
        <div className="flex justify-between items-center py-4 px-2  shadow">
          <div className="flex justify-center items-center space-x-4">
            <button onClick={()=>{router.back()}}>
              <IoIosArrowBack className="text-2xl" />
            </button>
            <p className="font-semibold">{userInfo?.data?.data?.username}</p>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <HiDotsVertical className="text-2xl" />
          </div>
        </div>
        <div className="px-2 flex items-center pt-5">
          <div className="flex-shrink-0">
            <img
              src="/images/users/user-1.jpg"
              className="w-[60px] h-[60px] rounded-full object-cover ring-1 ring-pink-400 ring-offset-2"
            ></img>
          </div>
          <div className="flex w-full space-x-4 justify-center">
            <div className="text-center">
              <p className="font-semibold">1,983</p>
              <p className="text-sm text-gray-500">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">200K</p>
              <p className="text-sm text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">816</p>
              <p className="text-sm text-gray-500">Following</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  px-2 text-sm">
          <p>User Name</p>
          <p className="text-gray-400 text-sm">Video Creator</p>
          <p className="text-xs">
            Vlogger - Lifestyle/Education/Health & Beauty
          </p>
          <p className="text-xs">Business Enqueries - mail@artsene.co.uk</p>
          <p className="text-xs">United Kindom</p>
          <p className="text-xs cursor-pointer text-sky-400">
            youtube.com/@username
          </p>
        </div>
        <div className="flex px-2 my-3 justify-between">
          <button className="bg-pink-300 text-white font-semibold py-1 px-10 rounded-md">Follow</button>
          <button className="bg-gray-200 font-semibold py-1 px-10 rounded-md">Message</button>
          <button className="bg-gray-200 font-semibold py-1 px-3 rounded-md"><IoPersonAddOutline /></button>
        </div>
        <div className="px-2 flex justify-around shadow-sm py-3">
          <MdOutlineGridOn className="text-2xl w-full border-b-2 border-black" />
          <MdOutlineOndemandVideo className="text-2xl w-full" />
          <GoPerson className="text-2xl  w-full" />
        </div>
        <div>
          <div className="grid grid-cols-3">
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
            <div className="col-span-1 h-[100px] border bg-gray-100 border-black"></div>
          </div>
        </div>
      </div>
  )
}

export default ProfilePage