import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../App.css'

import { Pagination, Navigation } from 'swiper/modules';
import { BookCard } from '../books/bookCard';
import { useFetchAllBooksQuery } from '../../redux/features/cart/booksApi';
export const Recommended = () => {
    
      const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
        const { data: books=[]} = useFetchAllBooksQuery();
      const filteredBooks = selectedCategory === "Choose a genre" ? books:books.filter(book => book.category === selectedCategory.toLowerCase());
  return (
    <div className='mx-auto px-4 lg:px-24'>
              <h2 className='font-semibold text-3xl text-secondary mb-6'>Recommended</h2>
                       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper mb-8"
      >
         { 
           filteredBooks.length > 0 && filteredBooks.slice(8,18).map((book, index) => (
            <SwiperSlide key={index}>
            <BookCard  book={book}  />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
