import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Driver Performance Dashboard',
  description: 'Safety, operations, and compliance dashboard for fleet drivers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
