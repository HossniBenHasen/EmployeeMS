import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Employee = () => {
    const [employee, setEmployee] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/auth/employee')
            .then(result =>{
                if(result.data.Result){
                    setEmployee(result.data.Result);
                }else {
                    alert(result.data.Error);
                }
            }).catch(err => console.log(err))
    },[]);
    return (
        <div>
            <div className='px-5 mt-3'>
                <div className='d-flex justify-content-center'>
                    <h3>Employees List</h3>
                </div>
                <Link to="/dashboard/add_employee" className='btn btn-success'>Add Employee</Link>
            </div>
            <div className="card shadow border-0 mt-3">
                <div className="table-responsive">
                    <table className="table align-items-center mb-0 table-bordered">
                        <thead>
                        <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">First Name</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Last Name</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Position</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID Number</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Phone Number</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Adresse</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Contract</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Salary</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Entry Date</th>

                        </tr>
                        </thead>
                        <tbody>
                        {employee.map((c, index) => (
                            <tr key={index}>
                                <td>{c.id}</td>
                                <td>{c.first_name}</td>
                                <td>{c.last_name}</td>
                                <td>{c.position}</td>
                                <td>{c.id_card_number}</td>
                                <td>{c.email}</td>
                                <td>{c.phone}</td>
                                <td>{c.adresse}</td>
                                <td>{c.contract}</td>
                                <td>{c.salary}</td>
                                <td>{c.entry_date}</td>

                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Employee;
