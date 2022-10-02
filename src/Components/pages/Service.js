import React from 'react';

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    return (
        <div className='border rounded p-1 mt-[32px]'>
            <div>
                <img className='rounded' src={img} alt="" />
            </div>
            <h1 className='text-xl'>{name}</h1>
            <p>Price: ${price}</p>
            <button className='bg-gradient text-white py-1 mt-2 rounded w-full'>Details</button>
        </div>
    );
};

export default Service;