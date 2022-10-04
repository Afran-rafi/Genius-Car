import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;

    const navigate = useNavigate();
    const handleDetails = (id) => {
        navigate(`/services/${id}`);
    }
    return (
        <div className='border rounded p-1 mt-[16px]'>
            <div>
                <img className='rounded' src={img} alt="" />
            </div>
            <h1 className='text-xl'>{name}</h1>
            <p>Price: ${price}</p>
            <button onClick={() => handleDetails(id)} className='bg-[#ff136f] text-white py-1 mt-2 rounded w-full'>Details</button>
        </div>
    );
};

export default Service;