import {T} from '@/components/language';
import Link from 'next/link';
export function Button({children,href,className=''}:{children:React.ReactNode;href:string;className?:string}){return <Link className={'pill '+className} href={href}>{children}<span>↗</span></Link>}
export function SectionHeading({number,label,title}:{number:string;label:string;title:string}){return <div className="sectionhead"><p className="eyebrow">[ {number} — <T>{label}</T> ]</p><h2><T>{title}</T></h2></div>}
export function Badge({children}:{children:React.ReactNode}){return <span className="badge">{children}</span>}
