import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, FormControl, Button, Table, Pagination } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';

const Employee = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/auth/employee')
            .then(result => {
                if (result.data.Result) {
                    setEmployee(result.data.Result);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between mb-4">
                <div>
                    <h1 className="display-4 text-primary">Employees List</h1>
                    <p className="lead">Effortlessly manage your employee records.</p>
                </div>

            </div>
            <div className="card shadow border-0">
                <div className="d-flex align-items-center bg-light p-3">
                    <Link to="/dashboard/add_employee" className="btn btn-success ml-2">
                        <i className="bi bi-person-plus"></i> Add Employee
                    </Link>
                </div>
                <div className="table-responsive">

                    <Table className="table-bordered table-custom">
                        <thead className="bg-primary text-white">
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                            <th>ID Number</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Contract</th>
                            <th>Salary</th>
                            <th>Entry Date</th>
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
                    </Table>
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Pagination.Item key={index}>{index + 1}</Pagination.Item>
                        ))}
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default Employee;
