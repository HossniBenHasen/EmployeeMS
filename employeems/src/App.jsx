import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./Components/login.jsx"
import {BrowserRouter,Route, Router, Routes} from "react-router-dom";
import Dashboard from "./Components/Dashboard.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/adminlogin' element={<Login />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
