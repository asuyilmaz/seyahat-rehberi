import { useState, useEffect } from "react"

import { Routes, Route, Link } from "react-router-dom"

import { FaBars } from "react-icons/fa"

import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"

function App() {

  const [darkMode, setDarkMode] = useState(true)

  const [menuOpen, setMenuOpen] = useState(false)

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 2000)

  }, [])

  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center text-4xl font-bold">
        Voyago Loading...
      </div>
    )
  }

  return (

    <div
      className={
        darkMode
          ? "bg-[#0f172a] text-white min-h-screen transition-all duration-500"
          : "bg-gray-100 text-black min-h-screen transition-all duration-500"
      }
    >

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
            Voyago
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">

            <Link
              to="/"
              className="hover:text-cyan-400 hover:scale-105 transition"
            >
              Ana Sayfa
            </Link>

            <Link
              to="/blog"
              className="hover:text-cyan-400 hover:scale-105 transition"
            >
              Blog
            </Link>

            <Link
              to="/gallery"
              className="hover:text-cyan-400 hover:scale-105 transition"
            >
              Galeri
            </Link>

            <Link
              to="/contact"
              className="hover:text-cyan-400 hover:scale-105 transition"
            >
              İletişim
            </Link>

          </nav>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 hover:shadow-cyan-400/50 hover:shadow-2xl transition">
              Keşfet
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl"
            >
              <FaBars />
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {
          menuOpen && (
            <div className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-lg flex flex-col items-center gap-6 py-10 md:hidden">

              <Link to="/">Ana Sayfa</Link>

              <Link to="/blog">Blog</Link>

              <Link to="/gallery">Galeri</Link>

              <Link to="/contact">İletişim</Link>

            </div>
          )
        }

      </header>

      {/* Sayfalar */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      {/* Back To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-cyan-400 text-black w-14 h-14 rounded-full text-2xl font-bold shadow-lg hover:scale-110 transition z-50"
      >
        ↑
      </button>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 mt-20">

        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              Voyago
            </h2>

            <p className="text-gray-400">
              Dünyanın en güzel rotalarını keşfetmeye hazır ol.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Menü
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Ana Sayfa</li>

              <li>Blog</li>

              <li>Galeri</li>

              <li>İletişim</li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Kategoriler
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Doğa</li>

              <li>Tarihi Yerler</li>

              <li>Deniz Tatili</li>

              <li>Şehir Turları</li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Bülten
            </h3>

            <p className="text-gray-400 mb-4">
              Yeni rotalardan haberdar ol.
            </p>

            <div className="flex">

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-l-full bg-white/10 border border-white/10 outline-none"
              />

              <button className="bg-cyan-400 text-black px-6 rounded-r-full font-semibold hover:opacity-80 transition">
                Gönder
              </button>

            </div>

          </div>

        </div>

        <div className="flex justify-center gap-6 text-2xl mb-6">

          <span className="hover:text-cyan-400 cursor-pointer transition">
            Instagram
          </span>

          <span className="hover:text-cyan-400 cursor-pointer transition">
            Twitter
          </span>

          <span className="hover:text-cyan-400 cursor-pointer transition">
            YouTube
          </span>

        </div>

        <div className="border-t border-white/10 text-center py-6 text-gray-500">
          © 2026 Voyago - Tüm Hakları Saklıdır
        </div>

      </footer>

    </div>
  )
}

export default App