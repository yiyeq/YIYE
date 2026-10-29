# 首页 Banner 调整说明

首页使用原版完整导航，Banner 在导航栏下方独立显示。Banner 内不再重复导航、语言切换或右上角年份行。下方作品、介绍、联系页面与原有路由保留。

## 修改文件

- `src/components/hero.tsx`：分层 Banner、ProfileCard、HeroProjectCard，以及鼠标视差。
- `src/styles/portfolio-hero.css`：独立布局、玻璃卡片、入场与悬停动画、响应式布局。
- `src/data/hero.ts`：独立图片路径。
- `src/components/layout.tsx`：恢复原版导航，首页与其他页面统一。
- `src/app/globals.css`：引入 Banner 样式。
- `pnpm-workspace.yaml`：将原有未填写的可选构建配置设为 false，延续 README 的忽略 unrs-resolver 构建策略。

## 素材路径

全部为原始 PNG 的直接复制，没有重新生成或修改颜色、像素与透明通道。

| 图层 | 网站路径 | 尺寸 / 透明度 |
| --- | --- | --- |
| 背景 | `/images/portfolio/深蓝星际科技光影背景.png` | 1672 × 941，不透明 |
| 标题 | `/images/portfolio/金属渐变科技感“PORTFOLIO”字标.png` | 2172 × 724，透明 |
| 人物 | `/images/portfolio/ChatGPT 图像 2026年10月29日 16_39_10.png` | 1672 × 941，透明 |
| 星芒 | `/images/portfolio/炫彩液态铬金属星芒.png` | 1254 × 1254，透明 |
| 机器人 | `/images/portfolio/可爱未来感机器人吉祥物1.png` | 1004 × 1004，透明 |

实际文件位于项目的 `public/images/portfolio/`。原有演示人物图片没有删除。

## 调整构图

编辑 `src/styles/portfolio-hero.css` 最上方 `.portfolio-banner` 的变量：

- 人物：`--character-width` 大小、`--character-bottom` 距底部位置（默认 0，始终贴底）。`.banner-figure` 用 left:50% 与 translateX(-50%) 保持水平居中，允许画框裁切两侧身体。
- 标题：`--title-width` 大小、`--title-left` 横向位置、`--title-top` 纵向位置。
- 个人卡片：`--profile-left`、`--profile-top`、`--profile-width`、`--profile-angle`。
- 项目卡片：`--project-right`、`--project-top`、`--project-width`、`--project-angle`。
- 卡片透明度：`--glass-bg` 的 rgba 最后一个数值；数值越大越不透明。
- 卡片模糊与边框：`--glass-blur`、`--glass-border`。
- 次级卡片：`.banner-secondary-position`；机器人：`.banner-robot`，在 `.banner-figure` 内与人物同步缩放，层级低于人物，实现肩后遮挡；星芒：`.banner-star`，已上移，内部图片 rotate:30deg。
- 每层视差幅度：该图层的 `--depth`；数值越小移动越少。

图片始终按原始比例显示。标题 PNG 本身含透明留白，调整 top 时需要考虑其可见文字的位置。
平板和手机断点会覆盖部分变量；手机个人卡片改用 bottom 定位，并隐藏项目卡片、星芒和次级辅助文字。
支持减少动态效果设置，触屏不会启用鼠标视差。

## 卡片与导航

卡片全部是 HTML/CSS：可直接在 hero.tsx 修改文字。个人卡片连接 `/about/`，主项目卡片连接 `/works/`，次级卡片连接现有 `/works/soft-matter/`。加号和箭头是链接内的图标，没有嵌套的假按钮。
项目预览使用 CSS 抽象几何构图并标注 CONCEPT STUDY，没有虚构真实客户作品。原版导航连接现有 Home、Works、About、Contact 页面，中英文切换继续保存偏好。

## 启动与发布

在项目目录运行：

```sh
pnpm install --frozen-lockfile
pnpm dev --port 3001
```

打开终端实际显示的本地地址。类型检查使用 `pnpm typecheck`，正式构建使用 `pnpm build`，静态产物位于 `out/`。
网站固定公网地址：https://julian-guo-portfolio.muddypixie513.chatgpt.site 。本地修改后需要重新构建和部署，网页才会更新。
`.openai/hosting.json` 保留原站点标识，后续应更新同一个站点。

## 与参考图的差异 / 待补充

- 未提供独立蓝色签名字标，当前使用 Guo. 网页文字和系统手写字体近似；不同电脑字形可能不同，可在以后提供 SVG/PNG 字标后替换。
- 未提供右侧真实项目封面，当前以可编辑 CSS 概念视觉代替。
- 左侧蓝色抽象笔触用 SVG 近似，没有使用整张参考海报作为网页背景。
- 移动端采用独立竖向构图，保证人物面部、资料卡片和导航可读。

## 验证

使用实际 Edge 浏览器检查 1920、1440、768、390、320 像素宽度：PNG 加载成功，没有横向溢出或页面脚本错误。
另检查手机导航、中英文偏好保存、作品分类筛选、资料卡片链接、减少动态效果设置及现有作品详情/联系路由。


