import { Metadata } from "next";


export const metadata:Metadata ={
  title:{
    default:'Blog Fallback',
    template:'%s | nextJs',
    absolute:'Blog'
  }
}

const page = () => {
  return (
    <h1>Blog</h1>
  )
}

export default page
