import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login(){
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
        
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({Username, setUsername});
    }
     
    return(
        <div>
            <h2>Login</h2>
            <input type="text" value={Username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
            {" "}
            <input type="password" value={Password} onChange={(e)=>setPassword(e.target.password)} placeholder="Password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
export default Login;