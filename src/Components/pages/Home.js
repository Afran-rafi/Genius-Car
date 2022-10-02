import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import '../CSS/Home.css'

import banner1 from '../Images/banner1.jpg'
import banner2 from '../Images/banner2.jpg'
import banner3 from '../Images/banner3.jpg'


const Home = () => {
    return (
        <div className='lg:px-24 px-4 lg:h-[87vh] lg:py-0 py-8 bg-gradient flex justify-center items-center'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 items-center'>
                        <div className='lg:-order-none order-6'>
                            <h2 className='lg:text-6xl text-4xl font-bold text-gray-200'>We Are Qualified & Professional</h2>
                            <p className='mt-4 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nisi et tempore accusantium modi sit dolor ipsum maiores illo! Tempora quasi asperiores vitae enim minus!</p>
                            <button className='bg-[#ff136f] shadow-lg px-6 py-2 text-white rounded mt-4 font-bold'>Discover More <i className="fa-solid fa-car-side"></i></button>
                        </div>
                        <div>
                            <div className='flex lg:justify-end justify-center lg:mt-0'>
                                <img className='image rounded' src={banner1} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 items-center'>
                        <div className='lg:-order-none order-6'>
                            <h2 className='lg:text-6xl text-4xl font-bold text-gray-200'>100% Best Quality Car Services</h2>
                            <p className='mt-4 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nisi et tempore accusantium modi sit dolor ipsum maiores illo! Tempora quasi asperiores vitae enim minus!</p>
                            <button className='bg-[#ff136f] shadow-lg px-6 py-2 text-white rounded mt-4 font-bold'>Discover More <i className="fa-solid fa-car-side"></i></button>
                        </div>
                        <div>
                            <div className='flex lg:justify-end justify-center lg:mt-0'>
                                <img className='image rounded' src={banner2} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 items-center'>
                        <div className='lg:-order-none order-6'>
                            <h2 className='lg:text-6xl text-4xl font-bold text-gray-200'>Car is serviced by experts Persons.</h2>
                            <p className='mt-4 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nisi et tempore accusantium modi sit dolor ipsum maiores illo! Tempora quasi asperiores vitae enim minus!</p>
                            <button className='bg-[#ff136f] shadow-lg px-6 py-2 text-white rounded mt-4 font-bold'>Discover More <i className="fa-solid fa-car-side"></i></button>
                        </div>
                        <div>
                            <div className='flex lg:justify-end justify-center lg:mt-0'>
                                <img className='image rounded' src={banner3} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;