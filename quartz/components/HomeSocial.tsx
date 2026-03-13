import homeSocialStyles from "./styles/homeSocial.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface SocialLink {
  platform: string
  url: string
  label: string
}

function getSocialIcon(platform: string): string {
  const icons: Record<string, string> = {
    github: "[GH]",
    email: "[@@]",
    bilibili: "[BL]",
    twitter: "[TW]",
    rss: "[RS]",
    wechat: "[WX]",
    zhihu: "[ZH]",
  }
  return icons[platform.toLowerCase()] ?? `[${platform.slice(0, 2).toUpperCase()}]`
}

const HomeSocial: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const fm = fileData.frontmatter as Record<string, any> | undefined
  if (!fm) return null

  const links = fm.socialLinks as SocialLink[] | undefined
  if (!links?.length) return null

  return (
    <section class={classNames(displayClass, "home-social")}>
      <h2 class="section-title">{"// CONNECT"}</h2>
      <div class="social-links">
        {links.map((link) => (
          <a
            class="social-link"
            href={link.url}
            target={link.url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            <span class="social-icon">{getSocialIcon(link.platform)}</span>
            <span class="social-label">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

HomeSocial.css = homeSocialStyles

export default (() => HomeSocial) satisfies QuartzComponentConstructor
