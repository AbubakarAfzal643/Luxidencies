import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AboutPage from './pages/AboutPage'
import ApartmentDetailsPage from './pages/ApartmentDetailsPage'
import ApartmentsPage from './pages/ApartmentsPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import LocationsPage from './pages/LocationsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
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
