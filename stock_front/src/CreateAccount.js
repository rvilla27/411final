import React, { useState } from "react";

function CreateAccount(props) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const checkCreateAccount = () => {
    // NEED QUERY TO ADD USESR TO DATABASE
  };

  return (
    <div className="LoginPage">
      <div>
        <p className="LoginText">Create Account</p>
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
        <button
          className="LoginButton"
          name={"Home"}
          onClick={checkCreateAccount}
        >
          Create
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

export default CreateAccount;
