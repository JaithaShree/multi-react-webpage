import { BrowserRouter, Routes,Route } from 'react-router-dom'
import  LoginPage from './pages/loginPage'
import DashboardPage from './pages/DashboardPage'
import ProfilePage from './pages/ProfilePage'


export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element ={<LoginPage/>}/>
            <Route path="/login" element ={<LoginPage/>} />
            <Route path="/dashboard" element ={<DashboardPage/>} />
            <Route path="/profile" element ={<ProfilePage/>} />
          </Route>

        </Routes>
      </BrowserRouter>

    </div>

  )
}


