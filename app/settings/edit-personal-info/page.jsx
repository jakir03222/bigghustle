'use client'

import './EditPersonalInfo.css'

export default function EditPersonalInfo() {
  return (
    <div className="edit-personal-info-page">
      <div className="page-header">
        <h1 className="page-title">Personal Information</h1>
        <div className="breadcrumbs">
          Dashboard &gt; Personal Information &gt; Edit Personal Information
        </div>
      </div>

      <div className="settings-content">
        <div className="settings-header">
          <div className="breadcrumbs-full">
            Dashboard &gt; Personal Information &gt; Edit Personal Information
          </div>
          <button className="save-button">
            <span>Save</span>
            <span className="save-icon">💾</span>
          </button>
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
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="Edwards"
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
                />
              </div>
              <div className="form-group">
                <label className="form-label">City/State</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="Alabama"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
