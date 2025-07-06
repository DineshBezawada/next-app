"use client"
interface Error{
  error:Error
}
const Error =({error}:Error) =>{
  console.log(error)
  return <h2>Error in Blog Component ....</h2>
}
export default Error;