import React, { ReactNode, useState } from 'react'
import DashboardSideNav from '../../components/dashboard/navbar/DashboardSideNav'
import DashboardTopNav from '../../components/dashboard/navbar/DashboardTopNav'
import SideNav from '../../components/navbar/SideNav'

interface Props {
  children: ReactNode
}

function DashboardTemplate(props: Props) {
  const {} = props

  //Variables
  const [isMobile, setIsMobile] = useState(true)
  const [closeSideNav, setCloseSideNav] = useState(false)

  //Function
  const setIiMobileFunc = (val: boolean) => {
    setIsMobile(val)
  }
  const setCloseSideNavFunc = (val: boolean)=>{
    setCloseSideNav(val)
  }

  return (
    <div className="flex flex-row">
      <div className={`side-nav-container ${ closeSideNav ? '-left-[0%] md:-left-[0%]' : '-left-[100%] md:-left-[0%]'}`}>
        <DashboardSideNav closeSidebar={closeSideNav} closebarFunction={setCloseSideNavFunc}/>
      </div>
      <div className="dashboard-detail-container">
        <div className="top-dashboard-nav bg-white">
          <DashboardTopNav closebarFunction={setCloseSideNavFunc}/>
        </div>
        <div className="body-dashboard-container">
            {props.children}
        </div>
      </div>
    </div>
  )
}

export default DashboardTemplate
