export const defaultMetadata = {
  title: {
    default: 'Provenix | Fraud Investigations & Digital Intelligence',
    template: '%s | Provenix'
  },
  description: 'Provenix investigates fraud, traces digital assets, and prepares evidence-led briefings for people and businesses that need a clear next step.',
  keywords: ['fraud investigation', 'crypto forensics', 'background checks', 'digital asset tracing', 'Provenix'],
  authors: [{ name: 'Provenix' }],
  creator: 'Provenix',
  publisher: 'Provenix',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://Provenix.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://Provenix.org',
    siteName: 'Provenix',
    title: 'Provenix | Fraud Investigations & Digital Intelligence',
    description: 'Provenix investigates fraud, traces digital assets, and prepares evidence-led briefings for people and businesses that need a clear next step.',
    images: [
      {
        url: '/umag.png',
        width: 1200,
        height: 630,
        alt: 'Provenix | Recover Lost or Stolen Cryptocurrency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Provenix | Fraud Investigations & Digital Intelligence',
    description: 'Provenix investigates fraud, traces digital assets, and prepares evidence-led briefings for people and businesses that need a clear next step.',
    images: ['/twitter-image.jpg'],
    creator: '@Provenix',
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