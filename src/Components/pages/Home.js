import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import banner1 from '../Images/banner1.jpg'
import banner2 from '../Images/banner2.jpg'
import banner3 from '../Images/banner3.jpg'


const Home = () => {
    return (
        <div className='lg:px-24 px-4 lg:h-[86.2vh] bg-indigo-500 flex justify-center items-center'>
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
                            <h2 className='lg:text-6xl text-2xl font-bold'>We Are Qualified & Professional</h2>
                            <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nisi et tempore accusantium modi sit dolor ipsum maiores illo! Tempora quasi asperiores vitae enim minus!</p>
                            <button className='bg-indigo-600 px-6 py-2 text-white rounded mt-4 font-bold'>Discover More</button>
                        </div>
                        <div>
                            <div className='flex lg:justify-end justify-center'>
                                <img className='image rounded' src={banner1} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 items-center'>
                        <div className='lg:-order-none order-6'>
                            <h2 className='lg:text-6xl text-2xl font-bold'>100% Best Quality Car Services</h2>
                            <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nisi et tempore accusantium modi sit dolor ipsum maiores illo! Tempora quasi asperiores vitae enim minus!</p>
                            <button className='bg-indigo-600 px-6 py-2 text-white rounded mt-4 font-bold'>Discover More</button>
                        </div>
                        <div>
                            <div className='flex lg:justify-end justify-center'>
                                <img className='image rounded' src={banner2} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 items-center'>
                        <div className='lg:-order-none order-6'>
                            <h2 className='lg:text-6xl text-2xl font-bold'>Car is serviced by experts Persons.</h2>
                            <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nisi et tempore accusantium modi sit dolor ipsum maiores illo! Tempora quasi asperiores vitae enim minus!</p>
                            <button className='bg-indigo-600 px-6 py-2 text-white rounded mt-4 font-bold'>Discover More</button>
                        </div>
                        <div>
                            <div className='flex lg:justify-end justify-center'>
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