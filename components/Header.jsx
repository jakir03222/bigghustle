'use client'

import { useAuth } from '../contexts/AuthContext'
import './Header.css'

export default function Header() {
  const { user } = useAuth()

  const getUserDisplayName = () => {
    if (user?.email) {
      return user.email.split('@')[0]
    }
    return 'User'
  }

  const getUserRole = () => {
    return user?.role || 'user'
  }

  return (
    <div className="header">
      <div className="header-content">
        <div className="user-profile">
          <div className="user-info">
            <div className="user-name">{getUserDisplayName()}</div>
            <div className="user-role">@{getUserRole()}</div>
          </div>
          <div className="user-avatar">
            <div className="avatar-placeholder">
              {user?.avatar?.url ? (
                <img src={user.avatar.url} alt="Avatar" />
              ) : (
                '👨'
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

