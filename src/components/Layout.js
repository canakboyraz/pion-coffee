import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-foam">
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-caramel-500 focus:px-4 focus:py-2 focus:text-white"
      >
        İçeriğe geç
      </a>
      <Header />
      <main id="icerik" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
