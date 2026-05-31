function Blog() {
  return (
    
    <div className="max-w-7xl mx-auto px-6 py-32">

      <div className="text-center mb-16">

        <h1 className="text-5xl font-bold mb-4">
          Seyahat Blogları
        </h1>

        <p className="text-gray-400">
          En yeni gezi rehberleri ve seyahat önerileri
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="bg-white/10 rounded-3xl overflow-hidden hover:scale-105 transition">

          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
            className="h-64 w-full object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold mb-4">
              Avrupa Turu Rehberi
            </h2>
<div className="text-yellow-400 mb-4 text-xl">
  ★★★★★
</div>
            <p className="text-gray-300 mb-6">
              Avrupa'da gezilecek en güzel şehirler.
            </p>

            <button className="bg-cyan-400 text-black px-5 py-3 rounded-full font-semibold">
              Devamını Oku
            </button>

          </div>

        </div>

        <div className="bg-white/10 rounded-3xl overflow-hidden hover:scale-105 transition">

          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2070&auto=format&fit=crop"
            className="h-64 w-full object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold mb-4">
              Kamp Rotaları
            </h2>

            <p className="text-gray-300 mb-6">
              Doğa severler için harika kamp alanları.
            </p>

            <button className="bg-cyan-400 text-black px-5 py-3 rounded-full font-semibold">
              Devamını Oku
            </button>

          </div>

        </div>

        <div className="bg-white/10 rounded-3xl overflow-hidden hover:scale-105 transition">

          <img
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1974&auto=format&fit=crop"
            className="h-64 w-full object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold mb-4">
              Deniz Tatili Önerileri
            </h2>

            <p className="text-gray-300 mb-6">
              Yaz tatili için en iyi sahil rotaları.
            </p>

            <button className="bg-cyan-400 text-black px-5 py-3 rounded-full font-semibold">
              Devamını Oku
            </button>

          </div>

        </div>

      </div>
      <div className="mt-20 bg-white/10 p-10 rounded-3xl">

  <h2 className="text-3xl font-bold mb-8">
    Yorum Yap
  </h2>

  <div className="grid gap-6">

    <input
      type="text"
      placeholder="Adınız"
      className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
    />

    <textarea
      placeholder="Yorumunuz"
      rows="5"
      className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
    ></textarea>

    <button className="bg-cyan-400 text-black py-4 rounded-2xl font-bold hover:scale-105 transition">
      Yorumu Gönder
    </button>

  </div>

</div>

    </div>
  )
}

export default Blog