import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ServiceDetails = () => {
    const param = useParams();
    // const [details, setDetails] = useState([]);
    // useEffect(() => {
    //     fetch(`service.json/${param.id}`)
    //         .then(res => res.json())
    //         .then(data => setDetails(data))
    // }, [])
    
    return (
        <div className='lg:px-24 px-4'>
            <h1 className='text-2xl'>Services details {param.id}</h1>
        </div>
    );
};

export default ServiceDetails;