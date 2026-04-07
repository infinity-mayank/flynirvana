import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

import HomePage from '@/pages/HomePage'
import LearnPage from '@/pages/LearnPage'
import CoursePage from '@/pages/CoursePage'
import TandemPage from '@/pages/TandemPage'
import HolidaysPage from '@/pages/HolidaysPage'
import CorporatePage from '@/pages/CorporatePage'
import AccommodationPage from '@/pages/AccommodationPage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import NotFoundPage from '@/pages/NotFoundPage'

export default function App() {
  const { pathname } = useLocation()

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn-paragliding" element={<LearnPage />} />
          <Route path="/learn-paragliding/:courseSlug" element={<CoursePage />} />
          <Route path="/tandem-paragliding" element={<TandemPage />} />
          <Route path="/paragliding-holidays" element={<HolidaysPage />} />
          <Route path="/corporate-adventures" element={<CorporatePage />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
