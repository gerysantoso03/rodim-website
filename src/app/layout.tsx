import './globals.css';

export const metadata = {
  title: 'RODIM',
  icons: {
    icon: '../../../icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
