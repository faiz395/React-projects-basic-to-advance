import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user}=useContext(UserContext);
    
        if(user){
            return(
                <div>Welcome {user.Username}</div>
            )

        }else{
            return(
                <div>Please Login</div>
            )
        }
}
export default Profile;