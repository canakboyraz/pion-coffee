import Link from 'next/link'
import Head from 'next/head'
import PourScene from '../components/PourScene'
import { ArrowRight } from '../components/Icons'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Sayfa Bulunamadı | Pion Coffee</title>
        <meta name="robots" content="noindex" />
      </Head>

      <section className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900 pb-16 pt-32 text-white">
        <div className="orb -right-24 top-10 h-96 w-96 bg-caramel-500/40" aria-hidden="true" />
        <div className="container-custom relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="display text-[9rem] leading-none text-caramel-300 sm:text-[12rem]">404</p>
            <h1 className="display mt-2 text-4xl sm:text-5xl">
              Bu fincan <span className="italic-accent">boş çıktı.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-white/65">Aradığınız sayfa taşınmış ya da hiç demlenmemiş olabilir. Sizi taze bir sayfaya alalım.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/" className="btn btn-caramel">
                Ana sayfa <ArrowRight className="btn-arrow h-4 w-4" />
              </Link>
              <Link href="/qr-menu" className="btn btn-ghost-light">
                Menü
              </Link>
            </div>
          </div>
          <PourScene className="mx-auto aspect-[400/520] w-full max-w-xs" />
        </div>
      </section>
    </>
  )
}
