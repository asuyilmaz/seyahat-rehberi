import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import marker from 'leaflet/dist/images/marker-icon.png'
import marker2x from 'leaflet/dist/images/marker-icon-2x.png'
import shadow from 'leaflet/dist/images/marker-shadow.png'
import { Link } from 'react-router-dom'
import { places, photo } from '../data'
const icon=L.icon({iconUrl:marker,iconRetinaUrl:marker2x,shadowUrl:shadow,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]})
const images=[...places,{id:'gol',title:'Göl manzarası',image:'photo-1506744038136-46273834b3fb'},{id:'sahil',title:'Sahil manzarası',image:'photo-1493558103817-58b2924bce98'}]
export default function Gallery(){return <section className="container page"><div className="section-heading"><h1>Gezi Galerisi</h1><p>Rotalara ilham veren temsili manzaralar.</p></div><div className="gallery-grid">{images.map(p=><figure key={p.id}><img src={photo(p.image,800)} alt={p.title+' için temsili görsel'} loading="lazy"/><figcaption>{p.title}</figcaption></figure>)}</div><h2 className="map-heading">Rotalar haritada</h2><p>İşaretlere tıklayarak rota detaylarına ulaşabilirsin. Harita ve fotoğraflar internet bağlantısı gerektirir.</p><div className="map"><MapContainer center={[28,35]} zoom={3} scrollWheelZoom={false} style={{height:'100%',width:'100%'}}><TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>{places.map(p=><Marker key={p.id} position={p.position} icon={icon}><Popup><strong>{p.title}</strong><br/><Link to={`/rotalar/${p.id}`}>Rotayı incele</Link></Popup></Marker>)}</MapContainer></div></section>}
