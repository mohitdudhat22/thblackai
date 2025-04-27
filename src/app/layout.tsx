import './globals.css';
import { Inter } from 'next/font/google';
import { GenerationWindow } from '@/components/generation-window';
import { Sidebar } from '@/components/sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1">
            <GenerationWindow />
          </main>
        </div>
      </body>
    </html>
  );
}
