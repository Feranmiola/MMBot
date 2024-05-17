import { Outlet } from 'react-router-dom'
import TopBarDashboard from '../shared/TopBarDashboard'

const DashboardLayout = () => {
  return (
    <div>
      <TopBarDashboard/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout