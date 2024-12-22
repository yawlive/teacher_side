import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Notification from './Notification';
import logo from '../assets/images/Logontic.png';
import msg from '../assets/images/messages.png';
import profile from '../assets/images/profile.png';
import notification from '../assets/images/notification.png';
import ProfileHead from './profilehead';
import Tprofile from '../pages/teacher/tprofile';

const NavBar = () => {

  const [isClicked, setIsClicked] = useState({
    notification: false,
    ProfileHead: false,
  });

  const handleClick = (type) => {
    setIsClicked((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  return (
    <nav className="bg-dark-purple border-b border-sky-950 w-full top-0 left-0 z-10 relative">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* Logo 
            <a href="#" className="flex flex-shrink-0 items-center mr-4">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </a>*/}
          </div>
          <div className="md:ml-auto">
            <div className="flex space-x-2">
              <Link
                to="/"
                className="h-10 mt-2 mb-2 text-black bg-white hover:bg-slate-700 hover:text-white rounded-md px-3 py-2"
              >
                Home
              </Link>
              <button
                type="button"
                className="rounded-md mt-3 mb-2 px-3 py-2"
                aria-label="Messages"
              >
                <img className="h-5 w-auto" src={msg} alt="Messages" />
              </button>
              <div className="relative">
                <button
                  type="button"
                  className="rounded-md mt-2 mb-2 px-3 py-2"
                  aria-label="Notifications"
                  onClick={() => handleClick('notification')}
                >
                  <img className="h-7 w-auto" src={notification} alt="Notifications" />
                </button>
                {isClicked.notification && (
                  <div className="absolute top-10 right-0">
                    <Notification />
                  </div>
                )}
              </div>
              
              <button
                type="button"
                className="rounded-md mt-2 mb-2 px-3 py-2"
                aria-label="Profile"
                onClick={() => handleClick('ProfileHead')}
              > 
                <img className="h-7 w-auto" src={profile} alt="Profile" />
              </button>
              {isClicked.ProfileHead && (
                  <div className="absolute top-10 right-0">
                    <ProfileHead/>
                  </div>
                )}
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
