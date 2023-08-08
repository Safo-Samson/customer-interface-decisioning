import HorizontalBar from "./HorizontalBar";
import UserBar from "./UserBar";
import React from "react";

const CombinedBar = () => {
  return (
    <div>
      <HorizontalBar />
      <UserBar />
    </div>
  );
};

export default React.memo(CombinedBar);
