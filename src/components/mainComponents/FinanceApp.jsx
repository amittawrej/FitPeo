import React from "react";
import Avatar from "react-avatar";
import { PiDotsThreeVerticalDuotone } from "react-icons/pi";
const FinanceApp = () => {
  
  return (
    <div className="w-[32vw] h-[58vh]  mx-3 shadow-xl p-1 rounded-xl bg-white">
      <div className="flex justify-center m-3 p-4  bg-gray-200 rounded-md">
        <img
          className="h-12 w-12 "
          src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
          alt="image"
        />
      </div>
      <div className="px-4">
        <p className="flex  justify-center font-semibold ">Finance App</p>
        <h1 className="flex justify-center pb-1 text-sm text-gray-500">
          It is a long established fact that reader to sets
        </h1>
        <div className="mt-1 flex justify-between items-center pb-2 border-b-2 border-dashed border-gray-200 pr-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">
            Add User
          </button>
          <button className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-10 rounded hover:bg-blue-500 hover:text-white">
            Set Target
          </button>
          <PiDotsThreeVerticalDuotone size={40}  />
        </div>
        <div className="p-2 space-y-2 ">
          <div className="my-1">
            <p className=" font-bold text-black text-opacity-25 text-sm">Due Date</p>
            <p className="font-bold text-sm">
              25-09-2022{" "}
              <span className="font-thin text-blue-700">
                (60 days Remaining)
              </span>{" "}
            </p>
          </div>
          <div className="my-1">
            <p className=" font-bold text-black text-opacity-25 text-sm">Budget</p>
            <p className="font-bold text-sm">
              $25,000.0
              <span className="font-thin text-blue-700">
                
              </span>
            </p>
          </div>
          <div>
          <p className=" font-bold text-black text-opacity-25 text-sm">Client</p>
          <div className="flex gap-3 items-center">
          <Avatar className='cursor-pointer ' src="" size={30} round={true} />
          <p className="text-sm font-semibold">Jems Bond</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceApp;
