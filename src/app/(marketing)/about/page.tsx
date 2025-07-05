"use client";
import { redirect, useRouter } from "next/navigation";

// export const metadata ={
//   title :'About'
// }

const page = () => {
  const router = useRouter();
  const date = new Date();
   const time = date.getHours();
   console.log(time,"time");
  const handleClick = () => {
    if (time < 10) {
      redirect("/");
    } else {
      router.push("/blog");
    }
  };
  return (
    <>
      <h1>About Page</h1>
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
};

export default page;
