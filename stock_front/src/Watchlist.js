import React, { useState } from "react";

function Watchlist(props) {
  // NEED TO QUERY WATCHLIST STOCKS on mount
  return (
    <div>
      <p>Watchlist</p>
      <button name={"Home"} onClick={props.change_page}>
        Back
      </button>
    </div>
  );
}

export default Watchlist;
