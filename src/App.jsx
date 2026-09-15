import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingBottomNav from './components/FloatingBottomNav'
import Home from './pages/Home'
import BarberStudio from './pages/BarberStudio'
import SpaWellness from './pages/SpaWellness'
import ServicesMenu from './pages/ServicesMenu'
import Dining from './pages/Dining'
import Loader from './components/Loader'

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false)

  useEffect(() => {
    const MIN_DISPLAY = 1800 // ms — minimum time the loader is visible

    const minTimer = new Promise(resolve => setTimeout(resolve, MIN_DISPLAY))

    const windowLoad = new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve()
      } else {
        window.addEventListener('load', resolve, { once: true })
      }
    })

    // Dismiss loader only after BOTH the page is fully loaded AND the minimum time has elapsed
    Promise.all([minTimer, windowLoad]).then(() => {
      setIsAppReady(true)
    })
  }, [])

  return (
    <BrowserRouter>
      <Loader ready={isAppReady} />
      <Navbar />
      <main style={{ paddingTop: '5rem', backgroundColor: 'var(--surface-dark)', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/barber" element={<BarberStudio />} />
          <Route path="/spa" element={<SpaWellness />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/services" element={<ServicesMenu />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <FloatingBottomNav />
    </BrowserRouter>
  )
}
