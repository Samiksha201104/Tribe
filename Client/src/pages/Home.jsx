import React, { useState } from 'react'
import RightSideBar from '../components/RightSideBar'
import ChatContainer from '../components/ChatContainer'
import LeftSideBar from '../components/LeftSideBar'

const Home = () => {
    const [selectedUser,setselectedUser]=useState(false)
    return (
        <div className='border w-full h-screen sm:px-[15%] sm:py-[5%] flex items-center justify-center'>
            <div className={` w-[80%] h-[90%] backdrop-blur-xl border border-white/50 rounded-2xl flex text-white`}>
                <LeftSideBar selectedUser={selectedUser} setselectedUser={setselectedUser}/>
                <ChatContainer selectedUser={selectedUser} setselectedUser={setselectedUser} />                
                <RightSideBar selectedUser={selectedUser} setselectedUser={setselectedUser} />
            </div>
        </div>
    )
}

export default Home
