import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='lg:px-24 px-4 lg:py-10 py-6 bg-gray-50'>
            <h1 className='text-center text-4xl font-bold text-gray-800'>Our Services</h1>
            <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-x-8 gap-x-4'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;