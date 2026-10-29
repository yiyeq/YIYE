export type Category = 'All' | 'Digital' | 'Branding' | 'Exploration';
export type Project = {slug:string;name:string;subtitle:string;category:Exclude<Category,'All'>;year:string;className:string;number:string;description:string};
export const projects:Project[]=[
{slug:'forma',name:'FORMA®',subtitle:'A new perspective on living.',category:'Digital',year:'2026',className:'forma',number:'01',description:'以建筑中的留白与秩序为出发点，探索家具品牌的数字体验。通过清晰的浏览路径和克制的视觉语言，让产品成为叙事中心。'},
{slug:'off-script',name:'OFF—SCRIPT',subtitle:'Identity for the independent mind.',category:'Branding',year:'2026',className:'offscript',number:'02',description:'为虚构独立文化品牌建立开放的视觉系统。用实验性字体、鲜明的尺度对比和可延展的版式，让每一次表达都保持独立。'},
{slug:'echo',name:'ECHO',subtitle:'Less noise. More feeling.',category:'Digital',year:'2025',className:'echo',number:'03',description:'一款概念声音应用。围绕发现、聆听和收藏三个核心行为，构建安静、专注且易于操作的界面。'},
{slug:'soft-matter',name:'Soft matter',subtitle:'Experiments between real & unreal.',category:'Exploration',year:'2025',className:'matter',number:'04',description:'关于数字材质与有机形态的视觉实验。使用光影、反射和曲面研究柔软与坚硬之间的关系。'}];
export const siteConfig={title:['Design Beyond','the Ordinary.'],description:'Crafting distinctive digital experiences through design, motion and creative technology.',email:'',portrait:'/images/portrait.jpg',enable3D:false};
