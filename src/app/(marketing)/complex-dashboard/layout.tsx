'use client'
import { useState } from "react";

type ComplexDashboard = {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
};

export default function ComplexDashboard({
  children,
  users,
  revenue,
  notifications,
  login,
}: ComplexDashboard) {
  const [isLoggedin,setIsLoggedin] = useState(false);
  return (
    <>
      {isLoggedin ? (
        <>
          {children}
          <div>{users}</div>
          <div>{revenue}</div>
          <div>{notifications}</div>
        </>
      ) : (
        <> {login}
        <button onClick={()=>{setIsLoggedin(prev => !prev)}}>Login</button>
        </>
      )}
    </>
  );
}
