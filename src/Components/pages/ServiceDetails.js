import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const param = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`service.json`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [param.id])
    return (
        <div>
            <h1>Services details {param.id}</h1>
            <h2>details length: {details.length}</h2>
        </div>
    );
};

export default ServiceDetails;