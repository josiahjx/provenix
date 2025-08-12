export const defaultMetadata = {
  title: {
    default: 'Forensigo | Blockchain Intelligence & Asset Recovery',
    template: '%s | Forensigo'
  },
  description: 'Advanced tracking and monitoring solution for digital assets and cryptocurrency recovery.Recover Lost or Stolen Cryptocurrency | Trusted Crypto Recovery ServicesGet expert help to recover lost, hacked, or stolen crypto assets. Our secure, fast, and professional crypto recovery services support Bitcoin, Ethereum, and all major wallets. 24/7 support. Regain access today!',
  keywords: ['cryptocurrency recovery', 'blockchain security', 'digital asset tracking', 'crypto wallet recovery', 'blockchain forensics'],
  authors: [{ name: 'Forensigo Team' }],
  creator: 'Forensigo',
  publisher: 'Forensigo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://Forensigo.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://Forensigo.org',
    siteName: 'Forensigo',
    title: 'Forensigo | Recover Lost or Stolen Cryptocurrency',
    description: 'Recover Lost or Stolen Cryptocurrency | Trusted Crypto Recovery Services ,Get expert help to recover lost, hacked, or stolen crypto assets. Our secure, fast, and professional crypto recovery services support Bitcoin, Ethereum, and all major wallets. 24/7 support. Regain access today!',
    images: [
      {
        url: '/umag.png',
        width: 1200,
        height: 630,
        alt: 'Forensigo | Recover Lost or Stolen Cryptocurrency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forensigo | Recover Lost or Stolen Cryptocurrency',
    description: 'Recover Lost or Stolen Cryptocurrency | Trusted Crypto Recovery Services ,Get expert help to recover lost, hacked, or stolen crypto assets. Our secure, fast, and professional crypto recovery services support Bitcoin, Ethereum, and all major wallets. 24/7 support. Regain access today!',
    images: ['/twitter-image.jpg'],
    creator: '@Forensigo',
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