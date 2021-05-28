import React from "react";
import UserAvatar from "./UserAvatar";

function Nav({ user }) {
  return (
    <div className="nav">
      <UserAvatar user={user} size="small" />
    </div>
  );
}

export default Nav;
