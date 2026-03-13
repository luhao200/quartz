import homeheroStyles from "./styles/homehero.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { pathToRoot } from "../util/path"
// @ts-ignore
import typewriterScript from "./scripts/typewriter.inline"

const HomeHero: QuartzComponent = ({ cfg, fileData, allFiles, displayClass }: QuartzComponentProps) => {
  const frontmatter = fileData.frontmatter as Record<string, any> | undefined
  if (!frontmatter) return null

  const { heroAvatar, heroTagline, heroIntro, featuredSlugs } = frontmatter
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

  return (
    <div class={classNames(displayClass, "home-hero")}>
      <div class="hero-left">
        {heroAvatar && (
          <img
            class="hero-avatar"
            src={`${baseDir}/${heroAvatar}`}
            alt="头像"
          />
        )}
      </div>

      <div class="hero-right">
        {heroTagline && (
          <h1 class="hero-tagline">
            <span class="typewriter" data-text={heroTagline}></span>
            <span class="typewriter-cursor">_</span>
          </h1>
        )}
        {heroIntro && <p class="hero-intro">{heroIntro}</p>}

        {featuredArticles.length > 0 && (
          <div class="hero-featured">
            <h3 class="hero-featured-title">精选文章</h3>
            <div class="hero-cards">
              {featuredArticles.map((article) => (
                <a
                  class="hero-card"
                  href={`${baseDir}/${article.slug}`}
                >
                  {article.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

HomeHero.css = homeheroStyles
HomeHero.afterDOMLoaded = typewriterScript

export default (() => HomeHero) satisfies QuartzComponentConstructor
