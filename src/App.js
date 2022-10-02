import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/pages/HomePage';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className='2xl:container 2xl:mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
      </Routes>
    </div>
  );
}

export default App;
