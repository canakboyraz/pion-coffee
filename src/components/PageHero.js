import { SplitText, Reveal } from './motion'
import { Bean } from './Icons'

/** İç sayfaların koyu lacivert başlık alanı. */
export default function PageHero({ eyebrow, title, accent, description, image, children, compact = false }) {
  return (
    <section className={`grain relative overflow-hidden bg-ink-900 text-white ${compact ? 'pb-14 pt-32 lg:pb-16 lg:pt-36' : 'pb-20 pt-36 lg:pb-28 lg:pt-44'}`}>
      {image && (
        <div className="absolute inset-0" aria-hidden="true">
          <img src={image} alt="" className="h-full w-full scale-105 object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/80 to-ink-900" />
        </div>
      )}
      <div className="orb -right-24 -top-24 h-80 w-80 bg-caramel-500/40" aria-hidden="true" />
      <div className="orb bottom-0 left-1/4 h-64 w-64 bg-ink-400/40" style={{ animationDelay: '-6s' }} aria-hidden="true" />
      <Bean className="bean right-[12%] top-[38%] hidden h-10 w-10 text-caramel-700/70 md:block" style={{ '--r': '25deg' }} />
      <Bean className="bean bottom-[18%] right-[28%] hidden h-6 w-6 text-caramel-600/60 md:block" style={{ '--r': '-30deg', animationDelay: '-3s' }} />

      <div className="container-custom relative">
        {eyebrow && (
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
        )}
        <h1 className="display mt-5 text-5xl sm:text-6xl lg:text-8xl">
          <SplitText text={title} immediate delay={100} />
          {accent && (
            <>
              {' '}
              <SplitText text={accent} immediate delay={300} className="italic-accent" />
            </>
          )}
        </h1>
        {description && (
          <Reveal delay={450}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 lg:text-xl">{description}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
