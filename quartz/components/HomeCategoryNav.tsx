import homeCategoryNavStyles from "./styles/homeCategoryNav.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { pathToRoot } from "../util/path"

interface CategoryItem {
  name: string
  slug: string
  icon?: string
}

const HomeCategoryNav: QuartzComponent = ({
  fileData,
  allFiles,
  displayClass,
}: QuartzComponentProps) => {
  const fm = fileData.frontmatter as Record<string, any> | undefined
  if (!fm) return null

  const categories = fm.categoryNav as CategoryItem[] | undefined
  if (!categories?.length) return null

  const baseDir = pathToRoot(fileData.slug ?? "index")

  return (
    <section class={classNames(displayClass, "home-category")}>
      <h2 class="section-title">{"// CATEGORIES"}</h2>
      <div class="category-grid">
        {categories.map((cat) => {
          const count = allFiles.filter(
            (f) => f.slug?.startsWith(cat.slug) || f.slug?.includes(cat.slug),
          ).length

          return (
            <a class="category-card" href={`${baseDir}/${cat.slug}`}>
              {cat.icon && <span class="category-icon">{cat.icon}</span>}
              <span class="category-name">{cat.name}</span>
              <span class="category-count">{count} posts</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}

HomeCategoryNav.css = homeCategoryNavStyles

export default (() => HomeCategoryNav) satisfies QuartzComponentConstructor
