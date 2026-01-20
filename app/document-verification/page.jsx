'use client'

import Link from 'next/link'
import './DocumentVerification.css'

export default function DocumentVerification() {
  return (
    <div className="document-verification-page">
      <div className="page-header">
        <Link href="/" className="back-button">←</Link>
        <h1 className="page-title">Document Verification</h1>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="verification-content">
        <div className="user-profile-section">
          <div className="profile-picture-large">
            <div className="avatar-large">👨</div>
          </div>
          <div className="user-name-large">Jenny Wilson</div>
        </div>

        <div className="user-details-grid">
          <div className="details-column">
            <div className="detail-item">
              <span className="detail-label">User ID:</span>
              <span className="detail-value">12345678</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">License No.:</span>
              <span className="detail-value">6346435436</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Expiration Date.:</span>
              <span className="detail-value">18th Dec, 2025</span>
            </div>
          </div>
          <div className="details-column">
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">josh@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">+764782642</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">State:</span>
              <span className="detail-value">Berlin</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">License Class:</span>
              <span className="detail-value">Class D</span>
            </div>
          </div>
        </div>

        <div className="license-image-container">
          <div className="license-card">
            <div className="license-header">
              <div className="license-title">DRIVER LICENSE REGULAR</div>
              <div className="license-state">WISCONSIN, USA</div>
            </div>
            <div className="license-content">
              <div className="license-photo-section">
                <div className="license-photo">👨</div>
              </div>
              <div className="license-details-section">
                <div className="license-detail-row">
                  <span className="license-field">Name:</span>
                  <span className="license-value">DEREK THOMAS</span>
                </div>
                <div className="license-detail-row">
                  <span className="license-field">Address:</span>
                  <span className="license-value">4802 SHEBOYGAN AVE MADISON, WI 53705</span>
                </div>
                <div className="license-detail-row">
                  <span className="license-field">License Number:</span>
                  <span className="license-value">S123-4567-6501-00</span>
                </div>
                <div className="license-detail-row">
                  <span className="license-field">Class:</span>
                  <span className="license-value">D</span>
                </div>
                <div className="license-detail-row">
                  <span className="license-field">DOB:</span>
                  <span className="license-value">02/11/1974</span>
                </div>
                <div className="license-detail-row">
                  <span className="license-field">EXP:</span>
                  <span className="license-value">02/11/2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="action-buttons-section">
          <button className="action-button accept-btn">Accept</button>
          <button className="action-button reject-btn">Reject</button>
        </div>
      </div>
    </div>
  )
}
