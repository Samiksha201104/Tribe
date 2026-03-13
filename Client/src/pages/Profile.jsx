import React, { useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [selectedImg,setSelectedImg]=useState(null)
  const [name,setName]=useState("martin")
  const [bio,setBio]=useState("Hey,im using Tribe")
  const navigate=useNavigate();
  return (
    <div className='w-full h-screen bg-contain text-white flex items-center justify-center'>
      <div className='w-[40%] h-auto p-5 border border-white/50 backdrop-blur-xl rounded-lg'>
        <h1 className='text-lg mb-3'>Profile Details</h1>
        <div className='flex'>
          <div className='LEFT w-[50%]' >
            <input type="file" onChange={(e)=>setSelectedImg(e.target.files[0])} accept='image/jpeg,image/png' id='upload' hidden />
            <label htmlFor="upload" className='flex items-center'>
              <img src={selectedImg?URL.createObjectURL(selectedImg): assets.avatar_icon} className='w-10 mr-4 cursor-pointer rounded-full' alt="" />
              <p className='cursor-pointer'>Upload profile image</p>
            </label>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}  className='outline-0 border rounded-lg mt-4 p-2 placeholder-white/60 border-white/50' placeholder='name' />
            <textarea name="" id="bio" placeholder='write your bio' className='border border-white/50 block mt-5 w-66 placeholder-white/60 p-1 h-30 rounded-lg' rows={4} onChange={(e)=>{setBio(e.target.value)}} value={bio}></textarea>
            <button onClick={()=>{navigate('/')}} className='bg-[#9557CD] mt-4 rounded-lg w-66 p-2 cursor-pointer'>Save</button>

          </div>
          <div className='RIGHT w-[50%] flex items-center justify-center '>
            <img src={assets.logo_icon} className='w-50' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
