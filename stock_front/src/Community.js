import React, { useState } from "react";

function Community(props) {
  // NEED TO QUERY Community details on mount
  return (
    <div>
      <p>Community</p>
      <button name={"Home"} onClick={props.change_page}>
        Back
      </button>
    </div>
  );
}

export default Community;
