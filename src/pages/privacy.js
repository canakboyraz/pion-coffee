import Head from 'next/head'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Gizlilik Politikası | Pion Coffee</title>
        <meta
          name="description"
          content="Pion Coffee gizlilik politikası. Kişisel verilerinizin korunması ve kullanımı hakkında bilgi."
        />
        <link rel="canonical" href="https://pioncoffee.com/privacy" />
      </Head>

      <section className="bg-primary-500 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Gizlilik Politikası
          </h1>
          <p className="text-cream-200">
            Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-xl p-8 lg:p-12 shadow-md">
            <h2 className="text-2xl font-serif font-bold mb-4 text-coffee-900">1. Giriş</h2>
            <p className="text-coffee-700 mb-6 leading-relaxed">
              Pion Coffee olarak kişisel verilerinizin gizliliğini ciddiye alıyoruz. 
              Bu politika, web sitemizi ziyaret ettiğinizde hangi bilgileri topladığımızı 
              ve nasıl kullandığımızı açıklar.
            </p>

            <h2 className="text-2xl font-serif font-bold mb-4 text-coffee-900">2. Toplanan Bilgiler</h2>
            <p className="text-coffee-700 mb-6 leading-relaxed">
              Web sitemizi ziyaret ettiğinizde şu bilgileri toplayabiliriz:
              iletişim formundan gönderdiğiniz isim, e-posta ve mesaj bilgileri; 
              site analitiği için anonim tarayıcı ve cihaz bilgileri.
            </p>

            <h2 className="text-2xl font-serif font-bold mb-4 text-coffee-900">3. Bilgilerin Kullanımı</h2>
            <p className="text-coffee-700 mb-6 leading-relaxed">
              Topladığımız bilgileri yalnızca sizinle iletişim kurmak, sorularınızı 
              yanıtlamak ve hizmet kalitemizi iyileştirmek için kullanırız. 
              Bilgilerinizi üçüncü taraflarla satmaz veya paylaşmayız.
            </p>

            <h2 className="text-2xl font-serif font-bold mb-4 text-coffee-900">4. Çerezler</h2>
            <p className="text-coffee-700 mb-6 leading-relaxed">
              Web sitemiz, kullanıcı deneyimini iyileştirmek için teknik çerezler 
              kullanabilir. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.
            </p>

            <h2 className="text-2xl font-serif font-bold mb-4 text-coffee-900">5. Veri Güvenliği</h2>
            <p className="text-coffee-700 mb-6 leading-relaxed">
              Kişisel verilerinizi yetkisiz erişime karşı korumak için gerekli teknik 
              ve idari önlemleri alıyoruz.
            </p>

            <h2 className="text-2xl font-serif font-bold mb-4 text-coffee-900">6. Haklarınız</h2>
            <p className="text-coffee-700 mb-6 leading-relaxed">
              KVKK kapsamında verilerinize erişim, düzeltme, silme ve itiraz haklarına 
              sahipsiniz. Talepleriniz için{' '}
              <a href="mailto:info@pioncoffee.com" className="text-primary-500 hover:text-primary-600 underline">
                info@pioncoffee.com
              </a>{' '}
              adresinden bize ulaşabilirsiniz.
            </p>

            <h2 className="text-2xl font-serif font-bold mb-4 text-coffee-900">7. İletişim</h2>
            <p className="text-coffee-700 mb-6 leading-relaxed">
              Gizlilik politikamız hakkında sorularınız için{' '}
              <a href="mailto:info@pioncoffee.com" className="text-primary-500 hover:text-primary-600 underline">
                info@pioncoffee.com
              </a>{' '}
              adresinden bize ulaşabilirsiniz.
            </p>
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
