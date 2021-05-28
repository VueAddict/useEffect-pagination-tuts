import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

function Body({ user }) {
  return (
    <div className="body">
      <Sidebar user={user} />
      <Content />
    </div>
  );
}

export default Body;
