'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { forgotPassword } from '../../lib/auth'
import './ForgotPassword.css'

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const response = await forgotPassword(email)
      if (response.success) {
        setSuccess(response.message || 'OTP sent to your email successfully')
        setTimeout(() => {
          router.push(`/reset-password?email=${encodeURIComponent(email)}`)
        }, 700)
      } else {
        setError(response.message || 'Failed to send OTP.')
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fp-container">
      <div className="fp-card">
        <div className="fp-header">
          <div className="fp-logo">Logo</div>
          <h1 className="fp-title">Forgot Password</h1>
          <p className="fp-subtitle">We will send an OTP to your email</p>
        </div>

        <form onSubmit={handleSubmit} className="fp-form">
          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}

          {success && (
            <div className="success-message">
              <span className="success-icon">✅</span>
              {success}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="Enter your email"
              required
              disabled={loading}
            />
          </div>

          <button type="submit" className="fp-button" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span>
                Sending OTP...
              </>
            ) : (
              'Send OTP'
            )}
          </button>
        </form>

        <div className="fp-footer">
          <p>
            Back to{' '}
            <Link href="/login" className="fp-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

