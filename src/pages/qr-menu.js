import Head from 'next/head'
import Link from 'next/link'

export default function QrMenuPage() {
  const menuUrl = 'https://pioncoffee.com/menu'

  return (
    <>
      <Head>
        <title>QR Menü | Pion Coffee</title>
        <meta name="description" content="Pion Coffee QR menü - Kahvenizi sipariş etmek için tarayın." />
        <meta name="robots" content="noindex" />
      </Head>

      <section className="min-h-screen bg-cream-50 flex flex-col items-center justify-center py-12 px-4">
        {/* Logo */}
        <div className="mb-8 text-center">
          <img
            src="https://i.ibb.co/DDngbP1N/P-on-logo-3-01.png"
            alt="Pion Coffee Logo"
            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
          />
          <h1 className="text-3xl font-serif font-bold text-coffee-900">
            Pion Coffee
          </h1>
          <p className="text-coffee-700">Kartepe / Kocaeli</p>
        </div>

        {/* QR Code */}
        <div className="bg-white p-6 rounded-2xl shadow-xl mb-8">
          <img
            src={`https://chart.googleapis.com/chart?cht=qr&chs=280x280&chl=${encodeURIComponent(menuUrl)}&choe=UTF-8&chld=L|0`}
            alt="Pion Coffee Menü QR Kodu"
            width={280}
            height={280}
            className="mx-auto"
          />
        </div>

        {/* Instructions */}
        <div className="text-center max-w-md">
          <h2 className="text-xl font-semibold text-coffee-900 mb-2">
            Menüyü Görmek İçin
          </h2>
          <p className="text-coffee-700 mb-4">
            QR kodu tarayın ve siparişinizi verin
          </p>
          <p className="text-coffee-500 text-sm">
            Kahvenizi tarayın, siparişinizi verin, bekleyin.
          </p>
        </div>

        {/* Print Button */}
        <button
          onClick={() => window.print()}
          className="mt-8 btn-coffee px-8 py-3"
        >
          Yazdır
        </button>

        {/* Back Link */}
        <Link
          href="/"
          className="mt-6 text-coffee-600 hover:text-coffee-800 underline text-sm"
        >
          Ana Sayfaya Dön
        </Link>
      </section>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          section, section * {
            visibility: visible;
          }
          section {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          button {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
