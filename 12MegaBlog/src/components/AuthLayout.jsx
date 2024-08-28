import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function Protected( {children, authentication=true}) {
    const [loader,setLoader]=useState(true);
    const navigate=useNavigate();
    const authStatus = useSelector(state=>state.auth.status)

    useEffect(()=>{ 
        // TODO: make it more easy 
 
        if(authentication && authStatus!==authentication){
            console.log("In AuthLayout.jsx the authentication val is "+authentication+" and authStatus val is "+authStatus);
            navigate('/login')
        }
        // made changes in below line
        else if(!authentication && authStatus!==authentication ){
            console.log("In AuthLayout.jsx the authentication val is "+authentication+" and authStatus val is "+authStatus);
            navigate('/');
        }
        console.log("In AuthLayout.jsx the authentication val is "+authentication+" and authStatus val is "+authStatus);

        setLoader(false); 

    },[authStatus, navigate,authentication]);

  return loader?<h1>Loading....</h1>:<>{children}</>;
}

export default Protected;