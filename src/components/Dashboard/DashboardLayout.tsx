import { Outlet } from 'react-router-dom'
import TopBarDashboard from '../shared/TopBarDashboard'
import TopMetric from '../shared/TopMetric'

const DashboardLayout = () => {
  return (
    <div>
      <TopBarDashboard/>
      <TopMetric/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout