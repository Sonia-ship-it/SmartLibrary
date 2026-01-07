import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../App.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { BookCard } from '../books/bookCard';
import { useFetchAllBooksQuery } from '../../redux/features/cart/booksApi';
  const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];
export const TopSellers = () => {
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
  const { data: books=[]} = useFetchAllBooksQuery();

  // useEffect( () => {
  //   fetch("books.json")
  //   .then(res => res.json())
  //   .then( (data) => setBooks(data))
  // }, [ ]);
  const filteredBooks = selectedCategory === "Choose a genre" ? books:books.filter(book => book.category === selectedCategory.toLowerCase());
  return (    
    <div className='mx-auto px-4 lg:px-24'>   
        <h2 className='font-semibold text-3xl text-secondary mb-6'>Top Sellers</h2>
        <div className='flex items-center mb-8'>
            <select name="category" id="category" onChange={ (e) => setSelectedCategory(e.target.value) }  className='border bg-[#EAEAEA] border-gray-300 px-3 py-1 rounded-md focus:outline-none'>
            {
            categories.map((category, index)=>(
                <option value={category} key={index}>{category}</option>
            )
            )}
            </select>
        </div>
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
           filteredBooks.length > 0 && filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
            <BookCard  book={book} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
