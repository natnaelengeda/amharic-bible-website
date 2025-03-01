import { Metadata } from "next";

export const meta: Metadata = {
  metadataBase: new URL('https://amharicbible.vercel.app/'),
  icons: {
    icon: 'logo.jpeg',
  },
  title: "Amharic Bible",
  description: "Amharic Bible - Get you amharic bible",
  applicationName: 'Next.js',
  keywords: [
    'Amharic Bible',
    'Bible',
    'Amharic',
  ],
  creator: 'Natnael Engeda',
  authors: [
    {
      name: 'Natnael Engeda',
      url: 'https://natnaelengeda.tech'
    }
  ],
  publisher: "Natnael Engeda",
  openGraph: {
    title: "Amharic Bible",
    description: "Amharic Bible - Get you amharic bible",
    url: 'https://amharicbible.vercel.app/',
    siteName: "Amharic Bible",
    images: [
      {
        url: "/seo-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  twitter: {
    card: "summary_large_image",
    title: "Amharic Bible",
    description: "Amharic Bible - Get you amharic bible",
    site: "@AmharicBible",
    images: ['/seo-image.jpg'],
    creator: "@natnaelengeda",
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['nattynengeda@gmail.com', 'https://natnaelengeda.tech']
    }
  },
  appleWebApp: {
    title: "Amharic Bible",
    statusBarStyle: 'black-translucent',
    startupImage: [
      'logo.jpeg'
    ]
  },
};