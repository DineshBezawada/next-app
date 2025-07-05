"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

interface ErrorType {
  error: Error;
  reset :()=>void
}
const Error = ({ error,reset}: ErrorType) => {
    const router = useRouter();
    const reload = () =>{
        startTransition(()=>{
            router.refresh();
            reset();
        })
    }
  return(
  <>
  <h2>{error?.message}</h2>
  <button onClick={reload}>Try Again</button>
  </>
  )
};
export default Error;
