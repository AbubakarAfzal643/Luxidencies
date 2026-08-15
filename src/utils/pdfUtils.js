import { jsPDF } from 'jspdf'
import { formatDate, getNights } from './dateUtils'
import { formatCurrency } from './formatters'

const line = (doc, x, y, text, options = {}) => {
  doc.setFontSize(options.size ?? 11)
  doc.setTextColor(...(options.color ?? [20, 20, 20]))
  doc.text(text, x, y)
}

export const generateBookingPdf = ({ booking, apartment, siteConfig }) => {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  const accent = [179, 137, 63]
  const black = [18, 18, 18]
  const gray = [92, 92, 92]

  doc.setFillColor(245, 245, 245)
  doc.rect(0, 0, 595, 80, 'F')
  doc.setFillColor(...accent)
  doc.rect(40, 32, 30, 30, 'F')
  doc.setFont('helvetica', 'bold')
  line(doc, 80, 45, 'LUXIDENCY STAYS', { size: 17, color: black })
  line(doc, 80, 62, 'APARTMENT BOOKING PLAN', { size: 10, color: gray })

  let y = 110
  const section = (title) => {
    doc.setDrawColor(220, 220, 220)
    doc.line(40, y - 12, 555, y - 12)
    doc.setFont('helvetica', 'bold')
    line(doc, 40, y, title, { size: 11, color: accent })
    y += 18
    doc.setFont('helvetica', 'normal')
  }

  section('BOOKING')
  line(doc, 40, y, `Apartment: ${apartment.name}`)
  y += 16
  line(doc, 40, y, `Location: ${apartment.location}`)
  y += 16
  line(doc, 40, y, `Booking Reference: ${booking.reference}`)
  y += 24

  section('GUEST INFORMATION')
  line(doc, 40, y, `Guest Name: ${booking.fullName}`)
  y += 16
  line(doc, 40, y, `Email: ${booking.email}`)
  y += 16
  line(doc, 40, y, `Phone: ${booking.phone}`)
  y += 16
  line(doc, 40, y, `Number of Guests: ${booking.guests}`)
  y += 24

  section('STAY DETAILS')
  const nights = getNights(booking.checkIn, booking.checkOut)
  line(doc, 40, y, `Check-in: ${formatDate(booking.checkIn)}`)
  y += 16
  line(doc, 40, y, `Check-out: ${formatDate(booking.checkOut)}`)
  y += 16
  line(doc, 40, y, `Number of Nights: ${nights}`)
  y += 24

  section('PRICE SUMMARY')
  line(doc, 40, y, `Price per Night: ${formatCurrency(booking.pricePerNight)}`)
  y += 16
  line(doc, 40, y, `Subtotal: ${formatCurrency(booking.subtotal)}`)
  y += 16
  line(doc, 40, y, `Service Fee: ${formatCurrency(booking.serviceFee)}`)
  y += 16
  doc.setFont('helvetica', 'bold')
  line(doc, 40, y, `Total: ${formatCurrency(booking.total)}`, { color: black })
  doc.setFont('helvetica', 'normal')
  y += 24

  section('IMPORTANT INFORMATION')
  line(doc, 40, y, 'Check-in starts at 3:00 PM. Please carry valid ID at arrival.')
  y += 16
  line(doc, 40, y, 'Apartment rules apply throughout your stay.')
  y += 16
  line(doc, 40, y, `Contact: ${siteConfig.phoneNumber}`)
  y += 16
  line(doc, 40, y, `Email: ${siteConfig.emailAddress}`)
  y += 32

  doc.setFont('helvetica', 'italic')
  line(doc, 40, y, 'Thank you for choosing us.', { color: gray })

  doc.save(`booking-plan-${booking.reference}.pdf`)
}
