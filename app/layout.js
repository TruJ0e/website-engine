export const metadata = {
  title: 'Website Engine',
  description: 'Multi-tenant website engine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
