function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32">

      <div className="text-center mb-16">

        <h1 className="text-5xl font-bold mb-4">
          İletişim
        </h1>

        <p className="text-gray-400">
          Bizimle iletişime geç
        </p>

      </div>

      <div className="bg-white/10 p-10 rounded-3xl">

        <div className="grid gap-6">

          <input
            type="text"
            placeholder="Adınız"
            className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <textarea
            placeholder="Mesajınız"
            rows="6"
            className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          ></textarea>

          <button className="bg-cyan-400 text-black py-4 rounded-2xl font-bold hover:scale-105 transition">
            Gönder
          </button>

        </div>

      </div>

    </div>
  )
}

export default Contact