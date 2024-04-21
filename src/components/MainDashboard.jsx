import React from "react";
import Sidebar from "./Sidebar";
import Route from "./Route";
import ProjectActivity from "./ProjectActivity";

const MainDashboard = () => {
  return (
    <div className="flex  bg-gray-200">
      <Sidebar />
      <div>
        <Route />
        <ProjectActivity />
      </div>
    </div>
  );
};

export default MainDashboard;
