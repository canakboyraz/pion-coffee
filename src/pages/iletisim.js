import Head from 'next/head'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function IletisimPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)
    console.log('Form data:', data)
    await new Promise((r) => setTimeout(r, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
    reset()
  }

  return (
    <>
      <Head>
        <title>İletişim | Pion Coffee</title>
        <meta
          name="description"
          content="Pion Coffee iletişim bilgileri. Kocaeli/Kartepe'deki kahve dükkanımıza ulaşın. WhatsApp, adres, çalışma saatleri."
        />
        <meta name="keywords" content="Pion Coffee iletişim, kahve dükkanı adres, Kartepe iletişim" />
        <link rel="canonical" href="https://pioncoffee.com/iletisim" />
      </Head>

      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-12 lg:py-16">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            İletişim
          </h1>
          <p className="text-cream-100 text-lg max-w-2xl">
            Bize ulaşın, sorularınızı yanıtlayalım. Sizi mekânımıza bekliyoruz.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-coffee-900">
                Bize Ulaşın
              </h2>

              {/* Contact Cards */}
              <div className="space-y-4 mb-10">
                <div className="bg-white rounded-xl p-5 shadow-md flex items-start gap-4">
                  <div className="text-primary-500 flex-shrink-0 mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-coffee-700 text-sm font-medium mb-1">Adres</p>
                    <p className="text-coffee-900 font-semibold">
                      Hemşire Sokak No: 9, Dumlupınar Mahallesi, Kartepe, Kocaeli
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-md flex items-start gap-4">
                  <div className="text-primary-500 flex-shrink-0 mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-coffee-700 text-sm font-medium mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/905074998785"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-coffee-900 font-semibold hover:text-primary-500 transition-colors duration-200"
                    >
                      0507 499 87 85
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-md flex items-start gap-4">
                  <div className="text-primary-500 flex-shrink-0 mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-coffee-700 text-sm font-medium mb-1">E-posta</p>
                    <a
                      href="mailto:info@pioncoffee.com"
                      className="text-coffee-900 font-semibold hover:text-primary-500 transition-colors duration-200"
                    >
                      info@pioncoffee.com
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-md flex items-start gap-4">
                  <div className="text-primary-500 flex-shrink-0 mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-coffee-700 text-sm font-medium mb-1">Çalışma Saatleri</p>
                    <p className="text-coffee-900 font-semibold">Her gün 07:00 – 22:00</p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://maps.google.com/maps?q=Hem%C5%9Fire+Sokak+No:9+Dumlup%C4%B1nar+Mahallesi+Kartepe+Kocaeli&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pion Coffee Konum"
                />
              </div>

              <a
                href="https://maps.google.com/?q=Hemsire+Sokak+No+9+Dumlupinar+Mahallesi+Kartepe+Kocaeli"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coffee mt-4 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Yol Tarifi Al
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-coffee-900">
                Mesaj Gönderin
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-semibold text-coffee-900 mb-2">
                    Teşekkürler!
                  </h3>
                  <p className="text-coffee-700">
                    Mesajınız başarıyla iletildi. En kısa sürede size dönüş yapacağız.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 btn-primary"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Ad Soyad */}
                  <div>
                    <label className="block text-coffee-900 font-medium mb-1.5">
                      Ad Soyad *
                    </label>
                    <input
                      {...register('name', { required: 'Ad soyad gereklidir' })}
                      type="text"
                      placeholder="Adınız ve soyadınız"
                      className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors bg-white ${
                        errors.name
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-coffee-200 focus:border-primary-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* E-posta */}
                  <div>
                    <label className="block text-coffee-900 font-medium mb-1.5">
                      E-posta *
                    </label>
                    <input
                      {...register('email', {
                        required: 'E-posta gereklidir',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Geçerli bir e-posta girin',
                        },
                      })}
                      type="email"
                      placeholder="ornek@email.com"
                      className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors bg-white ${
                        errors.email
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-coffee-200 focus:border-primary-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Telefon */}
                  <div>
                    <label className="block text-coffee-900 font-medium mb-1.5">
                      Telefon
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="+90 5XX XXX XX XX"
                      className="w-full px-4 py-3 rounded-lg border-2 border-coffee-200 focus:border-primary-500 outline-none transition-colors bg-white"
                    />
                  </div>

                  {/* Mesaj */}
                  <div>
                    <label className="block text-coffee-900 font-medium mb-1.5">
                      Mesaj *
                    </label>
                    <textarea
                      {...register('message', { required: 'Mesaj gereklidir', minLength: { value: 10, message: 'Mesaj en az 10 karakter olmalı' } })}
                      rows={5}
                      placeholder="Mesajınızı yazınız..."
                      className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors bg-white resize-none ${
                        errors.message
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-coffee-200 focus:border-primary-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-coffee w-full py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Gönderiliyor...
                      </span>
                    ) : (
                      'Mesajı Gönder'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
