'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '../contexts/AuthContext'
import './Sidebar.css'

export default function Sidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/user-management', label: 'User Management', icon: '👤' },
    { path: '/license-management', label: 'License Management', icon: '🔗' },
    { path: '/ticket-management', label: 'Ticket & Fine Management', icon: '🎫' },
    { path: '/document-verification', label: 'Document Verification', icon: '📄' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ]

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="sidebar">
      <div className="logo">Logo</div>
      <nav className="nav-menu">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`nav-item ${pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="logout" onClick={handleLogout}>
        <span className="logout-icon">🚪</span>
        <span className="logout-text">Logout</span>
      </div>
    </div>
  )
}

