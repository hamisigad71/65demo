import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingBottomNav from './components/FloatingBottomNav'
import Home from './pages/Home'
import BarberStudio from './pages/BarberStudio'
import SpaWellness from './pages/SpaWellness'
import ServicesMenu from './pages/ServicesMenu'
import Dining from './pages/Dining'

export default function App() {
  return (
    <BrowserRouter>
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
