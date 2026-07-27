import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CustomCursor } from '@/components/ui/custom-cursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://rompadelkar.com'),
  title: {
    default: 'Rom Padelkar | AI/ML Engineer & Full-Stack Architect',
    template: '%s | Rom Padelkar',
  },
  description:
    'Portfolio of Rom Padelkar, an AI/ML Engineer and Full-Stack Architect specializing in autonomous LLM pipelines, Digital Experience Monitoring (DEM) telemetry, and high-performance glassmorphism web applications.',
  keywords: [
    'Rom Padelkar',
    'AI Engineer',
    'ML Engineer',
    'Full-Stack Architect',
    'Next.js 16',
    'TypeScript',
    'Tailwind CSS v4',
    'Three.js',
    'LLM Pipelines',
    'Whisper AI',
    'Qwen-2.5',
    'DEM Telemetry',
    'QualityKiosk',
    'Software Engineer Portfolio',
  ],
  authors: [{ name: 'Rom Padelkar', url: 'https://github.com/Rompadelkar' }],
  creator: 'Rom Padelkar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rompadelkar.com',
    title: 'Rom Padelkar | AI/ML Engineer & Full-Stack Architect',
    description:
      'Explore autonomous video processing pipelines, predictive machine learning risk engines, and modern glassmorphism web applications.',
    siteName: 'Rom Padelkar Portfolio',
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'Rom Padelkar - AI/ML Engineer & Full-Stack Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rom Padelkar | AI/ML Engineer & Full-Stack Architect',
    description:
      'Building production-grade LLM pipelines, DEM telemetry analytics, and futuristic Next.js web applications.',
    images: ['/profile.png'],
    creator: '@RomPadelkar',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white min-h-screen overflow-x-hidden">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
