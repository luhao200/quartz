import homeTechStackStyles from "./styles/homeTechStack.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const HomeTechStack: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const fm = fileData.frontmatter as Record<string, any> | undefined
  if (!fm) return null

  const aboutMe = fm.aboutMe as string | undefined
  const techStack = fm.techStack as string[] | undefined
  if (!aboutMe && !techStack?.length) return null

  return (
    <section class={classNames(displayClass, "home-techstack")}>
      <div class="techstack-inner">
        {aboutMe && (
          <div class="techstack-about">
            <h2 class="section-title">{"// ABOUT"}</h2>
            <p class="about-text">{aboutMe}</p>
          </div>
        )}
        {techStack && techStack.length > 0 && (
          <div class="techstack-tags">
            <h2 class="section-title">{"// TECH_STACK"}</h2>
            <div class="tag-cloud">
              {techStack.map((tag) => (
                <span class="tech-tag">{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

HomeTechStack.css = homeTechStackStyles

export default (() => HomeTechStack) satisfies QuartzComponentConstructor
