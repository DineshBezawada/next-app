import Header from "./header";

export const metadata = {
  title: "My App Authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" bbai-tooltip-injected="true">
      <body>
        <Header/>
        {children}
        <footer style={{ background: "#c3c3d4", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
