import { Metadata } from "next";

export const metadata:Metadata={
    title:{
        default:'Home',
        template:'Home'
    }
}
export default function Home() {
  return (
    <>
    <h1>Welcome Home!</h1>

    </>
  );
}
