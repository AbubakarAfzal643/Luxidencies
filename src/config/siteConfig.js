export const siteConfig = {
  websiteName: 'Luxidency',
  tagline: 'Premium apartment stays for modern travelers.',
  phoneNumber: '+92 307 3811119',
  alternatePhoneNumber: '+92 317 2013143',
  emailAddress: 'luxidency@gmail.com',
  whatsappNumber: '+92 307 3811119',
  defaultWhatsAppMessage: 'Hello, I am interested in booking an apartment. Please inform me about the next steps !',
  baseServiceFee: 3500,
  address: 'City Center, Pakistan',
  socialLinks: {
    instagram: '#',
    facebook: '#',
  },
}

export const buildWhatsAppUrl = () => {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^\d]/g, '')
  const message = encodeURIComponent(siteConfig.defaultWhatsAppMessage)
  return `https://wa.me/${cleanNumber}?text=${message}`
}
