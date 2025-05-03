import { AlignJustify, CircleUserRound, Search } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between p-16">
      <AlignJustify strokeWidth={3} size={30} color="black"/>
      <div className="flex w-11/12 rounded-md gap-3 border border-gray-400 p-2 text-gray-500">
        <Search />
        <input type="text" placeholder="Search Here..." />
      </div>
      <CircleUserRound size={35} color="black"/>
    </div>
  );
};

export default Navbar;
