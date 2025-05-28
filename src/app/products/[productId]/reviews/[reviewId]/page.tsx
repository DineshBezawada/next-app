import { notFound } from "next/navigation";

interface reviewDetails {
    params:Promise<{productId :string, reviewId:string}>
}

const page = async  ({params}:reviewDetails) => {

    const {productId,reviewId} = await params;
    if(parseInt(reviewId) > 1000) {
      notFound();
    }

  return (
    <>
      <h1>Review {reviewId} for Product {productId}</h1>
    </>
  )
}

export default page;
