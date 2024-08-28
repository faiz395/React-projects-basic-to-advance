import React, { useEffect } from "react";
import { useState } from "react";

export default function Github(){
    const [val,setVal] = useState({});
    useEffect(()=>{
        fetch('https://api.github.com/users/faiz395')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            // console.log(data);
            setVal(data);
        })
    },[]);

    return(
        <>
        <div>Name of user is {val['name']}</div>
        </>
    )
}