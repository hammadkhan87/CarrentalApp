import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-zinc-100 bg-zinc-950'>
      <NavBar/>
      <main className='min-h-screen'>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>

      </main>
      <Footer/>
    </div>
  )
}

export default App
