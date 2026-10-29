# Julian Guo — Creative Portfolio

这是目前本地预览网站的最新源码，包含中英文切换、作品分类、作品详情、统一的姓名字体、固定英文首屏标题与标语条、底部弥散磨玻璃背景。

## 在另一台电脑运行

1. 安装 Node.js 22 LTS（推荐 22.14 或以上）。
2. 将压缩包解压，进入包含 package.json 的目录。
3. 在终端执行：

```sh
npm install -g pnpm@10.28.0
pnpm install --frozen-lockfile
pnpm dev
```

打开 http://localhost:3000 。开发期间修改 src 下的文件，浏览器会自动更新。若端口已被占用，使用终端实际显示的地址。

首次安装依赖需要联网。项目运行无需 API Key、数据库、Sites 账号或环境变量。

## 检查与构建

```sh
pnpm typecheck
pnpm lint
pnpm build
```

构建完成后，out/ 是静态网站产物，可以部署到支持静态网站的服务器。不要直接双击 index.html；通过 HTTP 服务访问。

## 源码目录

```text
src/
  app/
    page.tsx                 首页
    globals.css              全局和响应式样式
    layout.tsx               全局布局与 SEO
    works/page.tsx           作品列表
    works/[slug]/page.tsx    作品详情
    about/page.tsx           关于
    contact/page.tsx         联系
  components/
    hero.tsx                 人物和悬浮卡片
    layout.tsx               姓名、导航、页脚
    language.tsx             语言切换与偏好保存
    works.tsx                作品卡片、筛选与概念视觉
    ui.tsx                   通用组件
  data/
    projects.ts              项目数据、首屏标题、邮箱、人物图片配置
    translations.ts          中英文文案
  styles/
    tokens.css               设计令牌
    contact-atmosphere.css   弥散磨玻璃背景
public/images/portrait.jpg   临时演示人物图片
```

## 常见修改

- 替换人物：更新 public/images/portrait.jpg，或修改 projects.ts 中的 portrait 路径。
- 添加作品：修改 projects.ts 的 projects 数组；当前项目主视觉由 works.tsx 中的 CSS 概念图构成，真实案例需要进一步接入图片字段。
- 更新邮箱：设置 projects.ts 中 siteConfig.email，联系页即显示 mailto 链接。
- 更新中英文：修改 translations.ts。首屏大标题和标语条按要求固定英文。
- 调整颜色和材质：修改 tokens.css、globals.css 和 contact-atmosphere.css。

## 素材和当前状态

人物为 Unsplash 临时演示摄影，非 Julian Guo 本人，需替换为本人授权照片。素材地址：https://images.unsplash.com/photo-1506794778202-cad84cf45f1d 。

FORMA、OFF—SCRIPT、ECHO、Soft matter 均为演示概念项目。个人介绍、经历和联系方式仍待提供真实内容。尚未接入真实 3D 模型、表单后端或 Figma 同步。

使用 Next.js 15、React 19、TypeScript、Tailwind CSS 4、GSAP、Lucide React；精确依赖由 pnpm-lock.yaml 固定。unrs-resolver 的可选构建脚本被显式忽略，以便重现本地安装策略。

本导出不包含 node_modules、.next、out、Git 历史、托管平台配置或凭据；依赖请在新电脑重新安装。
