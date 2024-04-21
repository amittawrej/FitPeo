import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuBuilding2 } from "react-icons/lu";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
const Sidebar = () => {
  return (
    <div className="w-[5%] my-2 ">
      <div className="flex item-center">
      <IoChevronBack  size={22}/>
        <button>Back</button>
      </div> 
      <div className=" grid justify-center mt-3 gap-4 bg-blue-600 p-6 rounded-tr-2xl rounded-br-2xl">
      <IoHomeOutline size={30}  />
      <LuBuilding2 size={30}/>
      <GiSandsOfTime size={30}/>
      <MdOutlineMailOutline size={30}/>
      <IoNewspaperOutline size={30}/>
      <IoChatbubbleOutline size={30}/>
      <CiSettings size={30}/>
      <RxAvatar size={30}/>
      </div>
      
    </div>
  );
};

export default Sidebar;
