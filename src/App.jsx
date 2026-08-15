import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import AboutPage from './pages/AboutPage'
import ApartmentDetailsPage from './pages/ApartmentDetailsPage'
import ApartmentsPage from './pages/ApartmentsPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import LocationsPage from './pages/LocationsPage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/apartments" element={<ApartmentsPage />} />
          <Route path="/apartments/:apartmentId" element={<ApartmentDetailsPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
