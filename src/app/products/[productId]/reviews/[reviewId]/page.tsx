
interface reviewDetails {
    params:Promise<{productId :string, reviewId:string}>
}

const page = async  ({params}:reviewDetails) => {

    const {productId,reviewId} = await params;

  return (
    <>
      <h1>Review {reviewId} for Product {productId}</h1>
    </>
  )
}

export default page;
