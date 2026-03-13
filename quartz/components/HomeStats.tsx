import homeStatsStyles from "./styles/homeStats.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const HomeStats: QuartzComponent = ({ allFiles, displayClass }: QuartzComponentProps) => {
  const totalArticles = allFiles.filter((f) => f.slug !== "index").length

  const folders = new Set<string>()
  for (const f of allFiles) {
    const parts = f.slug?.split("/")
    if (parts && parts.length > 1) folders.add(parts[0])
  }

  const tags = new Set<string>()
  for (const f of allFiles) {
    const t = (f.frontmatter as any)?.tags
    if (Array.isArray(t)) t.forEach((tag: string) => tags.add(tag))
  }

  const stats = [
    { label: "ARTICLES", value: totalArticles },
    { label: "CATEGORIES", value: folders.size },
    { label: "TAGS", value: tags.size },
  ]

  return (
    <section class={classNames(displayClass, "home-stats")}>
      <div class="stats-grid">
        {stats.map((s) => (
          <div class="stat-card">
            <span class="stat-value">{s.value}</span>
            <span class="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

HomeStats.css = homeStatsStyles

export default (() => HomeStats) satisfies QuartzComponentConstructor
