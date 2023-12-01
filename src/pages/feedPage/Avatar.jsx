import React from "react";

function Avatar({ imageName }) {
  const avatarStyle = {
    width: "161px", // Set your desired width
    height: "154px", // Set your desired height
    borderRadius: "50%",
  };

  return (
    <div className="my-5 d-flex justify-content-center">
      <img src={imageName} style={avatarStyle} alt="Avatar" />
    </div>
  );
}

export default Avatar;
