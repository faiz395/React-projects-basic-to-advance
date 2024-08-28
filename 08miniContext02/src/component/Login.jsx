import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        className="bg-black"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name=""
        id=" "
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>
        Submit
      </button>
      {/* <button type="submit" onClick={(e)=>handleLogin(e)}>Submit</button> */}
    </>
  );
}
