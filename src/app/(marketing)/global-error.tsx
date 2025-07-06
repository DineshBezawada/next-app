"use client";

const GlobalError = () => {
  return (
    <html>
      <body>
        <h3>Something went wrong</h3>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </body>
    </html>
  );
};
export default GlobalError;
