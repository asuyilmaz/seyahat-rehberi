# Voyago — Seyahat ve Gezi Rehberi

Fatma Asu Yılmaz tarafından eğitim kapsamında geliştirilen React tabanlı ön yüz projesidir. Gerçek bir seyahat hizmeti veya müşteri ürünü değildir.

## Özellikler
- Türkçe rota arama ve kategori filtreleme
- Rota detay sayfaları ve blog yazıları
- Yazı başına tarayıcıda saklanan demo yorumları
- Leaflet / OpenStreetMap ile dört rota işareti
- Responsive galeri ve mobil menü
- Tarayıcıda saklanan açık/koyu tema tercihi
- İletişim formunda alan doğrulama ve açık demo geri bildirimi
- Türkçe sayfa dili, açıklama metası ve klavye odak göstergeleri

## Teknolojiler
React, Vite, React Router, Tailwind CSS, React Leaflet, Leaflet. Orijinal projenin package.json ve kilit dosyası korunmuştur; bazı eski bağımlılıklar artık kullanılmamaktadır.

## Kurulum
Node.js: Vite 8 için 20.19+ veya 22.12+ (uyumlu daha yeni sürümler de kullanılabilir).

```bash
npm ci
npm run dev
```

## Üretim kontrolü
```bash
npm run lint
npm run build
npm run preview
```

## Yayın
Vercel'e GitHub deposu aktarılırken Framework: Vite, Build Command: `npm run build`, Output Directory: `dist` seçilir. `vercel.json` doğrudan açılan alt sayfaları index.html'e yönlendirir. Yayın URL'si oluşunca GitHub About → Website alanına ve bu README'ye eklenmelidir.

## Demo sınırları
- Arka uç, veritabanı, rezervasyon ve kullanıcı hesabı bulunmaz.
- İletişim formu hiçbir mesaj göndermez veya saklamaz.
- Yorumlar yalnızca kullanılan tarayıcının localStorage alanında tutulur; diğer ziyaretçilerle paylaşılmaz. Tarayıcı verileri silinirse yorumlar da silinir.
- Görseller Unsplash üzerinden yüklenen temsili fotoğraflardır; ilgili destinasyonun birebir fotoğrafı oldukları iddia edilmez.
- Harita katmanları OpenStreetMap tarafından sağlanır. Fotoğraflar ve harita internet bağlantısı gerektirir.
- Gezi içerikleri örnektir; gerçek kullanıcı sayısı, puan veya değerlendirme verisi gösterilmez.
