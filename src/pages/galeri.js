import { useState } from 'react'
import Head from 'next/head'
import { site, menuBoards } from '../data/site'
import PageHero from '../components/PageHero'
import Lightbox from '../components/Lightbox'
import { Reveal } from '../components/motion'
import { Expand, Instagram } from '../components/Icons'

// Kendi fotoğraflarınızı eklemek için: dosyayı /public/images/galeri/ içine koyup src: '/images/galeri/dosya.jpg' yazın.
const galleryItems = [
  { src: site.cafePhoto, alt: 'Pion Coffee mekân', category: 'mekan', tall: true },
  { src: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=900&h=700&fit=crop', alt: 'Espresso hazırlama', category: 'kahve' },
  { src: menuBoards[0].src, alt: 'Sıcak kahveler panosu', category: 'menu', tall: true },
  { src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=900&h=700&fit=crop', alt: 'Cappuccino', category: 'kahve' },
  { src: menuBoards[1].src, alt: 'Soğuk içecekler panosu', category: 'menu', tall: true },
  { src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&h=700&fit=crop', alt: 'Latte art', category: 'kahve' },
  { src: menuBoards[2].src, alt: 'Matcha panosu', category: 'menu', tall: true },
  { src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=900&h=700&fit=crop', alt: 'Türk kahvesi', category: 'kahve' },
  { src: menuBoards[3].src, alt: 'Yiyecek & içecek panosu', category: 'menu', tall: true },
  { src: 'https://images.unsplash.com/photo-1507914997854-6b74c4e0a58f?w=900&h=700&fit=crop', alt: 'Tatlılar', category: 'kahve' },
]

const filters = [
  { id: 'hepsi', label: 'Hepsi' },
  { id: 'mekan', label: 'Mekân' },
  { id: 'kahve', label: 'Kahveler' },
  { id: 'menu', label: 'Menü panoları' },
]

export default function GaleriPage() {
  const [filter, setFilter] = useState('hepsi')
  const [index, setIndex] = useState(null)
  const items = filter === 'hepsi' ? galleryItems : galleryItems.filter((g) => g.category === filter)

  return (
    <>
      <Head>
        <title>Galeri | Pion Coffee</title>
        <meta name="description" content="Pion Coffee galeri: mekânımızdan, kahvelerimizden ve menü panolarımızdan kareler." />
        <link rel="canonical" href={`${site.url}/galeri/`} />
      </Head>

      <PageHero compact eyebrow="Galeri" title="Pion'dan" accent="kareler" description="Mekânımızın havasını, fincanlarımızı ve tezgâhımızı fotoğraflarla hissedin." />

      <section className="pb-24 pt-12 lg:pb-32">
        <div className="container-custom">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  filter === f.id ? 'bg-ink-900 text-white shadow-lg' : 'bg-white text-ink-600 hover:-translate-y-0.5 hover:bg-ink-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div key={filter} className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((g, i) => (
              <button
                key={g.src}
                type="button"
                onClick={() => setIndex(i)}
                className="pop-in group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-4xl text-left"
                style={{ '--delay': `${i * 60}ms` }}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${g.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-4 items-center justify-between p-5 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-serif text-xl">{g.alt}</span>
                  <Expand className="h-5 w-5" />
                </span>
              </button>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ink">
              <Instagram className="h-4 w-4" /> Daha fazlası Instagram&apos;da
            </a>
          </Reveal>
        </div>
      </section>

      <Lightbox items={items} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
    </>
  )
}
