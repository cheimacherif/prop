import React from "react";

const Myinfo = (props) => {
  return (
    <div>
      {props.fullName}

      {props.age}

      {props.bio}

      {props.profession}
    </div>
  );
};
export default Myinfo;