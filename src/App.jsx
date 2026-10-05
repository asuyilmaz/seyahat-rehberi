import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Place from './pages/Place'
const links=[['/','Ana Sayfa'],['/blog','Blog'],['/gallery','Galeri'],['/contact','İletişim']]
function readTheme(){try{return localStorage.getItem('voyago-theme')||'dark'}catch{return 'dark'}}
export default function App(){
 const [theme,setTheme]=useState(readTheme)
 const [menu,setMenu]=useState(false)
 const location=useLocation()
 useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('voyago-theme',theme)}catch{/* Tema bu oturumda uygulanır. */}},[theme])
 useEffect(()=>{window.scrollTo(0,0);const titles={'/':'Ana Sayfa','/blog':'Blog','/gallery':'Galeri','/contact':'İletişim'};document.title=`Voyago | ${titles[location.pathname]||'Gezi Rehberi'}`},[location.pathname])
 return <><a className="skip" href="#main">İçeriğe geç</a><header className="site-header"><div className="container nav-row">
 <Link className="brand" to="/" onClick={()=>setMenu(false)}>Voyago</Link>
 <nav aria-label="Ana menü" className="desktop-nav">{links.map(([url,label])=><NavLink key={url} to={url} end={url==='/'}>{label}</NavLink>)}</nav>
 <div className="nav-actions"><button className="outline-button" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label={theme==='dark'?'Açık temaya geç':'Koyu temaya geç'}>{theme==='dark'?'Açık Tema':'Koyu Tema'}</button><Link className="button explore" to="/gallery">Keşfet</Link><button className="outline-button menu-toggle" aria-expanded={menu} aria-controls="mobile-menu" onClick={()=>setMenu(!menu)}>Menü</button></div>
 </div>{menu&&<nav id="mobile-menu" className="mobile-nav" aria-label="Mobil menü">{links.map(([url,label])=><NavLink key={url} to={url} end={url==='/'} onClick={()=>setMenu(false)}>{label}</NavLink>)}</nav>}</header>
 <main id="main"><Routes><Route path="/" element={<Home/>}/><Route path="/rotalar/:placeId" element={<Place/>}/><Route path="/blog" element={<Blog/>}/><Route path="/blog/:articleId" element={<Blog/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<section className="container page"><h1>Sayfa bulunamadı</h1><Link className="button" to="/">Ana sayfaya dön</Link></section>}/></Routes></main>
 <footer><div className="container footer-grid"><div><Link className="brand" to="/">Voyago</Link><p>Yeni şehirleri, tarihi yerleri ve doğa rotalarını keşfet.</p></div><div><h2>Menü</h2>{links.map(([url,label])=><Link key={url} to={url}>{label}</Link>)}</div><div><h2>Proje hakkında</h2><p>Eğitim kapsamında geliştirilen bir ön yüz demosudur. Gerçek rezervasyon, üyelik veya e-posta gönderimi yapmaz.</p><p>Fotoğraflar temsili Unsplash görselleridir.</p></div></div><div className="footer-bottom">© 2026 Voyago · Fatma Asu Yılmaz</div></footer>
 <button className="back-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Sayfanın başına dön">↑</button></>
}
