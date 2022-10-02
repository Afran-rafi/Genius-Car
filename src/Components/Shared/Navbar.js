import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../Images/logo.png'

const Navbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
        { name: "Expert", link: "/expert" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='sticky shadow-md top-0 left-0 z-50 font-[Poppins] py-6 text-center bg-gradient lg:px-24 px-4'>
            <div className='flex items-center justify-between'>
                <div className='cursor-pointer'>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div onClick={() => setOpen(!open)} className='text-2xl absolute right-6 top-6 cursor-pointer lg:hidden text-white'>
                    <i className={`${open ? 'fa-solid fa-x' : 'fa-solid fa-bars'}`}></i>
                </div>
                <ul className={`lg:flex lg:items-center lg:pb-0 pb-8 absolute lg:static bgg lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-7 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100' : 'top-[-490px] opacity-0'} lg:opacity-100`}>
                    {
                        Links.map(link => <li
                            className='px-4 text-xl lg:my-0 my-5 text-white'
                            key={link.name}>
                            <NavLink className='navbar-animation' to={link.link}>{link.name}</NavLink>
                        </li>)
                    }

                    <li className="px-4 text-xl text-white"><Link to='/login'>Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;