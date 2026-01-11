import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer'
import { AuthProvide } from './context/AuthContext'
import './App.css'
import './index.css';

function App() {
  return (
    <AuthProvide>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow max-w-screen-2xl mx-auto w-full">
          <Navbar />
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthProvide>
  )
}

export default App;
