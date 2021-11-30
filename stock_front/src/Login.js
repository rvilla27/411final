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
    <div className="LoginPage">
      <div>
        <p className="LoginText">Login</p>
        <input
          className="LoginInput"
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          className="LoginInput"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <button className="LoginButton" name={"Home"} onClick={checkLogin}>
          Login
        </button>
        <button
          className="LoginButton"
          name={"CreateAccount"}
          onClick={props.change_page}
        >
          Create New Account
        </button>
        <button
          className="LoginButton"
          name={"Home"}
          onClick={props.change_page}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Login;
