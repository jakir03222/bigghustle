'use client'

import { useAuth } from '../contexts/AuthContext'
import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'
import Header from './Header'
import './Layout.css'

export default function Layout({ children }) {
  const { isAuthenticated, loading } = useAuth()
  const pathname = usePathname()
  const isAuthPage =
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname === '/forgot-password' ||
    pathname === '/reset-password'

  // Show loading state
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner-large"></div>
      </div>
    )
  }

  // Don't show sidebar/header on auth pages
  if (isAuthPage) {
    return <>{children}</>
  }

  // Only show layout if authenticated
  if (!isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-container">
        <Header />
        <div className="content-area">{children}</div>
      </div>
    </div>
  )
}

