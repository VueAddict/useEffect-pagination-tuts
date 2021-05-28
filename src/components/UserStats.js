import React from "react";
import UserAvatar from "./UserAvatar";

function UserStats({ user }) {
  return (
    <div className="user-stats">
      <div>
        <UserAvatar user={user} />
        {user.name}
      </div>
      <div className="stats">
        <div>{user.followers} Followers</div>
        <div>Following {user.following}</div>
      </div>
    </div>
  );
}

export default UserStats;
