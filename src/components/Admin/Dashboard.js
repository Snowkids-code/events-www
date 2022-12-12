import React from 'react'
import DashboardChart from '../Dashboard/DashboardChart'
import DashboardFeatured from '../Dashboard/DashboardFeatured'
import DashboardTable from '../Dashboard/DashboardTable'
import DashboardWidget from '../Dashboard/DashboardWidget'

function Dashboard() {
  return (
    <div className="admin-dashboard-container">
      <div className="top-summary-container">
        <DashboardWidget type="Users" />
        <DashboardWidget type="Products" />
        <DashboardWidget type="Orders" />
        <DashboardWidget type="Earnings" />
      </div>
      <div className="chats-container">
        <DashboardFeatured />
        <DashboardChart aspect={3 / 1} />
      </div>
      <div className="transactions-container">
        <p className="list-title">Latest transactions</p>
        <DashboardTable />
      </div>
    </div>
  )
}

export default Dashboard
