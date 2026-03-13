## Context

项目基于 Quartz v4 静态站点生成器，内容以 Markdown 管理于 `content/`。当前站点无全局导航，首页按普通内容页渲染，视觉风格未统一。

现有关键文件：
- `quartz.layout.ts`：定义 `sharedPageComponents`（全局 header/footer）与 `defaultContentPageLayout`/`defaultListPageLayout`
- `quartz.config.ts`：站点级配置（主题色、字体、插件）
- `quartz/components/index.ts`：组件统一导出入口
- `quartz/components/ConditionalRender.tsx`：已有条件渲染组件，可按 slug/路径控制显示
- `quartz/styles/custom.scss`：自定义样式入口

## Goals / Non-Goals

**Goals:**
- 新增 `TopNav` 组件，挂载到全局 `header`，支持链接配置与暗色模式控件
- 新增 `HomeHero` 组件，读取 frontmatter 字段，在首页渲染品牌 Hero 区
- 全站视觉主题统一：点阵背景、橙色强调色、细边框导航、大标题
- 首页隐藏所有侧边栏与工具组件；列表页隐藏 Explorer
- 修改导航文案/Hero 内容无需改组件源码

**Non-Goals:**
- 不新增后台 CMS 或数据库
- 不修改内容链接或 URL 结构
- 不逐像素复刻示例网站

## Decisions

### 决策 1：导航链接配置位置

**选项 A**：在 `quartz.config.ts` 中为 `configuration` 添加 `navLinks` 字段
**选项 B**：创建独立 `quartz.nav.ts` 配置模块

**选择 A**。`quartz.config.ts` 已是站点唯一配置入口，用户改配置只需打开一个文件。`QuartzConfig` 类型需在 `quartz/cfg.ts` 中扩展 `navLinks?: NavLink[]`。

### 决策 2：暗色模式控件在 TopNav 中的集成方式

**选项 A**：TopNav 内部直接渲染 `<Darkmode />` 组件实例
**选项 B**：TopNav 自行渲染暗色切换按钮，共用 `darkmode.inline` 脚本

**选择 A**。Darkmode 组件含 `beforeDOMLoaded` 脚本和 CSS，直接复用可确保行为一致，无需重复逻辑。TopNav 在 JSX 中 `import Darkmode from "./Darkmode"` 并渲染即可。TopNav 的 `beforeDOMLoaded` 需透传 Darkmode 的脚本。

### 决策 3：首页专属布局方式

**选项 A**：在 `defaultContentPageLayout` 中大量使用 `ConditionalRender` 包裹需要隐藏的组件
**选项 B**：在 `quartz.layout.ts` 中新增 `homePageLayout`，在 `quartz/plugins/emitters/contentPage.tsx` 中按 slug 分派

**选择 B**。首页与内容页差异极大（隐藏全部侧边栏），ConditionalRender 包裹所有组件会导致 layout.ts 冗余度高。新增 `homePageLayout` 更清晰，在 ContentPage emitter 中按 `slug === "index"` 选择 layout。需要确认 `contentPage.tsx` 是否已有 layout 选择机制。

### 决策 4：精选文章数据获取

**选项 A**：`HomeHero` 组件运行时通过 slug 在 `allFiles` prop 中查找文章标题和路径
**选项 B**：构建时预处理，将精选文章写入静态 JSON

**选择 A**。`QuartzComponentProps` 已包含 `allFiles` 数组，可在组件内直接按 slug 匹配（文件名包含 slug 字符串），无需额外构建步骤。

### 决策 5：视觉主题实现方式

CSS 变量覆盖写入 `quartz/styles/custom.scss`，不修改 `variables.scss`（保持 upstream 可更新性）。点阵背景通过 CSS `radial-gradient` 实现，无需额外资源。橙色强调色以 CSS 变量 `--accent` 注入，可在 dark/light 两套主题下分别定义。

## Risks / Trade-offs

- **ContentPage emitter 修改风险**：按 slug 分派 layout 需要修改 `quartz/plugins/emitters/contentPage.tsx`，该文件属于框架核心，升级时可能冲突。→ 改动范围最小化，仅添加 layout 选择逻辑，不改其他逻辑。
- **QuartzConfig 类型扩展**：修改 `quartz/cfg.ts` 接口可能影响类型检查。→ 使用可选字段 `navLinks?`，有默认值时向后兼容。
- **TopNav 移动端适配**：汉堡菜单需要额外 JS 交互。→ 使用纯 CSS checkbox hack 或最小内联脚本，避免引入额外依赖。
- **allFiles 中 slug 匹配准确性**：`featuredSlugs` 按文件名模糊匹配可能命中多个文件。→ 使用精确匹配 `file.slug === slug` 或 `file.slug.endsWith(slug)`，取第一个结果，如无匹配则不渲染该卡片。
