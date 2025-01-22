import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-gray-100 flex items-center justify-center h-screen">
        {children}
      </body>
    </html>
  );
}
