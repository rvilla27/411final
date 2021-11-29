import React, { useState } from "react";

function CreateAccount(props) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const checkCreateAccount = () => {
    // NEED QUERY TO ADD USESR TO DATABASE
  };

  return (
    <div>
      <p>Create Account</p>
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
      <button name={"Home"} onClick={checkCreateAccount}>
        Create
      </button>
      <button name={"Home"} onClick={props.change_page}>
        Back
      </button>
    </div>
  );
}

export default CreateAccount;
