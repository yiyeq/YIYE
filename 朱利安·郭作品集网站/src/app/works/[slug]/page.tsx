import {T} from '@/components/language';
import {projects} from '@/data/projects';
import {ProjectArt} from '@/components/works';
import {Button} from '@/components/ui';
import {notFound} from 'next/navigation';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);if(!p)notFound();const next=projects[(projects.indexOf(p)+1)%projects.length];return <main id="main" className="section inner-page detail"><p className="eyebrow"><T>CONCEPT PROJECT</T> / <T>{p.category}</T> / {p.year}</p><h1 className="page-title">{p.name}</h1><p className="intro"><T>{p.subtitle}</T></p><ProjectArt project={p}/><div className="detail-copy"><p className="eyebrow"><T>[ PROJECT OVERVIEW ]</T></p><div><h2><T>背景与目标</T></h2><p><T>{p.description}</T></p><h2><T>设计思路</T></h2><p><T>以内容和用户目标为起点，提炼视觉关键词，再将它们转化为一致的排版、色彩与交互规则。</T></p><h2><T>设计过程</T></h2><p><T>方向探索 → 信息组织 → 视觉系统 → 原型迭代。当前展示为第一阶段概念，完整研究和过程材料待补充。</T></p><h2><T>视觉成果与总结</T></h2><p><T>上方为可运行的概念视觉。后续将补充真实项目截图、设计决策及验证结果。</T></p><small><T>演示项目，无真实客户、合作或业务数据声明。</T></small></div></div><Button href={'/works/'+next.slug+'/'}><T>Next project</T> — {next.name}</Button></main>}
