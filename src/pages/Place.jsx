import { Link, useParams } from 'react-router-dom'
import { places, photo } from '../data'
export default function Place(){const {placeId}=useParams();const place=places.find(p=>p.id===placeId)
 if(!place)return <section className="container page"><h1>Rota bulunamadı</h1><Link to="/">Rotalara dön</Link></section>
 return <article className="container page narrow"><Link to="/">← Tüm rotalar</Link><h1>{place.title}</h1><span className="tag">{place.category}</span><img className="detail-image" src={photo(place.image)} alt={`${place.title} için temsili görsel`}/><p>{place.description}</p><h2>Gezi önerileri</h2><p>{place.tips}</p><p className="muted">Bu içerik eğitim demosu için hazırlanmıştır. Görseller temsili olup seyahat koşulları ayrıca kontrol edilmelidir.</p><Link className="button" to="/gallery">Haritada rotaları gör</Link></article>}
