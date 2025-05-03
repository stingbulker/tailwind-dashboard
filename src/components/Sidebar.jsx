import {
  Gauge,
  Files,
  BarChart4,
  ThumbsUp,
  MessageSquare,
  Forward,
  LogOut,
  Moon,
} from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div id="sidebar" className=" flex w-[15%] flex-col gap-14 py-10">
      <div className="flex items-center gap-4 ml-10">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-indigo-600 text-lg text-white">
          CL
        </div>
        <h3 className="text-xl font-bold">CodingLab</h3>
      </div>
      <div
        id="sidebarContent"
        className="flex w-full flex-col pl-14 gap-14 border-r text-gray-500"
      >
        <div className="flex items-center gap-4">
          <Gauge />
          Dashboard
        </div>
        <div className="flex items-center gap-4">
          <Files />
          Content
        </div>
        <div className="flex items-center gap-4">
          <BarChart4 />
          Analytics
        </div>
        <div className="flex items-center gap-4">
          <ThumbsUp />
          Likes
        </div>
        <div className="flex items-center gap-4">
          <MessageSquare />
          Comments
        </div>
        <div className="flex items-center gap-4">
          <Forward />
          Share
        </div>
        <hr className="w-4/5" />
        <div className="flex items-center gap-4">
          <LogOut />
          Logout
        </div>
        <div className="flex items-center gap-4">
          <Moon />
          Dark Mode
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
