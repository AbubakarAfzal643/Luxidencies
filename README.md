# Luxidency – Premium Apartment Booking Platform

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/AbubakarAfzal643/Luxidencies)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.2.0-646CFF?logo=vite)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.3.3-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

---

## 📱 Product Overview

**Luxidency** is a modern, premium apartment booking platform designed for travelers and professionals seeking comfortable, stylish, and convenient short-term accommodation in Pakistan's major cities.

### What is Luxidency?

Luxidency provides curated, high-quality apartment stays across Lahore, Islamabad, Murree, and other premium locations. We focus on:

- **Premium Comfort**: Thoughtfully designed apartments with modern amenities
- **Transparent Pricing**: Clear, upfront pricing with no hidden fees (₨14,500 PKR per night)
- **Guest-First Service**: Easy booking, responsive support, and reliable communication
- **Verified Listings**: Every property is inspected and verified for quality and cleanliness
- **Flexible Stays**: Perfect for weekend getaways, business travel, or extended stays

---

## ✨ Key Features

### For Guests
- 🏠 **Browse Premium Apartments** – Explore carefully curated listings across multiple cities
- 📅 **Easy Booking** – Simple date selection and instant confirmation
- 💰 **Transparent Pricing** – Fixed rates in PKR with optional PDF booking confirmation
- 📍 **Multiple Locations** – Lahore, Islamabad, Murree, and other premium areas
- ☎️ **Direct Contact** – WhatsApp support and multiple contact channels
- 🎯 **Search Filters** – Filter by location, price, and availability

### Technical Features
- ⚡ **Fast Performance** – Built with Vite for lightning-fast load times
- 📱 **Fully Responsive** – Optimized for mobile, tablet, and desktop
- 🎨 **Modern Design** – Premium black & white aesthetic with warm amber accents
- 🔄 **Real-time Updates** – Instant availability and booking confirmation
- 📄 **PDF Generation** – Download booking summaries as PDF documents
- 🌐 **SEO Optimized** – Better discoverability and search rankings

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19.2.8** | UI library for building interactive components |
| **Vite 8.2.0** | Lightning-fast build tool and dev server |
| **Tailwind CSS 4.3.3** | Utility-first CSS framework for responsive design |
| **React Router 7.18.2** | Client-side routing for seamless page navigation |
| **Lucide React 1.31.0** | Beautiful, lightweight icon library |
| **jsPDF & html2canvas** | PDF generation for booking confirmations |
| **date-fns** | Lightweight date manipulation library |
| **Lenis** | Smooth scrolling library for premium feel |

---

## 📦 Project Structure

```
luxidency/
├── src/
│   ├── pages/
│   │   ├── HomePage.jsx              # Landing page with hero and featured apartments
│   │   ├── ApartmentsPage.jsx        # Browse and search apartments
│   │   ├── LocationsPage.jsx         # Explore locations
│   │   ├── AboutPage.jsx             # About Luxidency
│   │   ├── ContactPage.jsx           # Contact information
│   │   └── NotFoundPage.jsx          # 404 error page
│   ├── components/
│   │   ├── Navbar.jsx                # Navigation header
│   │   ├── Hero.jsx                  # Hero section
│   │   ├── ApartmentGrid.jsx         # Apartment listing grid
│   │   ├── BookingCalendar.jsx       # Date picker for bookings
│   │   ├── BookingForm.jsx           # Booking form
│   │   ├── ContactSection.jsx        # Contact cards and CTA
│   │   ├── Footer.jsx                # Footer with links
│   │   └── PDFGenerator.jsx          # PDF export functionality
│   ├── layouts/
│   │   └── MainLayout.jsx            # App-wide layout wrapper
│   ├── hooks/
│   │   └── useBookings.js            # Custom hook for booking state
│   ├── services/
│   │   ├── apartmentService.js       # Apartment data logic
│   │   └── bookingService.js         # Booking operations
│   ├── data/
│   │   ├── apartments.js             # Apartment listings data
│   │   ├── locations.js              # Location information
│   │   └── initialBookings.js        # Mock booking data
│   ├── config/
│   │   └── siteConfig.js             # Global configuration
│   ├── utils/
│   │   ├── dateUtils.js              # Date manipulation utilities
│   │   ├── formatters.js             # Text formatting utilities
│   │   └── pdfUtils.js               # PDF generation utilities
│   ├── App.jsx                        # Main app component
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Global styles
├── public/
│   ├── Luxidency_Image.jpeg          # Brand image asset
│   └── favicon.ico
├── package.json                       # Dependencies and scripts
├── vite.config.js                    # Vite configuration
├── vercel.json                       # Vercel deployment config
├── .env.example                      # Environment variables template
├── .gitignore                        # Git ignore rules
└── README.md                         # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm 8+ installed
- Git for version control
- A code editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbubakarAfzal643/Luxidencies.git
   cd luxidency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` to see your app

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## 📊 Pricing

**Standard Rate**: ₨14,500 PKR per night

- Flexible booking terms
- No hidden charges
- Direct WhatsApp communication with support team

---

## 🌍 Available Locations

- Lahore (Various neighborhoods)
- Islamabad (Premium areas)
- Murree (Scenic hill station)
- Additional cities coming soon

Popular areas: Gulberg, MM Alam, DHA Phase III, DHA Phase VII, Johar Town, Bahria Town, Model Town

---

## 📞 Contact & Support

- **WhatsApp**: +92 300 1234567 / +92 317 2013143
- **Email**: Contact form available on website
- **Website**: [Your Vercel deployment URL]
- **Response Time**: Within 24 hours

---

## 🚀 Deployment

### Deploy to Vercel

Luxidency is optimized for Vercel deployment with automatic CI/CD:

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Vercel auto-detects Vite configuration
4. Every push to `main` deploys automatically

[Read detailed deployment guide](DEPLOYMENT.md)

**Live URL**: https://luxidency-xyz.vercel.app

---

## 🎨 Design & UX

### Design System
- **Colors**: Premium black, white, and warm amber (#B45309) accents
- **Typography**: Clean, modern sans-serif for readability
- **Spacing**: Generous margins and padding for premium feel
- **Animations**: Smooth, intentional transitions (no heavy animations)

### Responsive Breakpoints
- Mobile: 0px – 640px
- Tablet: 641px – 1024px
- Desktop: 1025px+

---

## 🔐 Security & Privacy

- Secure form handling with validation
- Protected booking data
- HTTPS enabled on all deployments
- Privacy policy and terms of service included

---

## 📈 Future Roadmap

- [ ] User authentication & account management
- [ ] Real-time availability sync
- [ ] Payment integration (credit cards, mobile wallets)
- [ ] Advanced search filters (amenities, price range)
- [ ] Guest reviews and ratings
- [ ] Host dashboard for property management
- [ ] Multi-language support (Urdu, English)
- [ ] Mobile app (iOS & Android)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Abubakar Afzal**
- GitHub: [@AbubakarAfzal643](https://github.com/AbubakarAfzal643)
- Email: [Your email]

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vite.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Router Docs](https://reactrouter.com)
- [Vercel Documentation](https://vercel.com/docs)

---

## 💬 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact via WhatsApp
- Email through the contact form

---

**Last Updated**: August 2026  
**Version**: 1.0.0  
**Status**: 🟢 Production Ready
