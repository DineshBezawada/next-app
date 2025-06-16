"use client"

import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  return (
    <>
      <h1>Invalid {pathname} Page</h1>
      <h6>RecordId range is already reached</h6>
    </>
  )
}

export default NotFound;
