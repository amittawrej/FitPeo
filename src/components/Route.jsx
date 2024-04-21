import React from "react";
import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
const Route = () => {
  return (
    <div className="ml-4 my-2">
      <div>
        <div className="flex justify-between w-[90vw]">
          <div>
            <p><span className="text-black text-opacity-45">Home / Company </span>/ Activity</p>
          </div>

          <div className="flex gap-3">
            <button className="bg-blue-800 p-1 rounded-md text-white flex items-center gap-1"><BiImport/>Import</button>
            <button className="bg-pink-500 p-1 rounded-md text-white flex items-center gap-1"><BiExport/>Export</button>
            <select className="block w-full  bg-gray-100 rounded-md">
              <option value="Category"> Category</option>
              <option value="Category">Category</option>
            </select>
          </div>
        </div>
       <div className="flex justify-between w-[90vw] m-1">
       <div>
          <p className="font-bold ">Project Activity</p>
        </div>
        <div>
            <p className="underline ">Add New Project</p>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Route;
