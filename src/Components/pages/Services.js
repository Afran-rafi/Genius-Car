import React from 'react';
import useServices from '../Hooks/useServices';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useServices();
    return (
        <div className='lg:px-24 px-4 lg:py-10 py-6 bg-gray-50'>
            <h1 className='text-center text-4xl font-bold text-gray-800'>Our Services</h1>
            <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-x-4 gap-x-4'>
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