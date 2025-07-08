
type ComplexDashboard ={
    children:React.ReactNode,
    users:React.ReactNode,
    revenue:React.ReactNode,
    notifications:React.ReactNode,
    
}
 
 
 export default function ComplexDashboard ({children,users,revenue,notifications}:ComplexDashboard) {
    return(
        <>
        {children}
        <div>{users}</div>
        <div>{revenue}</div>
        <div>{notifications}</div>
        </>
    )
 }