'use client'

import Link from 'next/link'
import './UserList.css'

export default function UserList() {
  const users = Array(12).fill({
    name: 'Mosh',
    email: 'mosh@gmail.com',
    addedDate: '5 Jun 2025'
  })

  return (
    <div className="user-list-page">
      <div className="page-header">
        <Link href="/" className="back-button">←</Link>
        <h1 className="page-title">User list</h1>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Added date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.addedDate}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn view-btn">👁️</button>
                    <button className="action-btn delete-btn">🗑️</button>
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
        <button className="page-btn">→</button>
      </div>
    </div>
  )
}
