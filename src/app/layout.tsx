import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import { ThemeSwitcher } from '../../components/ThemeSwitcher'
import Head from 'next/head'

const inter = Inter({ 
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin'] 
})

export const metadata = {
  title: "Societas Arcana",
  description: 'Societas Arcana stands as a dynamic and contemporary secret society, uniting veterans, business leaders, and dedicated individuals in a shared commitment to personal growth, leadership development, and community betterment. Embracing ancient traditions with a modern twist, our fraternity emphasizes ethical leadership, resilience, and collaborative impact. Through symbolic initiation ceremonies and a focus on community engagement, Societas Arcana creates a unique space where diverse expertise converges to drive positive change, exemplifying a fusion of tradition and innovation in the pursuit of excellence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className={ `${inter.className} bg-gray-200	 dark:bg-[#0d1117] `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <ThemeSwitcher /> */}
          <main>{children}</main>
        </ThemeProvider>          
      </body>
    </html>
  )
}
