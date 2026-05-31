import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function Home() {

  const [search, setSearch] = useState("")

  const places = [
    {
      title: "Kapadokya",
      category: "Tarihi",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1974&auto=format&fit=crop",
    },

    {
      title: "Paris",
      category: "Şehir",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070&auto=format&fit=crop",
    },

    {
      title: "Maldivler",
      category: "Deniz",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop",
    },
  ]

  useEffect(() => {
    document.title = "Voyago | Ana Sayfa"
  }, [])

  return (

    <div>

      {/* Hero */}
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop')",
        }}
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-pulse">
            Dünyayı Keşfet
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Yeni şehirler, tarihi yerler ve eşsiz doğa manzaraları seni bekliyor.
          </p>

          <button className="bg-cyan-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-cyan-400/50 hover:shadow-2xl transition">
            Keşfetmeye Başla
          </button>

          <div className="grid grid-cols-3 gap-10 mt-16">

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                250+
              </h3>

              <p className="text-gray-300">
                Destinasyon
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                100K+
              </h3>

              <p className="text-gray-300">
                Gezgin
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                4.9
              </h3>

              <p className="text-gray-300">
                Ortalama Puan
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Kategoriler */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold mb-4">
            Kategoriler
          </h2>

          <p className="text-gray-400">
            İlgi alanına göre keşif yap
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3 text-cyan-400">
              Tarihi Yerler
            </h3>

            <p className="text-gray-300">
              Antik şehirler ve tarihi yapılar.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3 text-cyan-400">
              Doğa
            </h3>

            <p className="text-gray-300">
              Eşsiz doğa manzaraları keşfet.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3 text-cyan-400">
              Şehir Turları
            </h3>

            <p className="text-gray-300">
              Dünyanın en popüler şehirleri.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3 text-cyan-400">
              Deniz Tatili
            </h3>

            <p className="text-gray-300">
              En güzel sahiller ve tatil rotaları.
            </p>
          </div>

        </div>

      </motion.section>

      {/* Popüler Yerler */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold mb-4">
            Popüler Rotalar
          </h2>

          <p className="text-gray-400">
            En çok ziyaret edilen yerler
          </p>

        </div>

        {/* Arama */}
        <div className="flex justify-center mb-10">

          <input
            type="text"
            placeholder="Şehir ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white/10 border border-white/10 rounded-full px-6 py-4 w-full max-w-xl outline-none backdrop-blur-lg"
          />

        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {
            places
              .filter((place) =>
                place.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((place, index) => (

                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition"
                >

                  <img
                    src={place.image}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-6">

                    <div className="flex justify-between items-center mb-4">

                      <h3 className="text-2xl font-bold">
                        {place.title}
                      </h3>

                      <span className="text-yellow-400 font-bold">
                        ★ 4.9
                      </span>

                    </div>

                    <p className="text-gray-300 mb-6">
                      {place.category} kategorisinde popüler destinasyon.
                    </p>

                    <button className="bg-cyan-400 text-black px-5 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-cyan-400/50 hover:shadow-2xl transition">
                      Detay Gör
                    </button>

                  </div>

                </div>

              ))
          }

        </div>

      </motion.section>

    </div>
  )
}

export default Home