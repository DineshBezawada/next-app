import { Metadata } from "next";


export const metadata:Metadata ={
  title:{
    default:'Blog Fallback',
    template:'%s | nextJs',
    absolute:'Blog'
  }
}

function getRandomInt(count:number){
 return Math.floor(Math.random() * count)
}

const page = async () => {
  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('Delay');
    },2000)
  });
  const random = getRandomInt(2);
  if(random === 1){
    throw new Error ("Error Loading Blog..")
  }
  return (
    <h1>Blog</h1>
  )
}

export default page
