# Quartz 博客美化需求文档

## 1. 目标与范围

- 本次工作基于当前 Quartz 仓库完成，目标是在保留现有内容生成链路的前提下，完成首页品牌化和全站视觉统一。
- 需求实现应以现有仓库为锚点，优先复用 `quartz.layout.ts`、`quartz.config.ts`、`quartz/plugins/emitters/folderPage.tsx`、`quartz/plugins/transformers/frontmatter.ts`。
- 默认不引入后台系统、数据库或独立 CMS。

## 2. 当前仓库现状

- 目录迁移已完成，当前 `content/` 下的目录结构为：
  ```
  content/
  ├── index.md              # 首页
  ├── Zassets/              # 静态资源（含 home-avatar.png）
  ├── 知识库/
  │   ├── 人工智能/         # 20 个文件
  │   ├── 工具使用/         # 60 个文件
  │   └── 专业学习/         # 246 个文件
  └── 文章库/
      ├── 归档文章/         # 22 个文件
      └── 技术文章/         # 74 个文件
  ```
- 首页来自 `content/index.md`，当前仍按普通内容页渲染，不存在独立 Hero 或顶部导航配置。
- 首页 frontmatter 已配置好 `heroAvatar`、`heroTagline`、`heroIntro`、`featuredSlugs` 字段。
- 当前内容页已启用的组件（`quartz.layout.ts`）：
  - `beforeBody`：`Breadcrumbs`（首页除外）、`ArticleTitle`、`ContentMeta`、`TagList`
  - `left` sidebar：`PageTitle`、`Search`、`Darkmode`、`ReaderMode`、`Explorer`
  - `right` sidebar：`Graph`、`TableOfContents`、`Backlinks`
- 当前列表页已启用的组件：
  - `beforeBody`：`Breadcrumbs`、`ArticleTitle`、`ContentMeta`
  - `left` sidebar：`PageTitle`、`Search`、`Darkmode`、`Explorer`
  - `right` sidebar：空
- `sharedPageComponents.header` 当前为空；若要实现全站固定顶部导航，需要从 header 区域接入自定义组件。
- Quartz 已启用 `FolderPage`，目录页会自动生成，不需要为”知识库 / 文章库”单独设计路由系统。
- Markdown frontmatter 支持自定义字段，首页 Hero 信息与精选文章已配置在 `content/index.md` 的 frontmatter 中。

## 3. 需求

### 3.1 顶部导航

- 新增全站固定顶部导航，包含 `首页 / 知识库 / 文章库` 三个一级入口。
- 需具备悬停态与当前页面高亮态（知识库下的子页面也应高亮”知识库”入口，文章库同理）。
- 导航配置源放在 `quartz.config.ts` 或同级自定义配置模块，修改配置即可调整导航文案，无需改组件源码。
- 移动端：导航折叠为汉堡菜单或其他紧凑形式。

### 3.2 首页

- 首页改为品牌展示页，不再按普通文章页展示。
- 需包含：头像、个人标签语、个人简介、3 篇精选文章入口。
- 首页隐藏所有非 Hero 的组件，具体为：
  - 隐藏 `beforeBody` 区域：`ArticleTitle`、`ContentMeta`、`TagList`
  - 隐藏 `left` sidebar 全部：`PageTitle`、`Search`、`Darkmode`、`ReaderMode`、`Explorer`
  - 隐藏 `right` sidebar 全部：`Graph`、`TableOfContents`、`Backlinks`
- 仅保留顶部导航与 Hero 主体内容。
- 首页与非首页的组件差异优先通过现有条件渲染能力（`ConditionalRender`）处理。

### 3.3 列表页（知识库/文章库及子分类页）

- 保留顶部导航、页面标题、分类列表和搜索入口。
- 隐藏 `Explorer`（左侧文件树），弱化工具感，让列表页更像内容导航而非 IDE。
- 优先复用现有 `FolderPage`；只有在需要定制说明文案时，才为对应目录补充 `index.md`。

### 3.4 文章页

- 保留顶部导航和必要阅读辅助能力，整体视觉需与首页统一。
- 保留的元素：`Breadcrumbs`、`ArticleTitle`、`ContentMeta`、`TagList`、`TableOfContents`、`Graph`、`Backlinks`。
- 隐藏 `ReaderMode`（已在首页隐藏，文章页保持一致）。

### 3.5 暗色模式

- 全站保留暗色模式支持。
- `Darkmode` 切换控件从 left sidebar 移至顶部导航栏右侧，全站可用（含首页）。

### 3.6 视觉风格

- 整体风格：浅色底、网格或点阵背景纹理、强识别度大标题、细边框导航栏、描边按钮、少量橙色强调色。
- 不要求逐像素复刻示例网站，以上述文字约束为准。示例网站仅作为视觉语言参考。
- 需兼顾阅读场景（文章页正文区域保持良好可读性）与移动端适配。
- 移动端首页 Hero 区域头像与文字上下排列。

## 4. 已确认的首页内容配置

- 首页头像资源路径：`content/Zassets/home-avatar.png`（已存在）。
- 首页头像 frontmatter 值：`Zassets/home-avatar.png`。
- 个人标签语：`记录产生价值`。
- 个人简介：`嵌入式软件工程师`。
- 精选文章 slug（短名称，实现时需在全站内容中按文件名匹配）：
  - `AI编程+工具`
  - `AI编程工作流`
  - `Git的图形化使用`

## 5. 非目标

- 本次不新增后台选文系统，不新增数据库。
- 不默认承诺兼容旧 URL（若需兼容少量旧地址，可后续通过 frontmatter `aliases` 单点补齐）。
- 不处理内容内的跨目录相对链接修正（目录迁移已完成，链接修正作为独立任务处理）。

## 6. 验收标准

- 全站出现固定顶部导航，且首页、知识库、文章库、文章详情页均能正确高亮当前入口。
- 顶部导航栏包含暗色模式切换控件，全站可用。
- 首页展示头像、标签语、简介和 3 篇精选文章入口，且不出现普通内容页的侧边栏和工具组件。
- 列表页展示分类列表和搜索入口，无文件树（Explorer）。
- 文章页保留 `Breadcrumbs`、`ArticleTitle`、`ContentMeta`、`TagList`、`TableOfContents`、`Graph`、`Backlinks`。
- `知识库` 下包含 `人工智能 / 工具使用 / 专业学习`，`文章库` 下包含 `归档文章 / 技术文章`，文件数量完整（共 422 个文件）。
- 修改导航配置后，无需改组件源码即可调整导航文案；修改 `content/index.md` frontmatter 后，无需改组件源码即可调整首页 Hero 和精选文章。
- 桌面端与移动端均可正常浏览，移动端导航有紧凑形式。
- 视觉风格满足第 3.6 节约束。

## 附录

- 示例网站（仅作视觉语言参考）：https://v0-design-brutalist-ai-saa-s.vercel.app/
- 示例网站截图：docs/spec/beautify/网站风格示例.png
- 示例头像：docs/spec/beautify/头像.png
