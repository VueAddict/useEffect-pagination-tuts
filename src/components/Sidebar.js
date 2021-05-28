import React from "react";
import UserStats from "./UserStats";

function Sidebar({ user }) {
  return (
    <div className="sidebar">
      <UserStats user={user} />
    </div>
  );
}

export default Sidebar;
