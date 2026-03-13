## ADDED Requirements

### Requirement: 首页渲染 Hero 品牌区域
系统 SHALL 在首页（slug 为 `index`）渲染 `HomeHero` 组件，替代默认内容页渲染，展示头像、标签语、个人简介和精选文章卡片。

#### Scenario: 首页显示 Hero 区域
- **WHEN** 用户访问首页
- **THEN** 页面主体区域显示头像、标签语、简介和精选文章卡片，不显示普通内容正文

### Requirement: Hero 内容从 frontmatter 读取
系统 SHALL 从首页 `content/index.md` 的 frontmatter 字段读取 Hero 内容：`heroAvatar`（头像相对路径）、`heroTagline`（标签语）、`heroIntro`（简介文本）、`featuredSlugs`（精选文章 slug 数组）。修改这些字段后无需改组件源码即可更新首页展示内容。

#### Scenario: 渲染 frontmatter 中的头像
- **WHEN** frontmatter 含 `heroAvatar: Zassets/home-avatar.png`
- **THEN** 首页渲染该路径对应的头像图片

#### Scenario: 渲染标签语与简介
- **WHEN** frontmatter 含 `heroTagline: 记录产生价值` 和 `heroIntro: 嵌入式软件工程师`
- **THEN** 首页显示对应文字

#### Scenario: frontmatter 缺失字段时优雅降级
- **WHEN** frontmatter 中某个 Hero 字段不存在
- **THEN** 对应区域不渲染，其他区域正常显示，不报错

### Requirement: 精选文章卡片展示
系统 SHALL 根据 `featuredSlugs` 数组，从全站文件列表中查找对应文章，渲染为可点击的文章卡片（含标题和链接）。最多展示 3 篇。

#### Scenario: 精选文章卡片渲染
- **WHEN** `featuredSlugs` 包含 `["AI编程+工具", "AI编程工作流", "Git的图形化使用"]`
- **THEN** 首页渲染 3 个文章卡片，各卡片显示对应文章标题并可点击跳转

#### Scenario: slug 在 allFiles 中无匹配时跳过
- **WHEN** `featuredSlugs` 中某个 slug 在全站文件中找不到匹配
- **THEN** 该 slug 对应的卡片不渲染，其余卡片正常展示，不报错

### Requirement: 首页隐藏侧边栏与工具组件
系统 SHALL 在首页不渲染以下组件：`ArticleTitle`、`ContentMeta`、`TagList`（beforeBody 区）、`PageTitle`、`Search`、`Darkmode`（left sidebar）、`ReaderMode`（left sidebar）、`Explorer`（left sidebar）、`Graph`、`TableOfContents`、`Backlinks`（right sidebar）。

#### Scenario: 首页无侧边栏组件
- **WHEN** 用户访问首页
- **THEN** 页面中不出现文件树、目录、反链、知识图谱、搜索框等工具组件

#### Scenario: 普通文章页侧边栏正常显示
- **WHEN** 用户访问非首页的文章页
- **THEN** 侧边栏与工具组件按 `defaultContentPageLayout` 正常渲染

### Requirement: 移动端 Hero 布局适配
系统 SHALL 在移动端（≤ 768px）将首页 Hero 区域的头像与文字上下排列（垂直布局），桌面端可左右排列。

#### Scenario: 移动端头像与文字垂直排列
- **WHEN** 用户在移动端访问首页
- **THEN** 头像在上，文字（标签语、简介、精选文章）在下，垂直排列显示
