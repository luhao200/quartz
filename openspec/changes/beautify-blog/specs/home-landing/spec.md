## ADDED Requirements

### Requirement: 首页展示品牌化 Hero 和精选文章
首页 SHALL 展示头像、标签语、个人简介和 3 篇精选文章入口，这些内容 MUST 由站点配置驱动，精选文章 MUST 解析到现有内容 slug。

#### Scenario: 首页展示完整 Hero
- **WHEN** 用户打开首页
- **THEN** 页面显示头像、标签语、个人简介和 3 篇精选文章入口

#### Scenario: 更新精选文章配置
- **WHEN** 维护者修改 3 个精选文章 slug 并重新构建站点
- **THEN** 首页展示的新精选文章入口全部指向更新后的内容页面

### Requirement: 首页隐藏工具型控件
首页 MUST 隐藏搜索、目录树、知识图谱、最近更新、目录大纲和反向链接等工具型控件，仅保留固定导航、Hero 和首页主体内容。

#### Scenario: 首页控件收敛
- **WHEN** 用户打开首页
- **THEN** 页面上不显示搜索框、Explorer、Graph、RecentNotes、目录大纲或反向链接模块
