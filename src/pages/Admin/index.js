import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Dashboard from "../../components/Admin/Dashboard";
import NavbarAdmin from "../../components/Layout/Admin/navbar-admin";
import SidebarAdmin from "../../components/Layout/Admin/sidebar-admin";
import { getAllOrdersThunk } from "../../reducers/get-orders.reducer";

function AdminDashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(getAllOrdersThunk());
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="admin-dashboard-container-first">
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
