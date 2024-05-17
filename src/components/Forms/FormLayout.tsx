import { Outlet } from 'react-router-dom'



const FormLayout = () => {

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center'>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default FormLayout