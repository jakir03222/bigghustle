/**
 * Authentication service for handling login API calls
 */

const API_BASE_URL = 'http://localhost:5000/api/v1'

/**
 * Login user with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} - API response with tokens and user data
 */
export async function login(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Login failed')
    }

    return data
  } catch (error) {
    // Handle network errors or other exceptions
    if (error.message) {
      throw error
    }
    throw new Error('Network error. Please check your connection.')
  }
}

/**
 * Register user with email/password/confirmPassword/role
 * @param {string} email
 * @param {string} password
 * @param {string} confirmPassword
 * @param {string} role
 * @returns {Promise<Object>} - API response
 */
export async function register(email, password, confirmPassword, role) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
        role,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed')
    }

    return data
  } catch (error) {
    if (error.message) {
      throw error
    }
    throw new Error('Network error. Please check your connection.')
  }
}

/**
 * Send OTP to email for password reset
 * Endpoint: POST /auth/forget
 * @param {string} email
 * @returns {Promise<Object>}
 */
export async function forgotPassword(email) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/forget`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send OTP')
    }

    return data
  } catch (error) {
    if (error.message) {
      throw error
    }
    throw new Error('Network error. Please check your connection.')
  }
}

/**
 * Reset password using email + otp + new password
 * @param {string} email
 * @param {string} otp
 * @param {string} password
 * @param {string} confirmPassword
 * @returns {Promise<Object>}
 */
export async function resetPassword(email, otp, password, confirmPassword) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        otp,
        password,
        confirmPassword,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Password reset failed')
    }

    return data
  } catch (error) {
    if (error.message) {
      throw error
    }
    throw new Error('Network error. Please check your connection.')
  }
}

/**
 * Get stored access token
 * @returns {string|null} - Access token or null
 */
export function getAccessToken() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('accessToken')
  }
  return null
}

/**
 * Get stored refresh token
 * @returns {string|null} - Refresh token or null
 */
export function getRefreshToken() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('refreshToken')
  }
  return null
}

/**
 * Get user role
 * @returns {string|null} - User role or null
 */
export function getUserRole() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('userRole')
  }
  return null
}

/**
 * Get user data
 * @returns {Object|null} - User data or null
 */
export function getUserData() {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('userData')
    return userData ? JSON.parse(userData) : null
  }
  return null
}

/**
 * Check if user is authenticated
 * @returns {boolean} - True if user has access token
 */
export function isAuthenticated() {
  return getAccessToken() !== null
}

/**
 * Logout user by clearing all stored data
 */
export function logout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userId')
    localStorage.removeItem('userData')
  }
}

/**
 * Check if user is admin
 * @returns {boolean} - True if user role is admin
 */
export function isAdmin() {
  return getUserRole() === 'admin'
}
