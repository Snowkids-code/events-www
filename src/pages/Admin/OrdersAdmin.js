import React from 'react'
import Orders from '../../components/Admin/Orders'
import NavbarAdmin from '../../components/Layout/Admin/navbar-admin'
import SidebarAdmin from '../../components/Layout/Admin/sidebar-admin'

function OrdersAdmin() {
  return (
    <div>
      <NavbarAdmin />
      <div style={{display: "flex"}}>
        <SidebarAdmin />
        <div style={{ flex: "10" }}>
          <Orders />
        </div>
      </div>
    </div>
  )
}

export default OrdersAdmin
