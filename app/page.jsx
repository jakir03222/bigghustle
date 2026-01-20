'use client'

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './Dashboard.css'

export default function Dashboard() {
  const jobPostedData = [
    { day: 'Mon', value: 98 },
    { day: 'Tues', value: 75 },
    { day: 'Wed', value: 78 },
    { day: 'Thurs', value: 28 },
    { day: 'Fri', value: 35 },
    { day: 'Sat', value: 55 },
    { day: 'Sun', value: 40 },
  ]

  const userGrowthData = [
    { day: 'Day 1', licenseExpiring: 700, unpaidTickets: 250 },
    { day: 'Day 2', licenseExpiring: 720, unpaidTickets: 280 },
    { day: 'Day 3', licenseExpiring: 710, unpaidTickets: 300 },
    { day: 'Day 4', licenseExpiring: 730, unpaidTickets: 320 },
    { day: 'Day 5', licenseExpiring: 725, unpaidTickets: 340 },
    { day: 'Day 6', licenseExpiring: 740, unpaidTickets: 360 },
    { day: 'Day 7', licenseExpiring: 735, unpaidTickets: 380 },
    { day: 'Day 8', licenseExpiring: 750, unpaidTickets: 400 },
    { day: 'Day 9', licenseExpiring: 745, unpaidTickets: 410 },
    { day: 'Day 10', licenseExpiring: 760, unpaidTickets: 420 },
    { day: 'Day 11', licenseExpiring: 755, unpaidTickets: 430 },
    { day: 'Day 12', licenseExpiring: 770, unpaidTickets: 440 },
    { day: 'Day 13', licenseExpiring: 765, unpaidTickets: 450 },
    { day: 'Day 14', licenseExpiring: 780, unpaidTickets: 460 },
    { day: 'Day 15', licenseExpiring: 775, unpaidTickets: 470 },
  ]

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="page-title">Overview</h1>
        <select className="time-selector">
          <option>This month</option>
          <option>This week</option>
          <option>This year</option>
        </select>
      </div>

      <div className="metrics-cards">
        <div className="metric-card">
          <div className="metric-icon">👥</div>
          <div className="metric-content">
            <div className="metric-label">Total User</div>
            <div className="metric-value">1203</div>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">⏰</div>
          <div className="metric-content">
            <div className="metric-label">License Expiring User</div>
            <div className="metric-value">758</div>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">🎫</div>
          <div className="metric-content">
            <div className="metric-label">Unpaid Tickets</div>
            <div className="metric-value">364</div>
          </div>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart-card">
          <h2 className="chart-title">Job Posted</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={jobPostedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#000" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h2 className="chart-title">User Growth</h2>
            <select className="time-selector-small">
              <option>Last 15 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="licenseExpiring" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444' }} />
              <Line type="monotone" dataKey="unpaidTickets" stroke="#9333ea" strokeWidth={2} dot={{ fill: '#9333ea' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
