
export const metadata = {
  title: "My App Alugs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" bbai-tooltip-injected="true">
      <body>
        <h6>Header</h6>
        {children}
        <footer style={{ background: "#c3c3d4", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
