export const siteConfig = {
  websiteName: 'Luxidencies',
  tagline: 'Premium apartment stays for modern travelers.',
  phoneNumber: '+92 307 3811119',
  alternatePhoneNumber: '+92 317 2013143',
  emailAddress: 'luxidency@gmail.com',
  whatsappNumber: '+92 307 3811119',
  defaultWhatsAppMessage: 'Hello, I would like to inquire about booking an apartment with Luxidencies. Please share the available options and next steps.',
  baseServiceFee: 3500,
  address: 'Lahore , Pakistan',
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
