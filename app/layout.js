// app/layout.js
import './globals.css'
import { CSPostHogProvider } from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body>{children}</body>
      </CSPostHogProvider>
    </html>
  )
}