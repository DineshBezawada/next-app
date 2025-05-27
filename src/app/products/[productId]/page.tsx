interface productDetails {
    params:Promise<{productId :string}>
}

 const ProductDetails = async ({params}:productDetails) => {
    const paramId = (await params).productId;
return(
    <>
    <h1>Details of Product {paramId}</h1>
    </>
)
};
export default ProductDetails;