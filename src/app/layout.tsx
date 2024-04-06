import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Roboto} from 'next/font/google'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from '@/section/nav-bar';
import { Container, Stack, Typography } from '@mui/material';

// import "src/locales/i18n"
const inter = Inter({ subsets: ['latin'] })
const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ['100', '300']
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
      {/* <Stack sx={{bgcolor:'#f48fb1'}}>
        <Container maxWidth="xl" >
          <Stack spacing={3}>
            <Typography>
              number:000-000-0000
            </Typography>
            <Typography>
              number:000-000-0000
            </Typography>
            <Typography>
              number:000-000-0000
            </Typography>
            <Typography>
              number:000-000-0000
            </Typography>
          </Stack>
        </Container>
      </Stack> */}
    </html>
  )
}
