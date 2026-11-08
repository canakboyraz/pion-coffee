import { useState } from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { site } from '../data/site'
import PageHero from '../components/PageHero'
import OpenStatus from '../components/OpenStatus'
import { Reveal, trackSpotlight } from '../components/motion'
import { MapPin, WhatsApp, Mail, Clock, ArrowUpRight, Send } from '../components/Icons'

const cards = [
  { Icon: MapPin, label: 'Adres', value: site.address, href: site.mapsLink, external: true },
  { Icon: WhatsApp, label: 'WhatsApp', value: site.phoneDisplay, href: site.whatsapp, external: true },
  { Icon: Mail, label: 'E-posta', value: site.email, href: `mailto:${site.email}` },
  { Icon: Clock, label: 'Çalışma saatleri', value: `${site.hours.label} ${site.hours.opens} – ${site.hours.closes}`, status: true },
]

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-ink-700">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-sm text-rose-500">{error}</span>}
    </label>
  )
}

const inputCls = (err) =>
  `w-full rounded-2xl border bg-foam/60 px-4 py-3.5 text-ink-900 outline-none transition placeholder:text-ink-300 focus:bg-white focus:ring-4 ${
    err ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-100' : 'border-ink-900/10 focus:border-caramel-400 focus:ring-caramel-100'
  }`

export default function IletisimPage() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  // Form bir sunucuya bağlı değil: mesaj WhatsApp'ta hazır metin olarak açılır.
  const onSubmit = (data) => {
    const text = [`Merhaba Pion Coffee, ben ${data.name}.`, data.message, data.phone ? `Telefon: ${data.phone}` : ''].filter(Boolean).join('\n\n')
    window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
    reset()
  }

  return (
    <>
      <Head>
        <title>İletişim | Pion Coffee</title>
        <meta name="description" content="Pion Coffee iletişim: Kartepe/Kocaeli adresimiz, WhatsApp hattımız, çalışma saatlerimiz ve yol tarifi." />
        <link rel="canonical" href={`${site.url}/iletisim/`} />
      </Head>

      <PageHero compact eyebrow="İletişim" title="Bir kahve" accent="uzağındayız." description="Sorunuz, öneriniz ya da toplu siparişiniz mi var? Yazın, hemen dönelim.">
        <Reveal delay={600} className="mt-8">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
            <OpenStatus />
          </span>
        </Reveal>
      </PageHero>

      <section className="relative -mt-10 pb-10">
        <div className="container-custom grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ Icon, label, value, href, external, status }, i) => {
            const inner = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-caramel-300 transition duration-500 group-hover:-rotate-12 group-hover:bg-caramel-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="mt-6 block text-xs font-bold uppercase tracking-[0.18em] text-ink-300">{label}</span>
                <span className="mt-1 block font-semibold leading-snug text-ink-900">{value}</span>
                {status && <OpenStatus className="mt-3 text-sm text-ink-500" />}
                {href && <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-ink-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-caramel-500" />}
              </>
            )
            const cls = 'spotlight card-hover group relative block h-full rounded-4xl bg-white p-6 shadow-[0_20px_50px_-35px_rgba(15,27,45,.6)]'
            return (
              <Reveal key={label} delay={i * 90}>
                {href ? (
                  <a href={href} onMouseMove={trackSpotlight} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {inner}
                  </a>
                ) : (
                  <div onMouseMove={trackSpotlight} className={cls}>
                    {inner}
                  </div>
                )}
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="pb-24 pt-10 lg:pb-32">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-5xl bg-ink-100">
              <iframe
                src={site.mapsEmbed}
                className="absolute inset-0 h-full w-full grayscale-[50%]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pion Coffee konum"
              />
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-caramel absolute bottom-5 left-5">
                <MapPin className="h-4 w-4" /> Yol tarifi al
              </a>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="rounded-5xl bg-white p-8 shadow-[0_30px_60px_-40px_rgba(15,27,45,.6)] sm:p-10">
              <h2 className="display text-4xl text-ink-900 sm:text-5xl">
                Mesaj <span className="italic text-caramel-500">gönderin</span>
              </h2>
              <p className="mt-3 text-ink-500">Mesajınız WhatsApp&apos;ta hazır olarak açılır, tek dokunuşla gönderirsiniz.</p>

              {sent ? (
                <div className="pop-in mt-10 rounded-4xl bg-emerald-50 p-8 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Send className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-ink-900">WhatsApp açıldı</h3>
                  <p className="mt-2 text-ink-500">Mesajınızı orada göndermeyi unutmayın. Teşekkürler!</p>
                  <button type="button" onClick={() => setSent(false)} className="btn btn-ghost-dark mt-6">
                    Yeni mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Ad Soyad *" error={errors.name?.message}>
                      <input {...register('name', { required: 'Ad soyad gereklidir' })} placeholder="Adınız" className={inputCls(errors.name)} />
                    </Field>
                    <Field label="Telefon">
                      <input {...register('phone')} type="tel" placeholder="05XX XXX XX XX" className={inputCls()} />
                    </Field>
                  </div>
                  <Field label="Mesaj *" error={errors.message?.message}>
                    <textarea
                      {...register('message', {
                        required: 'Mesaj gereklidir',
                        minLength: { value: 10, message: 'Mesaj en az 10 karakter olmalı' },
                      })}
                      rows={5}
                      placeholder="Mesajınız…"
                      className={`${inputCls(errors.message)} resize-none`}
                    />
                  </Field>
                  <button type="submit" className="btn btn-caramel w-full !py-4 text-base">
                    <WhatsApp className="h-5 w-5" /> WhatsApp ile gönder
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
