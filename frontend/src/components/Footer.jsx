import React from 'react'
import logoBoook from '../assets/footer-logo.png'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
export const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10 px-4 md:px-24 overflow-x-hidden'>
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between max-w-full mb-5'>
            <div className='w-1/2 md:w-full'>
            <img src={logoBoook} alt="" className='w-36 mb-5' />
            <ul className='flex flex-col md:flex-row gap-4 font-secondary text-lg'>
            <li><a href="#home" className='hover:text-primary'>Home</a></li>
            <li><a href="#services" className='hover:text-primary'>Services</a></li>
            <li><a href="#about" className='hover:text-primary'>About Us</a></li>
            <li><a href="#contact" className='hover:text-primary'>Contact</a></li>
            </ul>
            </div>
        
            <div className='md:w-1/2 w-full flex flex-col items-center justify-center'>
                <div className='mb-4 pt-10'>
                    <p className='xl:text-nowrap text-base'>Subscribe to our newsletter to receive the latest updates, news, and offers!</p>
                </div>

                <div className='flex'>
                    <input type="email" placeholder='Enter your email' className='text-black input outline-none p-2.5 ps-4 xl:pe-48 2xl:pe-80'/> 
                    <button className='btn-primary sub'>Subscribe</button>
                </div>

            </div>
        </div>
            <div className='flex items-center flex-col md:flex-row justify-center md:justify-between border-t gap-2 border-gray-400 pt-4'>
                <ul className='flex flex-row items-center gap-4'>
                    <li><a href="#privacy" className='hover:text-primary'>Privacy Policy</a></li>
                     <li><a href="#termsofService" className='hover:text-primary'>Terms of Service</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <FaFacebook className='size-6'/>
                     <FaTwitter className='size-6'/>
                      <FaInstagram className='size-6'/>
                </div>
            </div>
    </footer>
  )
}
