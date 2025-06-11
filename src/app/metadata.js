export const defaultMetadata = {
  title: {
    default: 'Forensiqo | Blockchain Intelligence & Asset Recovery',
    template: '%s | Forensiqo'
  },
  description: 'Advanced tracking and monitoring solution for digital assets and cryptocurrency recovery.Recover Lost or Stolen Cryptocurrency | Trusted Crypto Recovery ServicesGet expert help to recover lost, hacked, or stolen crypto assets. Our secure, fast, and professional crypto recovery services support Bitcoin, Ethereum, and all major wallets. 24/7 support. Regain access today!',
  keywords: ['cryptocurrency recovery', 'blockchain security', 'digital asset tracking', 'crypto wallet recovery', 'blockchain forensics'],
  authors: [{ name: 'Forensiqo Team' }],
  creator: 'Forensiqo',
  publisher: 'Forensiqo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://Forensiqo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://Forensiqo.com',
    siteName: 'Forensiqo',
    title: 'Forensiqo | Recover Lost or Stolen Cryptocurrency',
    description: 'Recover Lost or Stolen Cryptocurrency | Trusted Crypto Recovery Services ,Get expert help to recover lost, hacked, or stolen crypto assets. Our secure, fast, and professional crypto recovery services support Bitcoin, Ethereum, and all major wallets. 24/7 support. Regain access today!',
    images: [
      {
        url: '/umag.png',
        width: 1200,
        height: 630,
        alt: 'Forensiqo | Recover Lost or Stolen Cryptocurrency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forensiqo | Recover Lost or Stolen Cryptocurrency',
    description: 'Recover Lost or Stolen Cryptocurrency | Trusted Crypto Recovery Services ,Get expert help to recover lost, hacked, or stolen crypto assets. Our secure, fast, and professional crypto recovery services support Bitcoin, Ethereum, and all major wallets. 24/7 support. Regain access today!',
    images: ['/twitter-image.jpg'],
    creator: '@Forensiqo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
}; 