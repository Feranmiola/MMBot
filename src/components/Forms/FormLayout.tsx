import { Outlet } from 'react-router-dom'
import TopBarForms from '../shared/TopBarForms'
import { ProgressUpdate } from '../shared/ProgressSetter'


const FormLayout = () => {

  const progress = ProgressUpdate(0, 'get'); 
  return (
    <div className='flex items-center justify-center flex-1 flex-col mt-36'>
      <TopBarForms prpgressValue = {progress} />
      <div className='flex items-center justify-center flex-1'>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default FormLayout