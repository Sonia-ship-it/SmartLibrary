import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
export const Register = () => {
        const [message, setMessage] = useState("");
        const {registerUser, signInWithGoogle} = useAuth();
        const {
            register,
            handleSubmit,
            watch,
            formState: {errors},
        } = useForm()
        const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("Login successful!")
            navigate("/")
        }
        catch (error) {
            alert("Google sign in failed")
            console.log(error)
        }
    }
        const onSubmit = async(data) => {
          try {
            await registerUser(data.email, data.password);
            alert("User registered successfully!")
          }
          catch(error) {
            setMessage("Please provide a valid email and passsword");
            console.error(error)
          }
        }
  return (
        <div className='h-[calc(100vh-120px)] flex items-center justify-center font-primary'>
            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-5 max-w-sm w-full mx-auto'>
                   <h2 className='font-semibold text-xl mb-4 font-primary'>Please Register</h2>
                   <div>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-4'>
                        <label htmlFor="" className='block text-gray-700 font-bold text-sm mb-2'>Email</label>
                        <input {...register("email", {required: true})} type="email" name="email" placeholder='Email Address' className='shadow appearance-none font-secondary border w-full rounded focus:outline-none  focus:shadow py-2 px-3 leading-tight'/>
                        </div>
                            <div className='mb-4'>
                           <label htmlFor="" className='block text-gray-700 font-bold text-sm mb-2'>Password</label>
                        <input {...register("password", {required: true})} type="password" name="password" placeholder='Password' className='shadow appearance-none border rounded  focus:outline-none focus:shadow py-2 px-3 w-full leading-tight'/>
                        </div>
                        {
                            message && <p className='text-red-500 text-xs  mb-3'>{message}</p>
                        }
                        <div> 
                            <button className='bg-blue-500 hover:bg-blue-700 hover:outline-none px-6 py-2 text-white font-bold rounded'>Register</button>
                        </div>
                    </form>
                            <p className='align-baseline mt-4  mb-4 font-medium'>Have an account? Please <Link to="/login" className='text-blue-500 hover:text-blue-700'>Login</Link></p>
                        <div>
                            <button className='bg-secondary hover:bg-blue-700 text-white font-bold flex gap-4 py-2 px-4 items-center justify-center w-full rounded' onClick={() => handleGoogleSignIn()}>
                            <FaGoogle />
                            Sign in with Google
                            </button>
                        </div>
                        <p className='flex items-center text-sm mt-5 text-gray-500 justify-center'>&copy;2025 Book Store. All rights reserved.</p>
                   </div>
            </div>
        </div>
  )
}
