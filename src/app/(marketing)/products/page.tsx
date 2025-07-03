import Link from "next/link"

const page = () => {
  return (
    <>
      <h1>Products page</h1>

      <ul>
        <li><Link href={`/products/1`}> <h3>Product 1</h3></Link></li>
        <li><Link href={`/products/2`}> <h3>Product 2</h3></Link></li>
        <li><Link href={`/products/3`}> <h3>Product 3</h3></Link></li>
        <li><Link href={`/products/4`} replace  > <h3>Product 4</h3></Link></li>
        <li><Link href={`/products/5`}> <h3>Product 5</h3></Link></li>
      </ul>
    </>
  )
}

export default page
