import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import New from '../../util/news.js'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import '../../App.css'
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
export const News = () => {

  return (
    <div className='mx-auto px-4 lg:px-24 py-16'>
           <h2 className='font-semibold text-3xl text-secondary mb-6'>News</h2>
              <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
            {
                New.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col sm:flex-row justify-between items-center mb-8'>
                                <div className='py-4'>
                                    <Link to='/'>
                                    <h3 className=' text-lg font-secondary font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                                    </Link>
                                    <div className='bg-primary w-12 h-2 mb-5'></div>
                                    <div>
                                        <p className='text-gray-600'>{item.description}</p>
                                    </div>
                                    </div>
                                    <div className='flex-shrink-0 '>
                                        <img src={item.image} alt="" className='w-full object-cover' />
                                    </div>
                            </div>
                        </SwiperSlide>
                ))
            }
      </Swiper>
    </div>
  )
}
