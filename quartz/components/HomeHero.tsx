import homeheroStyles from "./styles/homehero.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { pathToRoot } from "../util/path"
// @ts-ignore
import typewriterScript from "./scripts/typewriter.inline"

// SVG 图标映射
const SocialIcons: Record<string, JSX.Element> = {
  github: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c.998.005 2.02.137 2.989.402 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  juejin: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 0L2.397 7.061l1.747 1.27L12 2.545l7.856 5.786 1.747-1.27zm0 4.393L4.79 9.927l1.747 1.27L12 7.333l5.463 3.864 1.747-1.27zm0 4.394l-4.481 3.162.008.006H7.52l-.005-.003L6.04 12.96l-.01.006.013.01L12 17.131l5.957-4.156.013-.01-.01-.006-1.475-1.009-.005.003h-.007zm-5.951 5.76L12 18.713l5.951-4.166 1.476 1.01L12 21.543l-7.427-5.986z"/>
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  rss: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
    </svg>
  ),
}

interface SocialLink {
  platform: string
  url: string
  label: string
}

const HomeHero: QuartzComponent = ({ cfg, fileData, allFiles, displayClass }: QuartzComponentProps) => {
  const frontmatter = fileData.frontmatter as Record<string, any> | undefined
  if (!frontmatter) return null

  const { heroAvatar, heroTagline, heroIntro, aboutMe, techStack, socialLinks } = frontmatter
  const baseDir = pathToRoot(fileData.slug ?? "index")

  return (
    <div class={classNames(displayClass, "home-hero")}>
      {/* 上部：头像 + 标语 */}
      <div class="hero-top">
        {heroAvatar && (
          <img
            class="hero-avatar"
            src={`${baseDir}/${heroAvatar}`}
            alt="头像"
          />
        )}
        <div class="hero-right">
          {heroTagline && (
            <h1 class="hero-tagline">
              <span class="typewriter" data-text={heroTagline}></span>
              <span class="typewriter-cursor">_</span>
            </h1>
          )}
          {heroIntro && <p class="hero-intro">{heroIntro}</p>}

          {Array.isArray(socialLinks) && socialLinks.length > 0 && (
            <div class="hero-social">
              {(socialLinks as SocialLink[]).map((link) => (
                <a
                  class="hero-social-link"
                  href={link.url}
                  target={link.url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  title={link.label}
                >
                  {SocialIcons[link.platform] ?? null}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 下部：技术栈 + ABOUT 全宽横排 */}
      <div class="hero-bottom">
        {Array.isArray(techStack) && techStack.length > 0 && (
          <div class="hero-techstack">
            <span class="hero-section-label">{"// TECH_STACK"}</span>
            <div class="hero-tags">
              {(techStack as string[]).map((tag) => (
                <span class="hero-tag">{tag}</span>
              ))}
            </div>
          </div>
        )}
        {aboutMe && (
          <div class="hero-about">
            <span class="hero-section-label">{"// ABOUT"}</span>
            <p class="hero-about-text">{aboutMe}</p>
          </div>
        )}
      </div>
    </div>
  )
}

HomeHero.css = homeheroStyles
HomeHero.afterDOMLoaded = typewriterScript

export default (() => HomeHero) satisfies QuartzComponentConstructor
