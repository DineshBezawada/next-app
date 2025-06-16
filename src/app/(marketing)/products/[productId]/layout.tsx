
interface ProductsNestedLayout{
    children:React.ReactNode
}

export default function NestedLayout({children}:ProductsNestedLayout) {
    return (
    <>
    <h2>Nested Product Layout</h2>
    {children}

    <h2>Featued Products</h2>
    </>
    );
}