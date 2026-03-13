import React, { useEffect, useRef } from 'react'
import assets, { messagesDummyData, userDummyData } from '../assets/assets'
import { formatMsgTime } from '../library/utils'

const ChatContainer = ({ selectedUser, setselectedUser }) => {
  const scrollEnd = useRef()

  useEffect(() => {
    if (scrollEnd.current) { scrollEnd.current.scrollIntoView({ behaviour: 'smooth' }) }
  }, [])
  return (
    <div className={`origin-center relative transition-all ease-in-out overflow-hidden duration-500 ${selectedUser ? 'scale-x-100 w-[46%]' : 'scale-x-0 max-w-0 opacity-0'}`}>
      {/* {console.log(selectedUser.fullName)} */}
      <div className='flex  items-center my-5 mx-3 '>
        <img className='w-13 mr-2 rounded-full' src={selectedUser.profilePic} alt="" />
        <p className='text-lg font-medium'>{selectedUser.fullName}</p>
        <img className='w-5 absolute right-2' src={assets.help_icon} alt="" />
      </div>

      <hr className='text-white/50 mb-4 ' />

      {/* ------------ chat area--------------- */}
      <div className="CHAT h-[67%] overflow-y-scroll mb-3 px-5 ">
        {messagesDummyData.map((msg, idx) =>
          <div key={idx} className={`flex items-end justify-end ${msg.senderId === "680f50e4f10f3cd28382ecf9" ? '' : 'flex-row-reverse'}`}>
            {msg.image ?
              <img className='w-[50%] rounded-2xl border border-gray-700 mb-8' src={msg.image} alt="" />
              :
              <p className='w-[60%] bg-gray-700/70 rounded-2xl px-3 py-2 mb-3 '>{msg.text}</p>
            }
            <div className='text-center text-xs'>
              <img className='w-7 rounded-full ml-2' src={msg.senderId === "680f50e4f10f3cd28382ecf9" ? assets.avatar_icon : assets.profile_martin} alt="" />
              <p className='text-gray-500'>{formatMsgTime(msg.createdAt)}</p>
            </div>
            <div ref={scrollEnd}></div>
          </div>
        )}
      </div>

      <div className="SEND absolute  right-2 left-2 bottom-3 flex flex-1 px-3 items-center ">
        <div className='flex w-[85%] rounded-4xl p-2 bg-white/40'>
          <input type="text" className='outline-0 placeholder-white/60 flex-1 ' placeholder='Send a message' />
          <input type="file" accept='image/jpeg,image/png' id='image' hidden />
          <label htmlFor="image">
            <img className='w-6 absolute right-10 md:mr-9' src={assets.gallery_icon} alt="" />
          </label>

        </div>
        <img className='absolute right-1 w-8' src={assets.send_button} alt="" />
      </div>
    </div>
  )
}

export default ChatContainer
