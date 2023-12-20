import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AddEmployee = () => {
    const [employee,setEmployee] = useState({
        first_name: '',
        last_name: '',
        position: '',
        id_card_number: '',
        contract: '',
        email: '',
        phone: '',
        adresse: '',
        salary: '',
        entry_date: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/add_employee',  {employee} )
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/employee');
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <form onSubmit={handleSubmit}>
                    <div className="col-md-8">
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4 text-success">Add New Employee</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="firstName" className="form-label">First Name *</label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="bi bi-person"></i>
                                                </span>
                                                <input type="text"
                                                       className="form-control"
                                                       id="firstName"
                                                       placeholder="First Name"
                                                       value={employee.first_name}
                                                       onChange={(e) => setEmployee({ ...employee, first_name: e.target.value })}                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="lastName" className="form-label">Last Name *</label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="bi bi-person"></i>
                                                </span>
                                                <input type="text"
                                                       className="form-control"
                                                       id="lastName"
                                                       placeholder="Last Name"
                                                       value={employee.last_name}
                                                       onChange={(e) => setEmployee({...employee,last_name : e.target.value})}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="position" className="form-label">Position *</label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i class="bi bi-person-arms-up"></i>
                                                </span>
                                                <select
                                                    className="form-select"
                                                    id="position"
                                                    value={employee.position}
                                                    onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
                                                >
                                                    <option value="" disabled>Select Position</option>
                                                    <option value="Developer">Developer</option>
                                                    <option value="Scrum Master">Scrum Master</option>
                                                    <option value="DevOps">DevOps</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="IdCardNumber" className="form-label">ID Card Number *</label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="bi bi-credit-card-2-front"></i>
                                                </span>
                                                <input
                                                       type="text"
                                                       className="form-control"
                                                       id="identiy"
                                                       placeholder="ID Card Number"
                                                       value={employee.id_card_number}
                                                       onChange={(e) => setEmployee({...employee,id_card_number : e.target.value})}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="contactType" className="form-label">Contact Type *</label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i class="bi bi-person-rolodex"></i>                                                </span>
                                                <select
                                                    className="form-select"
                                                    id="contactType"
                                                    value={employee.contract}
                                                    onChange={(e) => setEmployee({ ...employee, contract: e.target.value })}

                                                >
                                                    <option value="" disabled>Select Contact Type</option>
                                                    <option value="CDI">CDI</option>
                                                    <option value="CDD">CDD</option>
                                                    <option value="Internship">Internship</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email *</label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="bi bi-envelope"></i>
                                                </span>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Email"
                                                    value={employee.email}
                                                    onChange={(e) => setEmployee({...employee,email : e.target.value})}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Phone Number *</label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="bi bi-phone"></i>
                                                </span>
                                                <input
                                                       type="text"
                                                       minLength="10"
                                                       maxLength="10"
                                                       name="txtEmpPhone"
                                                       className="form-control"
                                                       id="phone"
                                                       placeholder="Phone Number"
                                                       value={employee.phone}
                                                       onChange={(e) => setEmployee({...employee,phone : e.target.value})}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="address" className="form-label">Address *</label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="bi bi-house"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="address"
                                                    placeholder="Address"
                                                    value={employee.adresse}
                                                    onChange={(e) => setEmployee({...employee,adresse : e.target.value})}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="salary" className="form-label">Salary *</label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="bi bi-currency-dollar"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="salary"
                                                    placeholder="Your Salary"
                                                    value={employee.salary}
                                                    onChange={(e) => setEmployee({...employee,salary : e.target.value})}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="entryDate" className="form-label">Entry Date *</label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="bi bi-calendar"></i>
                                                </span>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="entryDate"
                                                    value={employee.entry_date}
                                                    onChange={(e) => setEmployee({...employee,entry_date : e.target.value})}
                                                />
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="d-flex align-items-center justify-content-center">
                                    <button type="submit" className="btn btn-success align-items-center mt-2 pt-2 ">Add Employee</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmployee;
