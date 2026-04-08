import Head from 'next/head'
import { useState } from 'react'

const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&h=600&fit=crop',
    alt: 'Espresso hazırlama',
    category: 'kahve',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&h=600&fit=crop',
    alt: 'Cappuccino',
    category: 'kahve',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop',
    alt: 'Latte art',
    category: 'kahve',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&h=600&fit=crop',
    alt: 'Türk kahvesi',
    category: 'kahve',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1507914997854-6b74c4e0a58f?w=800&h=600&fit=crop',
    alt: 'Pastane ürünleri',
    category: 'yiyecek',
  },
]

const categories = [
  { id: 'hepsi', label: 'Hepsi' },
  { id: 'kahve', label: 'Kahvelerimiz' },
  { id: 'yiyecek', label: 'Yiyecekler' },
]

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState('hepsi')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredItems =
    activeCategory === 'hepsi'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <>
      <Head>
        <title>Galeri | Pion Coffee</title>
        <meta
          name="description"
          content="Pion Coffee galeri. Modern self-servis kahve dükkanımızın iç mekan ve kahve fotoğrafları."
        />
        <link rel="canonical" href="https://pioncoffee.com/galeri" />
      </Head>

      {/* Hero */}
      <section className="bg-primary-500 text-white py-12 lg:py-16">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Galeri
          </h1>
          <p className="text-cream-100 text-lg max-w-2xl">
            Mekânımızdan ve kahvelerimizden kareler. Pion Coffee&apos;nin havasını 
            fotoğraflarla hissedin.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-white text-coffee-900 border-2 border-coffee-200 hover:border-primary-500'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid overflow-hidden rounded-xl shadow-md cursor-pointer group"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white hover:text-primary-300 text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✕ Kapat
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full rounded-xl shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
