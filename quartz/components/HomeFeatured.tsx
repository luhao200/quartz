import homeFeaturedStyles from "./styles/homeFeatured.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { pathToRoot } from "../util/path"

const HomeFeatured: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  const frontmatter = fileData.frontmatter as Record<string, any> | undefined
  if (!frontmatter) return null

  const { featuredSlugs } = frontmatter
  const baseDir = pathToRoot(fileData.slug ?? "index")

  const featuredArticles: Array<{ title: string; slug: string }> = []
  if (Array.isArray(featuredSlugs)) {
    for (const targetSlug of featuredSlugs.slice(0, 3)) {
      const found = allFiles.find(
        (f) => f.slug === targetSlug || f.slug?.endsWith(targetSlug as string),
      )
      if (found) {
        const title = (found.frontmatter as any)?.title ?? found.slug ?? targetSlug
        featuredArticles.push({ title, slug: found.slug! })
      }
    }
  }

  if (featuredArticles.length === 0) return null

  return (
    <section class={classNames(displayClass, "home-featured")}>
      <div class="featured-inner">
        <h2 class="featured-title">精选文章</h2>
        <div class="featured-cards">
          {featuredArticles.map((article, i) => (
            <a class="featured-card" href={`${baseDir}/${article.slug}`}>
              <span class="featured-card-num">0{i + 1}</span>
              <span class="featured-card-title">{article.title}</span>
              <span class="featured-card-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

HomeFeatured.css = homeFeaturedStyles

export default (() => HomeFeatured) satisfies QuartzComponentConstructor
