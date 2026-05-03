import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import menuData from '../data/menu.json'

export default function QrMenuPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  const categoryImages = [
    {
      name: 'Sıcak Kahveler',
      src: 'https://i.ibb.co/NgkVCvHL/S-cak.jpg',
    },
    {
      name: 'Soğuk İçecekler',
      src: 'https://i.ibb.co/84jP24TD/Soguk.jpg',
    },
    {
      name: 'Maccha',
      src: 'https://i.ibb.co/FbhLhMtq/Macha.jpg',
    },
  ]

  const allItems = menuData.categories.flatMap(cat => cat.items)

  return (
    <>
      <Head>
        <title>QR Menü | Pion Coffee</title>
        <meta name="description" content="Pion Coffee QR menü - Kahvenizi sipariş etmek için tarayın." />
        <meta name="robots" content="noindex" />
      </Head>

      <section className="min-h-screen bg-cream-50 py-8 px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <img
            src="https://i.ibb.co/DDngbP1N/P-on-logo-3-01.png"
            alt="Pion Coffee Logo"
            className="w-16 h-16 mx-auto mb-2 rounded-full object-cover"
          />
          <h1 className="text-2xl font-serif font-bold text-coffee-900">
            Pion Coffee
          </h1>
          <p className="text-coffee-600 text-sm">Self-Servis Kahve • Kartepe</p>
        </div>

        {/* Kategori Görselleri - Tiklanabilir */}
        <div className="grid grid-cols-3 gap-2 max-w-lg mx-auto mb-6">
          {categoryImages.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(cat)}
              className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            >
              <img
                src={cat.src}
                alt={cat.name}
                className="w-full h-28 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-xs font-semibold text-center px-1">
                  {cat.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Ürün Listesi */}
        <div className="max-w-lg mx-auto">
          <h2 className="text-lg font-semibold text-coffee-900 mb-4 text-center">
            Kahvelerimiz
          </h2>
          
          <div className="space-y-3">
            {allItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex">
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex-1 flex flex-col justify-center">
                  <h3 className="font-semibold text-coffee-900 text-sm">
                    {item.name}
                  </h3>
                  <p className="text-coffee-600 text-xs line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-lg mx-auto mt-6 text-center">
          <p className="text-coffee-500 text-xs mb-2">
            Hemşire Sokak No: 9, Dumlupınar Mah., Kartepe
          </p>
          <p className="text-coffee-500 text-xs">
            WhatsApp: 0507 499 87 85
          </p>
        </div>

        {/* Print Button */}
        <div className="text-center mt-6 mb-4">
          <button
            onClick={() => window.print()}
            className="btn-coffee px-6 py-2 text-sm"
          >
            Yazdır
          </button>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="text-coffee-500 hover:text-coffee-700 text-xs underline"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </section>

      {/* Buyuk Resim Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <div className="max-w-3xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.name}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">
              {selectedImage.name}
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media print {
          body { background: white !important; }
          section { padding: 10px !important; }
          button { display: none !important; }
          a { display: none !important; }
          .shadow-md, .shadow-sm { box-shadow: none !important; }
          .bg-white { background: white !important; }
        }
      `}</style>
    </>
  )
}
