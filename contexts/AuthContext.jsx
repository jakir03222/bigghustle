'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { isAuthenticated, isAdmin, getUserRole, getUserData, logout as authLogout } from '../lib/auth'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check authentication status on mount
    checkAuth()
  }, [])

  useEffect(() => {
    // Protect routes:
    // - If not logged in: redirect to /login
    // - If logged in but not admin: redirect to /login (admin-only dashboard)
    if (!loading) {
      const isAuthPage =
        pathname === '/login' ||
        pathname === '/signup' ||
        pathname === '/forgot-password' ||
        pathname === '/reset-password'
      
      if (!isAuthenticated() && !isAuthPage) {
        router.push('/login')
      } else if (isAuthenticated() && !isAdmin() && !isAuthPage) {
        authLogout()
        setUser(null)
        router.push('/login')
      } else if (isAuthenticated() && isAuthPage) {
        // If already logged in and on auth pages, redirect to dashboard
        router.push('/')
      }
    }
  }, [pathname, loading, router])

  const checkAuth = () => {
    if (typeof window !== 'undefined') {
      const authenticated = isAuthenticated()
      if (authenticated) {
        const role = getUserRole()
        const userData = getUserData()
        setUser({
          role,
          ...userData
        })
      }
      setLoading(false)
    }
  }

  const login = (userData) => {
    setUser(userData)
  }

  const logout = () => {
    authLogout()
    setUser(null)
    router.push('/login')
  }

  const value = {
    user,
    isAuthenticated: isAuthenticated(),
    isAdmin: isAdmin(),
    loading,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
