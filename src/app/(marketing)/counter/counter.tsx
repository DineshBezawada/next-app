"use client"
import { useState } from "react";
 
export const Counter = () =>{

    const [count,setCount] = useState(0)
return(
    <>
    <p>Count: {count}</p>
    <button onClick={()=>setCount(prev => prev+1)}>Increment</button>
    </>
)
};
