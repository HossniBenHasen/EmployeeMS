import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./Components/login.jsx"
import {BrowserRouter,Route, Router, Routes} from "react-router-dom";
import Dashboard from "./Components/Dashboard.jsx";
import Home from "./Components/Home.jsx";
import Employee from "./Components/Employee.jsx";
import Manage from "./Components/Manage.jsx";
import Category from "./Components/Category.jsx";
import Profile from "./Components/Profile.jsx";
import AddCategory from "./Components/AddCategory.jsx";
import AddEmployee from "./Components/AddEmployee.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/adminlogin" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />}>
                  <Route index element={<Home />} />
                  <Route path="employee" element={<Employee />} />
                  <Route path="manage" element={<Manage />} />
                  <Route path="category" element={<Category />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="/dashboard/add_category" element={<AddCategory />} />
                  <Route path="/dashboard/add_employee" element={<AddEmployee />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
