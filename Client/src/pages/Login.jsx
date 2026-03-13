import React, { useState } from 'react'
import assets from '../assets/assets'

const Login = () => {
  const [status,setStatus]=useState('signup')
  function changestatus(){
    if(status==='signup')
      setStatus('login')
    else
      setStatus('signup')
  }
  return (
    <div className='w-full h-screen'>
      <div className='backdrop-blur-2xl flex items-center justify-center w-full h-full'>
        <div className='w-[60%] h-[80%] flex'>
          {/* left */}
          <div className=' flex items-center justify-center  h-full w-[50%] '>
            <div className='w-[60%] h-auto flex flex-col  p-5 text-white items-center justify-center '>
              <img src={assets.logo_icon} className='w-30' alt="" />
              <h1 className='text-5xl mt-4'>Tribe</h1>
            </div>
          </div>
          {/* right */}
          <div className=' flex items-center justify-center  h-full w-[50%] '>
            <div className='w-[80%] h-auto flex flex-col  p-5 text-white  '>
              {status==='signup'?<h1 className='text-2xl mb-4'>Sign Up</h1>:<h1 className='text-2xl mb-4'>Log in</h1>}
              {status==='signup'?<input className='border-1 border-white/50 placeholder-white/50 px-3 py-1 outline-0 mb-6 w-full rounded-lg' type="text" placeholder='Full Name' />:null}       
              
              <input className='border-1 border-white/50 placeholder-white/50 px-3 py-1 outline-0 mb-6 w-full rounded-lg' type="email" placeholder='Email'/>
              <input className='border-1 border-white/50 placeholder-white/50 px-3 py-1 outline-0 mb-6 w-full rounded-lg' type="password" placeholder='Password'/> 
              {status==='signup'?<button className='bg-[#8E53FF] w-full py-2 rounded-lg mb-4'>Create Account</button>:<button className='bg-[#8E53FF] w-full py-2 rounded-lg mb-4'>Log In</button>}             
              
              {status==='signup'?<p>Already have an account? <span onClick={()=>changestatus()} className='text-blue-500 underline cursor-pointer'>Log in</span></p>:<p>Don't have an account? <span onClick={()=>changestatus()} className='text-blue-500 underline cursor-pointer'>Click here</span></p>}
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Login
