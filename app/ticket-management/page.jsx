'use client'

import Link from 'next/link'
import './TicketManagement.css'

export default function TicketManagement() {
  const tickets = Array(11).fill({
    ticketNo: '#TC2345HSFsd',
    fees: '125$',
    place: 'London'
  })

  return (
    <div className="ticket-management-page">
      <div className="page-header">
        <Link href="/" className="back-button">←</Link>
        <div className="header-content">
          <h1 className="page-title">Ticket & Fine Management</h1>
          <div className="header-actions">
            <div className="search-container">
              <input type="text" placeholder="Search" className="search-input" />
              <span className="search-icon">🔍</span>
            </div>
            <Link href="/ticket-management/add-ticket" className="add-button">Add New +</Link>
          </div>
        </div>
      </div>

      <div className="section-title">Expiring licenses</div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Ticket No.</th>
              <th>Fees</th>
              <th>Place</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{ticket.ticketNo}</td>
                <td>{ticket.fees}</td>
                <td>{ticket.place}</td>
                <td>
                  <div className="action-buttons">
                    <button className="status-btn paid-btn">Paid</button>
                    <button className="status-btn pending-btn">Pending</button>
                  </div>
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
