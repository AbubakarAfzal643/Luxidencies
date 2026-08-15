import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WhatsAppButton from '../components/WhatsAppButton'

function MainLayout() {
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    const cursor = document.getElementById('luxury-cursor')
    const handlePointerMove = (event) => {
      if (!cursor) return
      cursor.style.opacity = '1'
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
    }

    const handlePointerLeave = () => {
      if (!cursor) return
      cursor.style.opacity = '0'
    }

    const handleScroll = () => {
      setIsFooterVisible(window.scrollY > 120)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div id="luxury-cursor" className="luxury-cursor" aria-hidden="true" />
      <Navbar />
      <main className="mx-auto w-full max-w-336 px-4 pb-12 pt-6 md:px-6">
        <Outlet />
      </main>
      <div className={`footer-reveal ${isFooterVisible ? 'visible' : ''}`}>
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  )
}

export default MainLayout
