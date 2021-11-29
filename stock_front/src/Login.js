import React, { useState } from "react";

function Login(props) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const checkLogin = () => {
    // NEED QUERY TO CHECK USERNAME and PASSWORD
    if (username.length > 0) {
      props.userLogin(username);
    }
  };

  return (
    <div>
      <p>Login</p>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button name={"Home"} onClick={checkLogin}>
        Login
      </button>
      <button name={"CreateAccount"} onClick={props.change_page}>
        Create New Account
      </button>
      <button name={"Home"} onClick={props.change_page}>
        Back
      </button>
    </div>
  );
}

export default Login;
