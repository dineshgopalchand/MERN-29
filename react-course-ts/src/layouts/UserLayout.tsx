import React from 'react'
import { Outlet } from 'react-router'

const UserLayout = () => {
  return (<>
    <div>UserLayout</div>
    <Outlet/>
    </>
  )
}

export default UserLayout