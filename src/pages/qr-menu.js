import Head from 'next/head'
import Link from 'next/link'
import menuData from '../data/menu.json'

export default function QrMenuPage() {
  const menuUrl = 'https://pioncoffee.com/menu'

  // Tüm ürünleri düz liste olarak al
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
        <div className="text-center mb-6">
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

        {/* QR Code */}
        <div className="bg-white p-4 rounded-xl shadow-md mx-auto max-w-xs mb-6">
          <img
            src={`https://chart.googleapis.com/chart?cht=qr&chs=220x220&chl=${encodeURIComponent(menuUrl)}&choe=UTF-8&chld=L|0`}
            alt="QR Kod"
            width={220}
            height={220}
            className="mx-auto"
          />
          <p className="text-center text-coffee-600 text-xs mt-2">
            Menüyü görmek için tarayın
          </p>
        </div>

        {/* Ürün Listesi */}
        <div className="max-w-lg mx-auto">
          <h2 className="text-lg font-semibold text-coffee-900 mb-4 text-center">
            Kahvelerimiz
          </h2>
          
          <div className="space-y-3">
            {allItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex">
                {/* Görsel */}
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bilgi */}
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
