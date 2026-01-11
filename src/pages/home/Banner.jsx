import React from 'react'
import bannerImage from '../../assets/banner.png'
 const Banner = () => {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto px-4 lg:px-24 flex flex-col md:flex-row-reverse justify-between items-center py-16 gap-12'>
        <div className='w-full md:w-1/2 flex items-center md:justify-end'>
          <img src={bannerImage} alt="bannerImage" className='max-h-80' />
        </div>
        <div className='md:w-1/2 w-full'>
            <h1 className='text-black md:text-5xl text-3xl mb-7'>New Release This Week</h1> 
            <p className='text-lg mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this weekls new releases offer something for everyone</p>
            <button className='btn-primary'>Subscribe</button>
        </div>
    </div>
    </>
  )
}
export default Banner;
