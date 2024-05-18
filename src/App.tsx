import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import './globals.css'
import FormLayout from './components/Forms/FormLayout'
import CreateNewProfile from './components/Forms/pages/CreateNewProfile'
import CreateSubWallets from './components/Forms/pages/CreateSubWallets'
import NewProfile from './components/Forms/pages/NewProfile'
import ViewSubWallets from './components/Forms/pages/ViewSubWallets'
import DashboardLayout from './components/Dashboard/DashboardLayout'
import Dashboard from './components/Dashboard/pages/Dashboard'
import FillUp from './components/Dashboard/pages/FillUp'
import FundSuballet from './components/Dashboard/pages/FundSub-Wallet'
import SettingsLayout from './components/Settings/SettingsLayout'
import AddWallets from './components/Settings/pages/AddWallets'

function App() {

  return (
    <ChakraProvider>
      <Routes>
        <Route element={<FormLayout />}>
          <Route index element={<CreateNewProfile />} />
          <Route path="/create-sub-wallets" element={<CreateSubWallets />} />
          <Route path="/new-profile" element={<NewProfile />} />
          <Route path="/sub-wallets" element={<CreateSubWallets />} />
          <Route path="/sub-wallets-View" element={<ViewSubWallets />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fillUp" element={<FillUp />} />
          <Route path="/fundsubwallets" element={<FundSuballet />} />
        </Route>

        <Route element={<SettingsLayout />}>
          <Route path="/addwallets" element={<AddWallets />} />
          <Route path="/fillUp" element={<FillUp />} />
          <Route path="/fundsubwallets" element={<FundSuballet />} />
        </Route>
      </Routes>

    </ChakraProvider>
  )
}

export default App
