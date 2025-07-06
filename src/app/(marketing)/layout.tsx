// app/layout.tsx

import Link from "next/link";
import ErrorWrapper from "./error-wrapper";

export const metadata = {
  title: "My App Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" bbai-tooltip-injected="true">
      <body>
        <header style={{ background: "lightblue", padding: "1rem" }}>
          {/* <p>Header</p> */}
                <nav>
        <ul style={{display:'flex', listStyleType:'none'}}>
            <li style={{margin:`0 20px`}}><Link href={`/`} style={{textDecoration:'none'}}> Home</Link></li>
            <li style={{margin:`0 20px`}}><Link href={`/about`} style={{textDecoration:'none'}}> About</Link></li>
            <li style={{margin:`0 20px`}}><Link href={`/blog`} style={{textDecoration:'none'}}> Blog</Link></li>
            <li style={{margin:`0 20px`}}><Link href={`/counter`} style={{textDecoration:'none'}}> Counter</Link></li>
            <li style={{margin:`0 20px`}}><Link href={`/products`} style={{textDecoration:'none'}}> Products</Link></li>
            <li style={{margin:`0 20px`}}><Link href={`/profile`} style={{textDecoration:'none'}}> Profile</Link></li>
            <li style={{margin:`0 20px`}}><Link href={`/articles/123?lang=en`} style={{textDecoration:'none'}}> English Article</Link></li>
            <li style={{margin:`0 20px`}}><Link href={`/articles/123?lang=fr`} style={{textDecoration:'none'}}> French Article</Link></li>
        </ul>
      </nav>
        </header>
        <ErrorWrapper> {children}</ErrorWrapper>
       
        <footer style={{ background: "#c3c3d4", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
