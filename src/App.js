import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'
import Profile from './components/Profile'
import Account from './components/Account'
import React from 'react'
import HooksDemo from './components/HooksDemo';
export const url = 'https://629c40933798759975d2e679.mockapi.io/users'
export const UserContext = React.createContext();


function App() {

  let data = {
    monthly:50000,
    yearly:600000,
    task:10,
    pending:0
  }

  return <>
  <div id="wrapper">
    <BrowserRouter>
   
      <SideBar/>  
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Routes>
              <Route path='/dashboard' element = {<Dashboard data={{data}}/>}>
                  <Route path='profile' element = {<Profile/>}/>
                  <Route path='account' element = {<Account/>}/>
              </Route>
              <Route path='/add-user' element  = {<CreateUser/>}/>
              <Route path='/edit-user/:id' element = {<EditUser/>}/>
              <Route path='/hooks-demo' element={<HooksDemo/>}/>
              <Route path="*" element={<Navigate to='/dashboard'/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  </div>
  </>
}

export default App;
