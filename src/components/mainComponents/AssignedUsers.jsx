import React from "react";
import Avatar from "react-avatar";
import Progress_bar from "../styleComponents/ProgressBar";

const UserInfo = ({ name, email, progress }) => {
  return (
    <div className="flex gap-2 items-center relative">
      <Avatar className="cursor-pointer" src="" size={30} round={true} />
      <div className="flex flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-black text-opacity-45 font-thin text-xs">{email}</p>
      </div>
     
      <Progress_bar bgcolor="orange" progress={progress} height={7} />
    </div>
  );
};

const AssignedUsers = () => {
  return (
    <div className="w-[32vw] h-[49vh] m-3 shadow-xl px-3 py-1 rounded-xl bg-white">
      <div className="px-4 py-3">
        <div>
          <p className="font-semibold">Assigned Users</p>
        </div>
        <div className="grid">
          <UserInfo name="Jems Bond" email="jemsbond@gmail.com" progress={50} />
          <UserInfo name="John Doe" email="johndoe@gmail.com" progress={75} />
          <UserInfo name="Jane Doe" email="janedoe@gmail.com" progress={30} />
          <UserInfo name="Alice Smith" email="alicesmith@gmail.com" progress={90} />
        </div>
        <button className="bg-pink-500 px-2 py-1 rounded-lg text-white  font-semibold">View All Users</button>
      </div>
    </div>
  );
};

export default AssignedUsers;
