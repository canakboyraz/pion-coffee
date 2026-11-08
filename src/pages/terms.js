import Head from 'next/head'
import Link from 'next/link'
import PageHero from '../components/PageHero'

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Kullanım Şartları | Pion Coffee</title>
        <meta
          name="description"
          content="Pion Coffee web sitesi kullanım şartları ve koşulları."
        />
        <link rel="canonical" href="https://pioncoffee.com/terms" />
      </Head>

      <PageHero compact eyebrow="Yasal" title="Kullanım" accent="Şartları" />

      <section className="py-16 lg:py-24">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-4xl p-8 lg:p-12 shadow-[0_30px_60px_-40px_rgba(15,27,45,.5)] space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-3 text-coffee-900">1. Kabul</h2>
              <p className="text-coffee-700 leading-relaxed">
                Bu web sitesini kullanarak aşağıdaki kullanım şartlarını kabul etmiş 
                sayılırsınız. Bu şartları kabul etmiyorsanız lütfen sitemizi kullanmayınız.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-3 text-coffee-900">2. Hizmet Açıklaması</h2>
              <p className="text-coffee-700 leading-relaxed">
                Pion Coffee web sitesi, Kocaeli/Kartepe&apos;de faaliyet gösteren self-servis 
                kahve dükkanımız hakkında bilgi sunmak amacıyla oluşturulmuştur. 
                İletişim formu aracılığıyla bize ulaşabilirsiniz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-3 text-coffee-900">3. Fikri Mülkiyet</h2>
              <p className="text-coffee-700 leading-relaxed">
                Bu web sitesindeki tüm içerik, görseller, logolar ve materyaller 
                Pion Coffee&apos;ye aittir ve telif hakkıyla korunmaktadır. 
                İzinsiz kopyalanamaz veya kullanılamaz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-3 text-coffee-900">4. Sorumluluk Sınırlaması</h2>
              <p className="text-coffee-700 leading-relaxed">
                Web sitemizdeki bilgilerin doğruluğu için gereken özeni gösterilmektedir, 
                ancak eksiklik veya yanlışlıklardan kaynaklanabilecek zararlardan 
                sorumlu tutulamayız. Fiyatlar ve menü içerikleri önceden bildirilmeksizin 
                değişebilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-3 text-coffee-900">5. Değişiklikler</h2>
              <p className="text-coffee-700 leading-relaxed">
                Bu kullanım şartları herhangi bir zamanda güncellenebilir. 
                Güncel şartlar web sitemizde yayınlandığında yürürlüğe girer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-3 text-coffee-900">6. Uygulanacak Hukuk</h2>
              <p className="text-coffee-700 leading-relaxed">
                Bu şartlar Türkiye Cumhuriyeti kanunlarına tabidir. 
                Anlaşmazlık durumunda Kocaeli mahkemeleri yetkilidir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-3 text-coffee-900">7. İletişim</h2>
              <p className="text-coffee-700 leading-relaxed">
                Kullanım şartlarıyla ilgili sorularınız için{' '}
                <a href="mailto:info@pioncoffee.com" className="text-primary-500 hover:text-primary-600 underline">
                  info@pioncoffee.com
                </a>{' '}
                adresinden bize ulaşabilirsiniz.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/" className="btn-coffee text-lg px-8 py-4">
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
