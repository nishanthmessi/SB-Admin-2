import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'
import Profile from './components/Profile'
import Account from './components/Account'
import {useState} from 'react'

function App() {
  let data = {
    monthly:40000,
    yearly:480000,
    task:100,
    pending:10
  }

  let [user,setUser] = useState([
    {
      firstName:"John",
      lastName:"Smith",
      email:"johnsmith@gmail.com",
      mobile:"23234983434",
      dob:"12-12-1980",
      location:"India"
    },
    {
      firstName:"Sarah",
      lastName:"Lee",
      email:"sarahlee@gmail.com",
      mobile:"5689237415",
      dob:"01-08-1990",
      location:"Austria"
    },
    {
      firstName:"Jarno",
      lastName:"Opmeer",
      email:"jarnoopmeer@gmail.com",
      mobile:"3334858069",
      dob:"11-11-2000",
      location:"Netherland"
    }
  ])

  return <>
  <div id="wrapper">
    <BrowserRouter>
      <SideBar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Routes>
              <Route path='/dashboard' element = {<Dashboard data={{data,user,setUser}}/>}>
                  <Route path='profile' element = {<Profile/>}/>
                  <Route path='account' element = {<Account/>}/>
              </Route>
              <Route path='/add-user' element  = {<CreateUser data={{user,setUser}}/>}/>
              <Route path='/edit-user/:id' element = {<EditUser data={{user,setUser}}/>}/>
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
