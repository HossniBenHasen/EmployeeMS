import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Category = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/auth/category')
            .then(result =>{
                if(result.data.Result){
                    setCategory(result.data.Result);
                }else {
                    alert(result.data.Error);
                }
            }).catch(err => console.log(err))
    },[]);
    return (
        <div className='px-5 mt-3'>
            <div className='d-flex justify-content-center'>
                <h3>Category List</h3>
            </div>
            <Link to="/dashboard/add_category" className='btn btn-success'>Add Category</Link>
            <div className="card shadow border-0 mt-3">
                <div className="table-responsive">
                    <table className="table align-items-center mb-0 table-bordered">
                        <thead>
                        <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {category.map((c, index) => (
                            <tr key={index}>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Category;
