import React from "react";
import Dashboard from "../../components/Admin/Dashboard";
import NavbarAdmin from "../../components/Layout/Admin/navbar-admin";
import SidebarAdmin from "../../components/Layout/Admin/sidebar-admin";

function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <NavbarAdmin />
      <div className="admin-dashboard-wrapper">
        <SidebarAdmin />
        <div style={{ flex: "10" }}>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
