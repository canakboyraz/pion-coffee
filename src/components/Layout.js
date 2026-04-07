import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-cream-50">
      <Header />
      <main className="flex-grow pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}
