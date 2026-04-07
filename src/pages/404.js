import Link from 'next/link'
import Head from 'next/head'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Sayfa Bulunamadı | Pion Coffee</title>
        <meta name="description" content="Aradığınız sayfa bulunamadı." />
      </Head>

      <section className="min-h-screen flex items-center justify-center bg-cream-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-9xl lg:text-[200px] font-serif font-bold text-primary-500 mb-4 animate-fade-in">
            404
          </h1>
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-coffee-900 mb-6">
            Sayfa Bulunamadı
          </h2>
          <p className="text-coffee-700 text-lg mb-10 max-w-xl mx-auto">
            Üzgünüz, aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-coffee text-lg px-8 py-4">
              Ana Sayfaya Dön
            </Link>
            <Link href="/menu" className="btn-secondary text-lg px-8 py-4">
              Menüyü Görün
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
