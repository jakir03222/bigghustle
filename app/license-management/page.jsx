'use client'

import Link from 'next/link'
import './LicenseManagement.css'

export default function LicenseManagement() {
  const licenses = Array(12).fill({
    name: 'Mosh',
    email: 'mosh@gmail.com',
    daysLeft: '3 days left'
  })

  return (
    <div className="license-management-page">
      <div className="page-header">
        <Link href="/" className="back-button">←</Link>
        <h1 className="page-title">License Managemnet</h1>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="section-title">Expiring licenses</div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Days left</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {licenses.map((license, index) => (
              <tr key={index}>
                <td>{license.name}</td>
                <td>{license.email}</td>
                <td>{license.daysLeft}</td>
                <td>
                  <button className="alert-btn">Send Alert</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="page-btn">←</button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn highlight">→</button>
      </div>
    </div>
  )
}
