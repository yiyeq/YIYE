'use client';
import {createContext, useContext, useEffect, useState} from 'react';
import {translations} from '@/data/translations';

type Language = 'en' | 'zh';
const LanguageContext = createContext<{language:Language;setLanguage:(language:Language)=>void;translate:(text:string)=>string}>({language:'en',setLanguage:()=>{},translate:text=>text});

export function LanguageProvider({children}:{children:React.ReactNode}) {
  const [language,setLanguageState] = useState<Language>('en');
  useEffect(()=>{
    try { const saved=localStorage.getItem('julian-guo-language');if(saved==='en'||saved==='zh')setLanguageState(saved); } catch {}
  },[]);
  useEffect(()=>{document.documentElement.lang=language==='zh'?'zh-CN':'en';},[language]);
  function setLanguage(next:Language){setLanguageState(next);try{localStorage.setItem('julian-guo-language',next);}catch{}}
  function translate(text:string){const entry=translations[text];return entry?entry[language]:text;}
  return <LanguageContext.Provider value={{language,setLanguage,translate}}>{children}</LanguageContext.Provider>;
}
export const useLanguage=()=>useContext(LanguageContext);
export function T({children}:{children:string}) {const {translate}=useLanguage();return <>{translate(children)}</>;}
export function LanguageSwitch(){const {language,setLanguage}=useLanguage();return <div className="language-switch" role="group" aria-label={language==='zh'?'选择语言':'Choose language'}><button lang="zh-CN" aria-pressed={language==='zh'} onClick={()=>setLanguage('zh')}>中</button><span aria-hidden="true">/</span><button lang="en" aria-pressed={language==='en'} onClick={()=>setLanguage('en')}>EN</button></div>;}
