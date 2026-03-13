# Quartz 博客美化需求文档（基于仓库现状校准）

## 1. 目标与范围

- 本次工作基于当前 Quartz 仓库完成，目标不是重做站点框架，而是在保留现有内容生成链路的前提下，完成信息架构调整、首页品牌化和全站视觉统一。
- 需求实现应以现有仓库为锚点，优先复用 `quartz.layout.ts`、`quartz.config.ts`、`quartz/plugins/emitters/folderPage.tsx`、`quartz/plugins/transformers/frontmatter.ts`。
- 默认不引入后台系统、数据库或独立 CMS。

## 2. 当前仓库现状

- 首页来自 `content/index.md`，当前仍按普通内容页渲染，不存在独立 Hero 或顶部导航配置。
- 当前内容页已启用的组件为：`Breadcrumbs`（首页除外）、`ArticleTitle`、`ContentMeta`、`TagList`、`Search`、`Darkmode`、`ReaderMode`、`Explorer`、`Graph`、`TableOfContents`、`Backlinks`。
- 当前列表页已启用的组件为：`Breadcrumbs`、`ArticleTitle`、`ContentMeta`、`Search`、`Darkmode`、`Explorer`。
- `sharedPageComponents.header` 当前为空；若要实现全站固定顶部导航，需要从 header 区域接入自定义组件。
- Quartz 已启用 `FolderPage`，目录页会自动生成，并可展示子目录与文章列表，不需要为“知识库 / 文章库”单独设计一套路由系统。
- Markdown frontmatter 支持自定义字段，因此首页 Hero 信息与精选文章可优先配置在 `content/index.md` 的 frontmatter 中，不必默认扩展全局配置类型。
- 当前内容中已存在较多跨目录相对链接；若执行真实目录迁移，旧 slug 和部分相对链接会失效，必须同步修正。

## 3. 确认后的需求

- 信息架构：站点一级入口调整为 `首页 / 知识库 / 文章库`。
- 目录迁移：采用真实目录迁移，目标结构如下：

| 迁移前                  | 迁移后                       |
| ----------------------- | ---------------------------- |
| `content/index.md`      | 保持首页入口不变             |
| `content/00人工智能/**` | `content/知识库/人工智能/**` |
| `content/01工具使用/**` | `content/知识库/工具使用/**` |
| `content/02专业学习/**` | `content/知识库/专业学习/**` |
| `content/归档文章/**`   | `content/文章库/归档文章/**` |
| `content/技术文章/**`   | `content/文章库/技术文章/**` |

- 顶部导航：新增全站固定顶部导航，包含 `首页 / 知识库 / 文章库` 三个一级入口，且需具备悬停态与当前页面高亮态。
- 首页定位：首页改为品牌展示页，不再按普通文章页展示，需包含头像、个人标签语、个人简介、3 篇精选文章入口。
- 首页控件收敛：首页至少隐藏当前已启用的 `ArticleTitle`、`ContentMeta`、`TagList`、`Search`、`Darkmode`、`ReaderMode`、`Explorer`、`Graph`、`TableOfContents`、`Backlinks`，仅保留顶部导航与 Hero 主体内容。
- 列表页定位：列表页保留顶部导航、页面标题/说明、分类列表和搜索入口，整体弱化工具感。
- 文章页定位：文章页保留顶部导航和必要阅读辅助能力，整体视觉需与首页统一。
- 默认保留的文章页元素为：`Breadcrumbs`、`ArticleTitle`、`ContentMeta`、`TagList`、`TableOfContents`、`Graph`、`Backlinks`。
- 视觉风格：参考示例网站的视觉语言，不要求逐像素复刻，但必须满足以下约束：浅色底、点阵或网格背景、强识别度大标题、细边框导航、描边按钮、少量橙色强调，同时兼顾阅读场景与移动端适配。
- 非目标：本次不新增后台选文系统，不新增数据库，不默认承诺兼容旧 URL。

## 4. 推荐实现约束

- 顶部导航配置源：放在 `quartz.config.ts` 或同级自定义配置模块，便于全站复用。
- 首页 Hero 与精选文章配置源：优先放在 `content/index.md` 的 frontmatter，其中头像资源路径固定为 `content/Zassets/home-avatar.png`，frontmatter 中使用 `Zassets/home-avatar.png`。
- `知识库`、`文章库` 及其子分类页优先复用现有 `FolderPage`；只有在需要定制说明文案时，才为对应目录补充 `index.md`。
- 首页与非首页的组件差异优先通过现有条件渲染能力处理，不新增第二套站点入口。
- 目录迁移采用真实文件迁移；迁移后需要同步修正内容内相对链接、首页入口链接与导航链接。
- 若后续要兼容少量旧地址，可通过 frontmatter `aliases` 或 `permalink` 单点补齐，但这不属于本次默认范围。

## 5. 已确认的首页内容配置

- 首页头像资源路径：`content/Zassets/home-avatar.png`。
- 首页头像 frontmatter 值：`Zassets/home-avatar.png`。
- 个人标签语：`记录产生价值`。
- 个人简介：`嵌入式软件工程师`。
- 精选文章 slug：
  - `AI编程+工具`
  - `AI编程工作流`
  - `Git的图形化使用`

## 6. 验收标准

- 全站出现固定顶部导航，且首页、知识库、文章库、文章详情页均能正确高亮当前入口。
- 首页展示头像、标签语、简介和 3 篇精选文章入口，且不再出现普通内容页的工具组件。
- 列表页保留搜索入口；文章页继续保留 `Graph` 与 `Backlinks`。
- 目录迁移完成后，`知识库` 下包含 `人工智能 / 工具使用 / 专业学习`，`文章库` 下包含 `归档文章 / 技术文章`，内容数量与迁移前保持一致。
- 修改导航配置后，无需改组件源码即可调整导航文案；修改 `content/index.md` 后，无需改组件源码即可调整首页 Hero 和精选文章。
- 桌面端与移动端均可正常浏览；首页更偏品牌展示，列表页与文章页保留必要阅读信息但风格统一。
- 迁移后从首页、导航页和抽样内容页进入时不出现明显断链，重点检查跨目录相对链接。

示例网站：https://v0-design-brutalist-ai-saa-s.vercel.app/
示例网站截图：docs/spec/beautify/网站风格示例.png
示例头像：docs/spec/beautify/头像.png
