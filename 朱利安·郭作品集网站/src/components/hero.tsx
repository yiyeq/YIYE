'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useRef} from 'react';
import {ArrowRight, Plus} from 'lucide-react';

import {heroAssets} from '@/data/hero';

export function ProfileCard() {
  return <Link href="/about/" className="banner-glass profile-glass" aria-label="GUO — About the designer">
    <div className="profile-photo"><Image src={heroAssets.character} alt="GUO 的个人 3D 形象" fill sizes="140px"/><span className="profile-barcode" aria-hidden="true"/></div>
    <div className="profile-info"><strong>GUO</strong><span className="profile-role">Visual Designer</span><span className="profile-divider"/><small>3D Art / Visual Design<br/>Creative Direction</small></div>
    <span className="banner-arrow"><ArrowRight size={17}/></span><span className="profile-year">2026</span>
  </Link>;
}

export function HeroProjectCard({secondary = false}: {secondary?: boolean}) {
  return <Link href={secondary ? '/works/soft-matter/' : '/works/'} className={`banner-glass project-glass${secondary ? ' project-glass-secondary' : ''}`} aria-label={secondary ? 'Explore Soft matter concept study' : 'Explore selected concept projects'}>
    <div className="banner-concept-art" aria-hidden="true"><div className="concept-ring"/><div className="concept-sphere"/><span className="concept-grid"/></div>
    <span className="project-plus"><Plus size={14}/></span><span className="project-card-label">{secondary ? <>MATERIAL<br/>EXPLORATIONS</> : <>IDEAS<br/>VISUALS<br/>BRANDS<br/>AND MORE...</>}</span><span className="project-concept-label">CONCEPT STUDY / {secondary ? '02' : '01'}</span>
  </Link>;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = window.matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)');
    let frame = 0;
    let x = 0;
    let y = 0;
    const update = () => {element.style.setProperty('--pointer-x', String(x));element.style.setProperty('--pointer-y', String(y));frame = 0;};
    const schedule = () => {if (!frame) frame = requestAnimationFrame(update);};
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType === 'touch') return;
      const rect = element.getBoundingClientRect();
      x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
      schedule();
    };
    const reset = () => {x = 0;y = 0;schedule();};
    element.addEventListener('pointermove', move);element.addEventListener('pointerleave', reset);media.addEventListener('change', reset);
    return () => {element.removeEventListener('pointermove', move);element.removeEventListener('pointerleave', reset);media.removeEventListener('change', reset);cancelAnimationFrame(frame);};
  }, []);

  return <section className="portfolio-banner" ref={ref} aria-labelledby="portfolio-heading">
    <div className="banner-background banner-depth" aria-hidden="true"><Image src={heroAssets.background} alt="" fill priority sizes="100vw"/></div>
    <h1 id="portfolio-heading" className="banner-title banner-depth"><span className="banner-sr-only">Julian Guo — Portfolio</span><Image src={heroAssets.title} alt="" width={2172} height={724} priority sizes="100vw"/></h1>
    <div className="banner-signature" aria-hidden="true">Guo.</div>
    <p className="banner-disciplines">VISUAL DESIGNER<br/>3D ARTIST<br/>CREATIVE DIRECTION</p>

    <div className="banner-figure">

      <div className="banner-character"><Image src={heroAssets.character} alt="GUO 的个人 3D 形象：黑色服装、银色护目镜和耳机" width={1086} height={1448} priority sizes="(max-width: 700px) 118vw, (max-width: 1100px) 83vw, 70vw"/></div>
    </div>
    <div className="banner-profile-position banner-depth"><ProfileCard/></div>
    <div className="banner-project-position banner-depth"><HeroProjectCard/></div>
    <div className="banner-secondary-position banner-depth"><HeroProjectCard secondary/></div>
    <div className="banner-star banner-depth" aria-hidden="true"><Image src={heroAssets.star} alt="" width={1254} height={1254} sizes="120px"/></div>

    <div className="banner-bottom-left"><span className="banner-orbits" aria-hidden="true">◯◯◯</span><p>CONCEPT<br/>3D VISUAL<br/>BRAND DESIGN<br/>CREATIVE DIRECTION</p></div>
    <a href="#selected" className="banner-explore"><span className="banner-orbits" aria-hidden="true">◯◯◯</span><span className="banner-explore-words"><span>EXPLORE</span><span>CREATE</span><span>CONNECT</span></span><ArrowRight size={16}/></a>
  </section>;
}





