import React from "react";
import Avatar from "react-avatar";
import { FcPlanner } from "react-icons/fc";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcFile } from "react-icons/fc";
import { SiReacthookform } from "react-icons/si";
import { FcHeatMap } from "react-icons/fc";
import { GoFileDirectory } from "react-icons/go";
import { FaFilePdf } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
const Container = () => {
  const today = new Date(); // Get current date
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = today.toLocaleDateString(undefined, options);
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-[59vw] h-[99vh]  shadow-xl p-1 rounded-xl mb-2 bg-white">
      <div className="flex items-center justify-between border-b-2 border-gray-200 ">
        <div className="p-2 flex items-center gap-2">
          <FcPlanner size={32} />
          <p className="font-medium">{formattedDate}</p>
          <p className="font-medium">- Activity</p>
        </div>

        <div className="space-x-4 pr-3">
          <button className="bg-blue-700 p-1 rounded-md font-medium text-white">
            Today
          </button>
          <button className="border border-gray-300 p-1 rounded-md font-medium  text-gray-300">
            Month
          </button>
          <button className="border border-gray-300 p-1 rounded-md  text-gray-300 font-medium">
            Year
          </button>
          <button className="border border-gray-300 p-1 rounded-md  text-gray-300 font-medium">
            {currentYear}
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="m-4 bg-gray-200 flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full">
          <SiReacthookform size={25} />
        </div>
        <div>
          <p className="font-medium text-gray-800">
            Added two new modules in Finance Mobile Application development
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-500">
            Updated at 10:45 AM by{" "}
            <Avatar className="cursor-pointer" src="" size={18} round={true} />
            <p className="font-medium text-black">Jennifer</p>
          </p>
        </div>
      </div>
      <div className="mx-16">
        <div className="flex items-center justify-between py-2 px-3 rounded-md  border border-dashed">
          <MdCheckBoxOutlineBlank
            className="text-gray-400 opacity-50"
            size={30}
          />

          <p>Payment Module</p>
          <button className="bg-green-600 p-2 rounded-md text-white font-medium">
            Finance
          </button>
          <div className="ml-12">
            <Avatar
              className="cursor-pointer -ml-3"
              src=""
              size={30}
              round={true}
            />
            <Avatar
              className="cursor-pointer -ml-3"
              src=""
              size={30}
              round={true}
            />
            <Avatar
              className="cursor-pointer -ml-3"
              src=""
              size={30}
              round={true}
            />
          </div>
          <p className="p-2 bg-pink-200 rounded-md font-medium text-pink-500">
            Inprogress
          </p>
          <p className="p-2 bg-gray-200 rounded-md font-medium text-gray-600 ">
            25-09-2022
          </p>
          <BsThreeDotsVertical size={28} />
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-md border border-dashed">
          <MdCheckBoxOutlineBlank
            className="text-gray-400 opacity-50"
            size={30}
          />

          <p className="px-5">User Profile </p>
          <button className="bg-green-600 p-2 rounded-md text-white font-medium">
            Finance
          </button>
          <div className="ml-12">
            <Avatar
              className="cursor-pointer -ml-3"
              src=""
              size={30}
              round={true}
            />
            <Avatar
              className="cursor-pointer -ml-3"
              src=""
              size={30}
              round={true}
            />
            <Avatar
              className="cursor-pointer -ml-3"
              src=""
              size={30}
              round={true}
            />
          </div>
          <p className="p-2 bg-pink-200 rounded-md font-medium text-pink-500">
            Inprogress
          </p>
          <p className="p-2 bg-gray-200 rounded-md font-medium text-gray-600 ">
            25-09-2022
          </p>
          <BsThreeDotsVertical size={28} />
        </div>
      </div>
      <div className="grid">
        <div className="flex items-center">
          <div className="m-4 bg-gray-200 flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full">
            <SiReacthookform size={25} />
          </div>
          <div>
            <p className="font-medium text-gray-800">3 Image files Uploaded</p>
            <p className="flex items-center gap-2 text-sm text-gray-500">
              Updated at 12:45 AM by
              <Avatar
                className="cursor-pointer"
                src=""
                size={18}
                round={true}
              />
              <p className="font-medium text-black">Alexandra</p>
            </p>
          </div>
        </div>
        <div className="flex mx-16 space-x-16">
          <img
            className="h-20 w-42 rounded-md"
            src="https://media.istockphoto.com/id/1251196202/photo/smartphone-surrounded-by-flowers-on-pastel-pink-background.jpg?s=612x612&w=0&k=20&c=0kLLq9oVtiXnQlVdtswVzX9Sl7_1ETOEBCxVVO5kKAU="
            alt="image"
          />
          <img
            className="h-20 w-42 rounded-md"
            src="https://media.istockphoto.com/id/1204636489/photo/spring-composition-with-white-daisies-falling-from-a-bucket.jpg?s=612x612&w=0&k=20&c=aIfzkSRHa2hRkkz32QEDxJ1pwp8douvUO-vsVd2iGt4="
            alt="image"
          />
          <img
            className="h-20 w-42 rounded-md"
            src="https://t4.ftcdn.net/jpg/05/79/67/83/360_F_579678392_4Bh9vMB1DP4QXNzE0E2pUHJYLOYpBgwO.jpg"
            alt="image"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="m-4 bg-gray-200 flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full">
          <TbWorldWww size={25} className="opacity-35" />
        </div>
        <div>
          <p className="font-medium text-gray-800">
            Pull Request URL <span className="text-blue-700">#831</span> and{" "}
            <span className="text-blue-700">#845 </span> merged in Development
            Branch
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-500">
            Updated at 04:24PM by
            <Avatar className="cursor-pointer" src="" size={18} round={true} />
            <p className="font-medium text-black">Baddsha</p>
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <div className="m-4 bg-gray-200 flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full">
            <GoFileDirectory className="opacity-35" size={25} />
          </div>
          <div>
            <p className="font-medium text-gray-800">
              3 Project Files Uploaded
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-500">
              Updated at 06:46 PM by{" "}
              <Avatar
                className="cursor-pointer"
                src=""
                size={18}
                round={true}
              />
              <p className="font-medium text-black">Stephanie</p>
            </p>
          </div>
        </div>
        <div className="ml-20 flex gap-2 border border-dashed p-2 rounded-lg">
          <div className=" flex gap-3 items-center">
          <div className="border bg-pink-300 rounded-full p-3">
          <FaFilePdf size={25} />
          </div>
          <div className="grid">
            <p className="text-blue-500 font-medium">User Invoice</p>
            <p className="text-gray-500 font-medium">12MB</p>
          </div>
          </div>
          <div className="flex gap-3 items-center">
          <div className="border bg-pink-300 rounded-full p-3">
          <FcFile  size={25} />
          </div>
          <div className="grid">
            <p className="text-blue-500 font-medium">Project Modules & Flow</p>
            <p className="text-gray-500 font-medium">1MB</p>
          </div>
          </div>
          <div className="flex gap-3 items-center">
          <div className="border bg-pink-300 rounded-full p-3">
          <FcHeatMap size={25} />
          </div>
          <div className="grid">
            <p className="text-blue-500 font-medium">User Invoice</p>
            <p className="text-gray-500 font-medium">12MB</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
