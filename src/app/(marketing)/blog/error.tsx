"use client"
interface Error{
  error:Error
}
const Error =({error}:Error) =>{
  return <h2>Error in Blog Component ....</h2>
}
export default Error;