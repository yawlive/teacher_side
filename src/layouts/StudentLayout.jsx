import React from 'react';
import { Outlet } from 'react-router-dom';
import StudentNavBar from '../components/StudentNavBar';
import Sidebar from '../components/Sidebar';
import { studentSidebarConfig } from '../data.js';

const StudentLayout = () => {
  return (
    <div className=" relative flex h-screen">
      {/* Sidebar */}
      <Sidebar
        Menus={studentSidebarConfig.Menus}
        sidebarcolor={studentSidebarConfig.sidebarcolor}
        textcolor={studentSidebarConfig.textcolor}
        iconscolor={studentSidebarConfig.iconscolor}
      />

      {/* Main content area */}
      <div className="flex-1 overflow-auto relative">
        <StudentNavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
