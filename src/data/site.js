// Tüm iletişim / işletme bilgileri tek yerde. Bir şey değişirse sadece burayı güncelleyin.
export const site = {
  name: 'Pion Coffee',
  tagline: 'Self-Servis Kahve',
  location: 'Kartepe / Kocaeli',
  url: 'https://pioncoffee.com',
  logo: 'https://i.ibb.co/DDngbP1N/P-on-logo-3-01.png',
  cafePhoto: 'https://i.ibb.co/dwN72fVx/Kafe-G-rsel.jpg',
  address: 'Hemşire Sokak No: 9, Dumlupınar Mahallesi, Kartepe, Kocaeli',
  addressShort: 'Hemşire Sk. No: 9, Dumlupınar Mah., Kartepe',
  phoneDisplay: '0507 499 87 85',
  phoneTel: '+905074998785',
  whatsapp: 'https://wa.me/905074998785',
  whatsappNumber: '905074998785',
  email: 'info@pioncoffee.com',
  instagram: 'https://instagram.com/pioncoffee',
  facebook: 'https://facebook.com/pioncoffee',
  mapsLink: 'https://maps.app.goo.gl/CD9CRd66SH4kEc626?g_st=iw',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.2072!2d30.0267!3d40.7611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPion%20Coffee!5e0!3m2!1str!2str!4f0!5f0!5f0!5m2!1e1!1u!1e1!1e3!3m1!1e1',
  // menu.json'daki fiyatlar güncel değilse false bırakın; güncelleyince true yapın.
  showPrices: false,
  // Hero'da gerçek bir video kullanmak için: dosyayı public/videos/hero.mp4 olarak ekleyip
  // aşağıyı '/videos/hero.mp4' yapın. null iken animasyonlu kahve sahnesi gösterilir.
  heroVideo: null,
  hours: {
    label: 'Her gün',
    opens: '10:00',
    closes: '24:00',
    // schema.org için
    schemaOpens: '10:00',
    schemaCloses: '23:59',
  },
}

export const menuBoards = [
  { name: 'Sıcak Kahveler', src: 'https://i.ibb.co/NgkVCvHL/S-cak.jpg' },
  { name: 'Soğuk İçecekler', src: 'https://i.ibb.co/84jP24TD/Soguk.jpg' },
  { name: 'Matcha', src: 'https://i.ibb.co/FbhLhMtq/Macha.jpg' },
  { name: 'Yiyecek & İçecek', src: 'https://i.ibb.co/SXJ1xzkr/yiyecek-icecek.jpg' },
]

export const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/qr-menu', label: 'Menü' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/iletisim', label: 'İletişim' },
]
