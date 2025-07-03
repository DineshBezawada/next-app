interface ProductsNestedLayout{
    children:React.ReactNode
}

export default function ReviewNestedLayout({children}:ProductsNestedLayout) {
    return (
    <>
    <h2>Review Nested Product Layout</h2>
    {children}
    <h2>Review Featued Products</h2>
    </>
    );
}