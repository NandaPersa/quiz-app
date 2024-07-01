import type { Metadata } from 'next';
import '@/styles/globals.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import RecoilContextProvider from '@/contexts/RecoilContextProvider';

export const metadata: Metadata = {
  title: 'Quiz App',
  description: 'Quiz da tia Sônia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RecoilContextProvider>{children}</RecoilContextProvider>
      </body>
    </html>
  );
}
