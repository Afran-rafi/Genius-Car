import React from 'react';
import Home from './Home';
import Services from './Services';
import Title from '../Shared/Title';

const HomePage = () => {
    return (
        <div>
            <Title title="Home"></Title>
            <Home></Home>
            <Services></Services>
        </div>
    );
};

export default HomePage;