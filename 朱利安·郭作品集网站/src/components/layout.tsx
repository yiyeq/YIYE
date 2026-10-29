'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';

import {LanguageSwitch,T,useLanguage} from './language';
export function Navigation(){const path=usePathname();const [open,setOpen]=useState(false);const {language}=useLanguage();return <header className="nav"><Link className="logo personal-logo" href="/" aria-label="Julian Guo"><span className="personal-first">Julian</span> Guo<span className="logo-reg">®</span></Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={language==='zh'?'切换导航':'Toggle navigation'}>{open?(language==='zh'?'关闭 −':'Close −'):(language==='zh'?'菜单 +':'Menu +')}</button><nav className={open?'navlinks open':'navlinks'} aria-label={language==='zh'?'主导航':'Main navigation'}>{[['/','Home'],['/works/','Works'],['/about/','About'],['/contact/','Contact']].map(([href,label])=><Link key={href} href={href} onClick={()=>setOpen(false)} aria-current={path===href?'page':undefined}><T>{label}</T></Link>)}</nav><div className="navright"><span className="availability"><i/><T>Open to possibilities</T></span><LanguageSwitch/><Link className="pill" href="/contact/"><T>Let’s talk</T><span>↗</span></Link></div></header>}
export function Footer(){return <footer><div className="footerline"><span>© Julian Guo 2026</span><span><T>Independent by nature. Different by design.</T></span><a href="#main"><T>Back to top ↑</T></a></div><div className="footerlogo personal-footer" aria-hidden="true">Julian Guo<span>®</span></div></footer>}


