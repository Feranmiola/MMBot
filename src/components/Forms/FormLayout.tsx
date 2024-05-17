import { Outlet } from 'react-router-dom'
import TopBarForms from '../shared/TopBarForms'


const FormLayout = () => {
  return (
    <div className='flex items-center justify-center flex-1 flex-col mt-36'>
      <TopBarForms/>
      <div className='flex items-center justify-center flex-1'>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default FormLayout