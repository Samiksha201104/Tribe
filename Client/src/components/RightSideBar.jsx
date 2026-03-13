import React from 'react'
import { useNavigate } from 'react-router-dom'
import assets, { imagesDummyData } from '../assets/assets';

const RightSideBar = ({ selectedUser, setselectedUser }) => {
  const navigate = useNavigate();
  return (
    <div className={`MAIN bg-white/5 p-5 relative transition-all ease-in duration-300 ${selectedUser ? 'w-[27%]' : 'w-[50%]'}`}>
      <div className={`${selectedUser ? 'hidden' : 'flex h-[80%] flex-col justify-center items-center'}`}>
        <img className='w-15' src={assets.logo_icon} alt="" />
        <p>Chat Anytime,Anywhere</p>
      </div>
      <div className={`PROFILE origin-top transition-all duration-500 ease-in-out overflow-hidden ${selectedUser ? 'scale-y-100 opacity-100 max-h-[93%]' : 'scale-y-0 opacity-0 max-h-0'
        }`}> 
        <div className=' pt-6 flex flex-col items-center'>
          <img src={selectedUser.profilePic} className='w-[60%] rounded-full' alt="" />
          <p className='text-xl font-medium'>{selectedUser.fullName}</p>
          <p className='text-center leading-5 text-white/50'>{selectedUser.bio}</p>
        </div>

        <hr className='text-white/50 mt-3' />

        <div className="MEDIA mt-2   ">
          <p>Media</p>
          <div className='mt-1 h-[195px] grid grid-cols-2  overflow-y-scroll gap-4'>
            {imagesDummyData.map((img,idx)=>
              <div key={idx} className='cursor-pointer' onClick={()=>window.open(img)}>
                <img src={img} alt="" className=' w-full mb-2 h-full rounded-xl ' />
              </div>
            )}
          </div>
        </div>
      </div>

      <button onClick={() => navigate('/Logout')} className='bg-[#9557CD]  cursor-pointer absolute bottom-3 p-2 rounded-2xl left-3 right-3 overflow-hidden'>Logout</button>

    </div>

  )
}

export default RightSideBar
