'use client'

import Link from 'next/link'
import './AddTicket.css'

export default function AddTicket() {
  return (
    <div className="add-ticket-page">
      <div className="page-header">
        <Link href="/ticket-management" className="back-button">←</Link>
        <h1 className="page-title">Add new ticket</h1>
      </div>

      <div className="form-container">
        <form className="ticket-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Ticket No.</label>
              <input
                type="text"
                className="form-input"
                defaultValue="#TC2345HSFsd"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Fees</label>
              <input
                type="text"
                className="form-input"
                defaultValue="125$"
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
          <div className="form-actions">
            <Link href="/ticket-management" className="cancel-btn">Cancel</Link>
            <button type="submit" className="submit-btn">Add to list</button>
          </div>
        </form>
      </div>
    </div>
  )
}
