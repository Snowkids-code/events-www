import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarAdmin from './navbar-admin'
import SidebarAdmin from './sidebar-admin'

function AdminLayout() {
  return (
    <div>
      <NavbarAdmin/>
      <div className="flex max-[1000px]:block">
          <SidebarAdmin />
          <div style={{ flex: "10" }} className='admin-main-container'>
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default AdminLayout
