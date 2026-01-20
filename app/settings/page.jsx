'use client'

import Link from 'next/link'
import './Settings.css'

export default function Settings() {
  return (
    <div className="settings-page">
      <div className="page-header">
        <h1 className="page-title">Personal Information</h1>
        <div className="breadcrumbs">
          Dashboard &gt; Personal Information
        </div>
      </div>

      <div className="settings-content">
        <div className="settings-header">
          <div className="breadcrumbs-full">
            Dashboard &gt; Personal Information &gt; Edit Personal Information
          </div>
          <Link href="/settings/edit-personal-info" className="edit-button">
            <span>Edit</span>
            <span className="edit-icon">✏️</span>
          </Link>
        </div>

        <div className="form-container">
          <form className="settings-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="Bessie"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="Edwards"
                  readOnly
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  defaultValue="darrellsteward@gmail.com"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="(307) 555-0133"
                  readOnly
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="USA"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label className="form-label">City/State</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="Alabama"
                  readOnly
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
