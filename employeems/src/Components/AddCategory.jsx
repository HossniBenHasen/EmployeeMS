import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
    const [category, setCategory] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/Auth/add_category', { category })
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/category');
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='card p-3 rounded w-25 border'>
                <h2 className='text-center mb-4'><i className='bi bi-plus-square'></i> Add Category</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="category" className='form-label'><strong>Category:</strong></label>
                        <div className='input-group'>
                            <span className='input-group-text'>
                                <i className='bi bi-tags'></i>
                            </span>
                            <input
                                type="text"
                                name="category"
                                autoComplete='off'
                                placeholder='Enter category'
                                className='form-control rounded-0'
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className='btn btn-success w-100 rounded-0'><i className='bi bi-check'></i> Add Category</button>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
