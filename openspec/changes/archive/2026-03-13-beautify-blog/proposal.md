## Why

当前博客首页按普通文章页渲染，缺乏品牌识别度，全站没有统一的导航入口，视觉风格分散。本次美化旨在建立统一的视觉语言、增加品牌感，并通过固定顶部导航提升站内跳转体验。

## What Changes

- 新增全站固定顶部导航组件，包含「首页 / 知识库 / 文章库」入口及暗色模式切换控件
- 首页改造为品牌 Hero 页，展示头像、标签语、简介与精选文章，隐藏所有侧边栏和工具组件
- 列表页（知识库/文章库及子分类）隐藏 Explorer 文件树
- 文章页保留阅读辅助组件，移除 ReaderMode
- 全站应用新视觉风格：浅色底、点阵/网格纹理背景、橙色强调色、细边框导航
- 导航配置与首页 Hero 内容均通过配置文件/frontmatter 驱动，无需修改组件源码

## Capabilities

### New Capabilities

- `top-nav`: 全站固定顶部导航，含链接配置、当前页高亮（含子路径匹配）、暗色模式控件、移动端汉堡菜单
- `home-hero`: 首页品牌 Hero 区域，读取 frontmatter 字段渲染头像、标签语、简介、精选文章卡片
- `visual-theme`: 全站视觉主题，包含点阵背景纹理、橙色强调色、细边框、大标题等 CSS 变量/样式覆盖

### Modified Capabilities

（无已有 spec 需变更）

## Impact

- `quartz.layout.ts`：调整各页面类型的组件配置，首页启用 ConditionalRender 隐藏侧边栏；全局 header 接入 TopNav 组件
- `quartz.config.ts`（或同级 `quartz.nav.ts`）：新增导航链接配置项
- `quartz/components/`：新增 `TopNav.tsx`、`HomeHero.tsx`
- `quartz/styles/`：新增/覆盖主题 CSS（点阵背景、橙色强调色等）
- `content/index.md` frontmatter：已有 `heroAvatar`、`heroTagline`、`heroIntro`、`featuredSlugs` 字段，组件直接读取
