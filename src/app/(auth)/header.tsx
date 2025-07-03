"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
      const routes = [
    { name: `LogIn`, href: `login` },
    { name: `SignUp`, href: `signup` },
    { name: `Forgot Password`, href: `forgot-password` },
  ];

  const pathName = usePathname();
  console.log(pathName, "path");
  return (
    <>
    <header style={{ background: "lightblue", padding: "1rem" }}>
          <ul style={{ display: "flex", listStyleType: "none" }}>
            {routes?.map((route) => (
              <li style={{ margin: `0 20px` }} key={route?.name}>
                <Link
                  href={`/${route?.href}`}
                  style={
                    pathName === route?.href
                      ? {
                          color: 'red',
                          fontWeight: `600 !important`,
                          fontSize: "20px",
                          textDecoration: "none",
                        }
                      : { textDecoration: "none" }
                  }
                >
                  {route?.name}
                </Link>
              </li>
            ))}
          </ul>
        </header>
    </>
  )
}

export default Header;