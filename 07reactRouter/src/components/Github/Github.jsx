import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect } from "react";      

function GitHub(){
    const data = useLoaderData();
    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch('https:api.github.com/users/faiz395')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data)
    //         console.log(data);
    //     })
    // },[])
return(
    <>
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="" />
    </div>
    </>
)
}

export default GitHub;

export const githubInfoLoader = async ()=>{
   const response= await fetch('https:api.github.com/users/faiz395')
   return response.json();
}