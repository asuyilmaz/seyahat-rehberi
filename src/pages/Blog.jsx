import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { articles, photo } from '../data'
function readComments(id){try{const data=JSON.parse(localStorage.getItem(`voyago-comments-${id}`)||'[]');return Array.isArray(data)?data.filter(x=>typeof x.name==='string'&&typeof x.text==='string').slice(0,50):[]}catch{return []}}
function Comments({id}){
 const [comments,setComments]=useState(()=>readComments(id));const [notice,setNotice]=useState('')
 function submit(e){e.preventDefault();const form=e.currentTarget;const data=new FormData(form);const name=data.get('name').trim();const text=data.get('comment').trim();if(!name||!text){setNotice('Lütfen adını ve yorumunu yaz.');return}const next=[...comments,{id:Date.now(),name,text}].slice(-50);setComments(next);try{localStorage.setItem(`voyago-comments-${id}`,JSON.stringify(next));setNotice('Yorum bu tarayıcıya kaydedildi; diğer ziyaretçilerle paylaşılmaz.')}catch{setNotice('Yorum bu oturumda eklendi; tarayıcıya kaydedilemedi.')}form.reset()}
 return <section className="panel"><h2>Yorumlar</h2><p className="muted">Demo: Yorumlar yalnızca bu tarayıcıda tutulur, sunucuya gönderilmez.</p><form onSubmit={submit}><label>Adın<input name="name" required maxLength={60} autoComplete="name"/></label><label>Yorumun<textarea name="comment" required maxLength={1000} rows={4}/></label><button className="button" type="submit">Yorumu ekle</button></form><p role="status">{notice}</p>{comments.length===0?<p>Henüz yorum yok.</p>:comments.map((c,i)=><div className="comment" key={`${c.id}-${i}`}><strong>{c.name}</strong><p>{c.text}</p></div>)}</section>
}
export default function Blog(){const {articleId}=useParams();const article=articles.find(a=>a.id===articleId)
 if(articleId&&!article)return <section className="container page"><h1>Yazı bulunamadı</h1><Link to="/blog">Bloga dön</Link></section>
 if(article)return <article className="container page narrow"><Link to="/blog">← Tüm yazılar</Link><h1>{article.title}</h1><img className="detail-image" src={photo(article.image)} alt="Temsili seyahat manzarası"/>{article.paragraphs.map(p=><p key={p}>{p}</p>)}<Comments key={article.id} id={article.id}/></article>
 return <section className="container page"><div className="section-heading"><h1>Seyahat Blogları</h1><p>Gezi planlamanı kolaylaştıracak kısa rehberler.</p></div><div className="cards">{articles.map(a=><article className="card" key={a.id}><img src={photo(a.image,800)} alt="Temsili seyahat manzarası" loading="lazy"/><div className="card-body"><h2>{a.title}</h2><p>{a.summary}</p><Link className="button" to={`/blog/${a.id}`}>Devamını Oku</Link></div></article>)}</div></section>
}
