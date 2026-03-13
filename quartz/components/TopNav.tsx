// @ts-ignore
import darkmodeScript from "./scripts/darkmode.inline"
import darkmodeStyles from "./styles/darkmode.scss"
import topnavStyles from "./styles/topnav.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { concatenateResources } from "../util/resources"
import { classNames } from "../util/lang"
import DarkmodeConstructor from "./Darkmode"
import { pathToRoot } from "../util/path"

const DarkmodeComponent = DarkmodeConstructor()

const TopNav: QuartzComponent = (props: QuartzComponentProps) => {
  const { cfg, fileData, displayClass } = props
  const slug = fileData.slug ?? ""
  const navLinks = cfg.navLinks ?? []
  const baseDir = pathToRoot(slug)

  function isActive(href: string): boolean {
    if (href === "/") {
      return slug === "index"
    }
    const normalized = href.replace(/^\//, "")
    return slug.startsWith(normalized)
  }

  return (
    <nav class={classNames(displayClass, "top-nav")}>
      <div class="top-nav-inner">
        <div class="top-nav-logo">
          <a href={baseDir}>{cfg.pageTitle}</a>
        </div>

        <input type="checkbox" id="top-nav-toggle" class="top-nav-toggle-input" />
        <label for="top-nav-toggle" class="top-nav-hamburger" aria-label="菜单">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div class="top-nav-links">
          {navLinks.map((link) => (
            <a href={link.href} class={isActive(link.href) ? "active" : ""}>
              {link.label}
            </a>
          ))}
        </div>

        <div class="top-nav-actions">
          <DarkmodeComponent {...props} />
        </div>
      </div>
    </nav>
  )
}

TopNav.beforeDOMLoaded = concatenateResources(darkmodeScript)
TopNav.css = concatenateResources(darkmodeStyles, topnavStyles)

export default (() => TopNav) satisfies QuartzComponentConstructor
