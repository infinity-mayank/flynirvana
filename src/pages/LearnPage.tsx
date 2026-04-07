import { SEOMeta, Marquee, PageHero, WhySection, Newsletter, CourseCard, TestimonialsGrid } from '@/components/ui/index'
import { COURSES } from '@/data/courses'
import { TESTIMONIALS } from '@/data/index'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function LearnPage() {
  useScrollReveal()
  return (
    <>
      <SEOMeta
        title="Learn Paragliding in Kamshet | All Courses | Fly Nirvana"
        description="Explore all paragliding courses at Fly Nirvana, Kamshet — from 2-day beginner intros to full APPI international licences. India's ISO certified school since 1997."
        canonical="/learn-paragliding"
        keywords="learn paragliding Kamshet, paragliding course Pune, APPI paragliding India, beginner paragliding course Maharashtra"
      />
      <PageHero
        title="Learn Paragliding"
        subtitle="From your first taste of ground handling to an internationally recognised APPI licence — India's most complete paragliding training programme at Kamshet, Maharashtra."
        breadcrumbs={[{ label: 'Learn Paragliding' }]}
      />
      <Marquee />
      <section>
        <div className="container">
          <div className="section-tag reveal">All Courses</div>
          <h2 className="display-lg reveal">Choose Your Journey</h2>
          <p className="body-lg reveal" style={{ maxWidth: '620px', marginTop: '12px' }}>
            Whether you're a total beginner or an experienced pilot looking to advance, we have
            the perfect course for you.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '22px', marginTop: '48px' }}>
            {COURSES.map((c, i) => (
              <CourseCard key={c.slug} course={c} delay={Math.min(i + 1, 5)} />
            ))}
          </div>
        </div>
      </section>
      <WhySection />
      <section style={{ background: 'var(--sky)' }}>
        <div className="container">
          <div className="section-tag reveal">Student Stories</div>
          <h2 className="display-lg reveal">What Students Say</h2>
          <TestimonialsGrid items={TESTIMONIALS.filter(t => t.type === 'student' || t.type === 'pilot').slice(0, 3)} />
        </div>
      </section>
      <Newsletter />
    </>
  )
}
