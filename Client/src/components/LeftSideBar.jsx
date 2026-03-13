import React from 'react'
import assets, { userDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const LeftSideBar = ({selectedUser,setselectedUser}) => {
    const navigate = useNavigate();
    return (
        <div className={`bg-white/5 p-5 transition-all ease-in duration-500 ${selectedUser ? 'w-[27%]' : 'w-[50%]'}`}>
            <div className='HEAD flex relative  items-center'>
                <img src={assets.logo_icon} className='w-8 h-8 mr-2' alt="" />
                <h1 className='text-2xl'>Tribe</h1>
                <div className='group absolute right-2 '>
                    <img src={assets.menu_icon} className='w-5 h-5  ' alt="" />
                    <div className="menu absolute right-1 w-30 hidden group-hover:block">
                        <div className=' bg-gray-800 p-4 rounded-lg'>
                            <p className='cursor-pointer' onClick={() => { navigate('/Profile') }}>edit profile</p>
                            <hr className='my-1 ' />
                            <p className='cursor-pointer' onClick={() => { navigate('/Logout') }}>Logout</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="SEARCH my-3 flex items-center  bg-white/40 h-10 rounded-4xl">
                <img src={assets.search_icon} className='w-4 ml-3' alt="" />
                <input type="text" placeholder='Search' className='outline-0 placeholder-white/60 flex-1 ml-2' />
            </div>

            <div className="CONTACTS">
                {userDummyData.map((user, idx) => (
                    <div  key={idx} onClick={()=>{selectedUser==user?setselectedUser(false):setselectedUser(user)}} className='flex my-5 relative items-center cursor-pointer '>
                        <img src={user?.profilePic || assets.avatar_icon}
                            className='w-10 h-10 rounded-full mr-2' alt="" />
                        <div className='flex flex-col leading-5'>
                            <p className=''>{user.fullName}</p>
                            {idx<3?<p className='text-green-400'>Online</p>:<p className='text-gray-400'>Offline</p>}
                        </div>
                        {idx>2?
                        <p className="NOTIFICATION rounded-full bg-[#927BFC] absolute right-1 w-6 text-center ">{idx}                            
                        </p>:null}
                        
                    </div>)
                )}

            </div>


        </div>
    )
}

export default LeftSideBar
