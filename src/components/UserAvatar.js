import React from "react";

function UserAvatar({ user, size }) {
  return (
    <img
      className={`user-avatar ${size || ""}`}
      src={user.avatar}
      alt="user avatar"
    />
  );
}

export default UserAvatar;
