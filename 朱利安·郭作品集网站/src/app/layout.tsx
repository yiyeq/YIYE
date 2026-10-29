import type {Metadata} from 'next';
import './globals.css';
import {LanguageProvider} from '@/components/language';
import {Navigation,Footer} from '@/components/layout';
export const metadata:Metadata={title:'Julian Guo — Independent Designer & Creative Thinker',description:'Julian Guo 创意作品集 · 数字体验、品牌设计与视觉探索。Phase 1 概念演示。'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><LanguageProvider><a className="skip" href="#main">跳转到内容</a><Navigation/>{children}<Footer/></LanguageProvider></body></html>}
