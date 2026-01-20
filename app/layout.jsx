import { AuthProvider } from '../contexts/AuthContext'
import Layout from '../components/Layout'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Admin Dashboard with Next.js" />
      </head>
      <body>
        <AuthProvider>
          <Layout>{children}</Layout>
        </AuthProvider>
      </body>
    </html>
  )
}
