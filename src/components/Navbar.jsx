import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
const Navbar = () => {
  return (
    <div className=" flex justify-content items-center h-11 space-x-10 justify-between">
      <div className="flex items-center ">
        <img
          className="h-11 w-13 border border-solid bg-gray-300 px-4 rounded-r-full "
          src="https://t4.ftcdn.net/jpg/03/58/90/51/360_F_358905137_Sbd50VxIyH1IlswLHTRa5S1iQTTqIyoa.webp"
          alt="image"
        />
        <RiMenu2Line size={20} className="-ml-2 border-2  bg-white rounded-full" />
      </div>

      <div className="flex item-center border-none">
        <CiSearch className="h-6 w-6" />
        <input
          className="w-80 "
          type="text"
          placeholder="Search User,Events and more"
        />
      </div>
      <div className="flex item-center gap-4">
        <select class="block w-full">
          <option value="language"> English</option>
          <option value="language">Hindi</option>
        </select>
        <div className="flex item-center space-x-2 mr-3">
        <IoSettingsOutline className="h-7 w-7" />
        <IoMdNotificationsOutline className="h-7 w-7" />
        <Avatar className='cursor-pointer ' src="" size='30' round={true} />
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
