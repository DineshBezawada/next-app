import { Metadata } from "next";

interface productDetails {
    params:Promise<{productId :string}>
}
 export const generateMetadata = async ({params}:productDetails):Promise<Metadata> =>{
  const paramId = (await params).productId;
  const title = await new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(`iPhone ${paramId}`)
    },100)
  }); 
  return {
    title:`Product - ${title}`
  }
 };

 const ProductDetails = async ({params}:productDetails) => {
    const paramId = (await params).productId;
return(
    <>
    <h1>Details of Product {paramId}</h1>
    </>
)
};
export default ProductDetails;