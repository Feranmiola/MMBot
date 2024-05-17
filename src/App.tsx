import { Routes, Route } from 'react-router-dom'
import './globals.css'
import FormLayout from './components/Forms/FormLayout'
import CreateNewProfile from './components/Forms/pages/CreateNewProfile'
import CreateSubWallets from './components/Forms/pages/CreateSubWallets'
import NewProfile from './components/Forms/pages/NewProfile'
import ViewSubWallets from './components/Forms/pages/ViewSubWallets'

function App() {
  
  return (
    <div>
      <Routes>
        <Route element = {<FormLayout/>}>
                
                <Route index element = { <CreateNewProfile/> }/>
                <Route path= "/create-sub-wallets" element = { <CreateSubWallets/> } />
                <Route path= "/new-profile" element = { <NewProfile/> } />
                <Route path= "/sub-wallets" element = { <ViewSubWallets/> } />
              </Route>
      </Routes>

    </div>
  )
}

export default App
