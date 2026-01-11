import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import getBaseUrL from '../util/baseURL';
export const AdminLogin = () => {
       const [message, setMessage] = useState("");
        const {
            register,
            handleSubmit,
            watch,
            formState: {errors},
        } = useForm()
        const navigate = useNavigate();
     const onSubmit = async(data) => {
        console.log(data)
        try {
              const response=await axios.post(`${getBaseUrL()}/api/auth/admin`, data, {
                 headers: {
                    'Content-Type': 'application/json'
                 }
              })
              const auth=response.data;
              if(auth.token) {
                localStorage.setItem('token', auth.token);
                alert("Admin login successful!");
                navigate("/dashboard");
                setTimeout( () => {
                    localStorage.removeItem('token');
                    alert('Token has been expired!, Please login again.')
                    navigate("/")
                }, 3600*1000)
              }
        }
    
        catch (error) {
            setMessage("Please provide a valid email and password")
            console.error(error)
        }
    }
  return (
      <div className='h-[calc(100vh-120px)] flex items-center justify-center font-primary'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-5 max-w-sm w-full mx-auto'>
               <h2 className='font-semibold text-xl mb-4 font-primary'>Admin Dashboard Login</h2>
               <div>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                    <label htmlFor="" className='block text-gray-700 font-bold text-sm mb-2'>Username</label>
                    <input {...register("username", {required: true})} type="username" name="username" placeholder='Username' className='shadow appearance-none font-secondary border w-full rounded focus:outline-none  focus:shadow py-2 px-3 leading-tight'/>
                    </div>
                        <div className='mb-4'>
                       <label htmlFor="" className='block text-gray-700 font-bold text-sm mb-2'>Password</label>
                    <input {...register("password", {required: true})} type="password" name="password" placeholder='Password' className='shadow appearance-none border rounded  focus:outline-none focus:shadow py-2 px-3 w-full leading-tight'/>
                    </div>
                    {
                        message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                    }
                    <div className='w-full'> 
                        <button type='submit' className='bg-blue-500 w-full hover:bg-blue-700 hover:outline-none px-6 py-2 text-white font-bold rounded'>Login</button>
                    </div>
                </form>
                    <p className='flex items-center text-sm mt-5 text-gray-500 justify-center'>&copy;2025 Book Store. All rights reserved.</p>
               </div>
        </div>
    </div>
  )
}
