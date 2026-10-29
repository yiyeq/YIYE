# 朱利安·郭作品集网站

Julian Guo 个人作品集，源码保存在 `朱利安·郭作品集网站/` 文件夹。

使用 Next.js 15、React 19、TypeScript。保留首页分层 Banner、#075BFF 蓝黑主题、中英文切换、四个作品与详情页面。

## 开启 GitHub Pages（首次）

进入仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
随后在 **Actions → Deploy portfolio to GitHub Pages** 中重跑失败的工作流，或点击 **Run workflow**。
工作流成功后，GitHub Pages 地址为 https://yiyeq.github.io/YIYE/ 。此地址只有在部署成功后才能访问。

每次更新 main 分支，都会自动重新构建并发布。无需购买域名。国内网络和微信的访问情况需要实际验证。

## 本地开发

进入 `朱利安·郭作品集网站/`，安装 Node.js 22 和 pnpm 10.28.0，执行：

```sh
pnpm install --frozen-lockfile
pnpm dev
```

普通本地预览不需要设置 base path。GitHub Pages 构建会将 `NEXT_PUBLIC_BASE_PATH` 设置为 `/YIYE`，同时适配页面链接与图片资源。

原有网站保留：https://julian-guo-portfolio.muddypixie513.chatgpt.site/

仓库不包含 node_modules、构建缓存、平台凭据或 Sites 平台配置。完整素材保留原始 PNG 文件及透明通道。
