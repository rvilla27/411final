import React from "react";

function UserNav(props) {
  let display = (
    <div>
      <button name={"Login"} onClick={props.change_page}>
        Login
      </button>
    </div>
  );
  if (props.user != "") {
    display = (
      <div>
        <p>Current User: {props.user}</p>
        <button onClick={props.userLogout}>Logout</button>
        <button name={"Watchlist"} onClick={props.change_page}>
          My Watchlist
        </button>
        <button name={"Community"} onClick={props.change_page}>
          Community
        </button>
      </div>
    );
  }
  return display;
}

export default UserNav;
