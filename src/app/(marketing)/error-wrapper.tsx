'use client'

import { useState } from "react";

   
   const ErrorSimulator = ({message="An Error Occured"}:{message:string}) => {
    const [error,setError] = useState(false);

    if(error){
        throw new Error(message);
    }

     return (
       <>
        <h2>Simulate Error</h2>
        <button onClick={()=>setError(true)}>Click to Generate Error</button>
       </>
     )
   }
   
   const ErrorWrapper = ({children}:any) =>{
     return(
        <>
            <ErrorSimulator message="Simulated Error in Root Layout" />
        {children}
        </>
     )
   }
   export default ErrorWrapper;