## 1. 配置层扩展

- [ ] 1.1 在 `quartz/cfg.ts` 中为 `QuartzSiteMetadata` 添加可选字段 `navLinks?: Array<{label: string; href: string}>`
- [ ] 1.2 在 `quartz.config.ts` 中添加 `navLinks` 配置：`[{label: "首页", href: "/"}, {label: "知识库", href: "/知识库"}, {label: "文章库", href: "/文章库"}]`

## 2. TopNav 组件

- [ ] 2.1 新建 `quartz/components/TopNav.tsx`，渲染固定顶部导航栏结构（logo 区 + 链接区 + 暗色按钮区）
- [ ] 2.2 在 `TopNav.tsx` 中读取 `cfg.navLinks` 并渲染链接列表
- [ ] 2.3 在 `TopNav.tsx` 中实现当前页面路径高亮逻辑（含子路径匹配 `fileData.slug.startsWith`）
- [ ] 2.4 在 `TopNav.tsx` 中集成 `Darkmode` 组件实例，透传 `beforeDOMLoaded` 脚本
- [ ] 2.5 新建 `quartz/components/styles/topnav.scss`，实现导航栏基础样式（sticky、细边框、链接间距、高亮态）
- [ ] 2.6 在 `topnav.scss` 中实现移动端汉堡菜单折叠交互（CSS checkbox hack 或最小内联脚本）
- [ ] 2.7 在 `quartz/components/index.ts` 中导出 `TopNav`
- [ ] 2.8 在 `quartz.layout.ts` 的 `sharedPageComponents.header` 中挂载 `Component.TopNav()`

## 3. HomeHero 组件

- [ ] 3.1 新建 `quartz/components/HomeHero.tsx`，从 `fileData.frontmatter` 读取 `heroAvatar`、`heroTagline`、`heroIntro`、`featuredSlugs`
- [ ] 3.2 在 `HomeHero.tsx` 中渲染头像图片（`<img src={...}>`，路径需拼接 `cfg.baseUrl` 或使用相对路径）
- [ ] 3.3 在 `HomeHero.tsx` 中渲染标签语（大字号）和简介文本
- [ ] 3.4 在 `HomeHero.tsx` 中遍历 `featuredSlugs`，从 `allFiles` 按 slug 查找文章，渲染精选文章卡片（标题 + 链接）
- [ ] 3.5 新建 `quartz/components/styles/homehero.scss`，实现 Hero 区域桌面端左右布局与移动端垂直布局
- [ ] 3.6 在 `quartz/components/index.ts` 中导出 `HomeHero`

## 4. 首页专属布局

- [ ] 4.1 在 `quartz.layout.ts` 中新增 `homePageLayout: PageLayout`，`beforeBody` 仅含 `HomeHero()`，`left`/`right` 均为空数组
- [ ] 4.2 在 `quartz/plugins/emitters/contentPage.tsx` 中，按 `slug === "index"` 条件选择 `homePageLayout` 替代 `defaultContentPageLayout`

## 5. 列表页调整

- [ ] 5.1 在 `quartz.layout.ts` 的 `defaultListPageLayout.left` 中移除 `Component.Explorer()`

## 6. 文章页调整

- [ ] 6.1 在 `quartz.layout.ts` 的 `defaultContentPageLayout.left` 中移除 `Component.ReaderMode()`（left sidebar 的 Darkmode 也可一并移除，已移至顶部导航）

## 7. 视觉主题

- [ ] 7.1 在 `quartz/styles/custom.scss` 中覆盖 `--secondary` 变量为橙色（`#f97316`），同时覆盖暗色模式下的值
- [ ] 7.2 在 `quartz/styles/custom.scss` 中为 `body` 添加点阵背景纹理（`radial-gradient` 实现）
- [ ] 7.3 在 `quartz/styles/custom.scss` 中为暗色模式适配背景纹理颜色
- [ ] 7.4 验证文章页正文字体大小 ≥ 16px、行高 ≥ 1.5，如不满足则在 `custom.scss` 中补充覆盖
