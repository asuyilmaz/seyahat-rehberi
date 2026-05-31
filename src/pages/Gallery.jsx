import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32">

      <div className="text-center mb-16">

        <h1 className="text-5xl font-bold mb-4">
          Gezi Galerisi
        </h1>

        <p className="text-gray-400">
          Dünyanın en güzel manzaraları
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
          className="rounded-3xl h-72 w-full object-cover hover:scale-105 transition"
        />

        <img
          src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=2070&auto=format&fit=crop"
          className="rounded-3xl h-72 w-full object-cover hover:scale-105 transition"
        />

        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
          className="rounded-3xl h-72 w-full object-cover hover:scale-105 transition"
        />
        <img
  src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=2070&auto=format&fit=crop"
  className="rounded-3xl h-72 w-full object-cover hover:scale-105 transition"
/>

<img
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
  className="rounded-3xl h-72 w-full object-cover hover:scale-105 transition"
/>

<img
  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop"
  className="rounded-3xl h-72 w-full object-cover hover:scale-105 transition"
/>

      </div>
<div className="mt-20 rounded-3xl overflow-hidden">

  <MapContainer
    center={[41.0082, 28.9784]}
    zoom={5}
    style={{ height: "500px", width: "100%" }}
  >

    <TileLayer
      attribution='&copy; OpenStreetMap contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <Marker position={[41.0082, 28.9784]}>
      <Popup>
        İstanbul
      </Popup>
    </Marker>

  </MapContainer>

</div>
    </div>
  )
}

export default Gallery