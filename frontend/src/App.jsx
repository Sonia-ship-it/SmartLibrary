import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import {Footer}  from './components/Footer'
import { AuthProvide } from './context/AuthContext'
import './App.css'
import './index.css';

function App() {
  return (
    <>
    <AuthProvide>
    <main className='max-w-screen-2xl mx-auto'>
        <Navbar/>
        <Outlet />
        </main>
        <Footer />
        </AuthProvide>
    </>
  )
}

export default App
