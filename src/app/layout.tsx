import './globals.css';

export const metadata = {
  metadataBase: 'https://basfrodim.id/',
  title: {
    template: '%s | RODIM',
    default: 'RODIM',
  },
  alternates: {
    canonical: '/',
  },
  description: 'RODIM',
  keywords: [
    'RODIM',
    'BASF',
    'Paint Protection Film',
    'PPF',
    'PPF RODIM',
    'TPU film',
    'automotive paint protection',
    'car paint protection',
    'cat mobil',
    'pelindung cat mobil',
    'OEM paint protection',
    'TPU material',
    'auto detailing',
    'perlindungan cat mobil',
    'car protection film',
    'PPF berkualitas tinggi',
    'inovasi PPF',
    'RODIM Indonesia',
    'pelindung cat dari BASF',
  ],
  openGraph: {
    title: "RODIM - Protection by World's Best",
    description:
      'RODIM PPF is a brand of BASF, a global leader in TPU materials, automotive OEM and refinish paint. From TPU production to advanced PPF innovation, RODIM delivers complete solutions and truly understands how to protect factory car paint.',
    url: 'https://basfrodim.id/',
    siteName: "RODIM - Protection by World's Best",
    images: [
      {
        url: '/image/rodim-og.jpg',
        width: 600,
        height: 600,
      },
    ],
    type: 'website',
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '144x144',
      url: '/image/rodim-icon.png',
    },
  ],
  twitter: {
    card: 'summary_large_image',
    title: "RODIM - Protection by World's Best",
    description:
      'RODIM PPF is a brand of BASF, a global leader in TPU materials, automotive OEM and refinish paint. From TPU production to advanced PPF innovation, RODIM delivers complete solutions and truly understands how to protect factory car paint.',
    images: ['/image/rodim-og.jpg'],
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
