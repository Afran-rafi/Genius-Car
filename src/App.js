import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/pages/HomePage';
import ServiceDetails from './Components/pages/ServiceDetails';
import Services from './Components/pages/Services';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className='2xl:container 2xl:mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/services/:id' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
      </Routes>
    </div>
  );
}

export default App;
