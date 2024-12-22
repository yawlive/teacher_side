import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { user } from '../data.js';
import {useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileHead = () => {
  
         const [isClicked, setIsClicked] = useState(true);
       
         const handleClick = () => {
           setIsClicked(false); 
         };

  return (
    <>
    {isClicked && (
    <div className="nav-item absolute right-1 top-16 bg-white border-collapse shadow-md p-8 rounded-lg w-96">
        <Link to="/teacher/tprofile"  onClick={handleClick} >
        <div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
         <MdOutlineCancel
                       className="text-gray-500 hover:text-gray-700 cursor-pointer text-2xl"
                       onClick={handleClick} 
         />
      </div>
      <div className="flex gap-5 items-center mt-6">
        <img
          className="rounded-full h-24 w-24"
          src={user.profile_picture}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">{user.full_name}</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">Professor</p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> #{user.teacher_id} </p>
        </div>
      </div>
      </div>
      </Link>
      <div className="bg-slate-300 rounded-md m-2 text-dark-purple font-sans text-center mt-5 hover:bg-dark-purple hover:text-slate-200
      ">
       <button>  
          <p className='justify-self-center '> Log out</p>
              </button>
      </div>
    </div>
    
    )}</>
  );
};

export default ProfileHead;
