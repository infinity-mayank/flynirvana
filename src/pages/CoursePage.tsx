import { useParams, Link, useNavigate } from 'react-router-dom'
import { SEOMeta, PageHero, Marquee, Newsletter, CourseCard } from '@/components/ui/index'
import { COURSES } from '@/data/courses'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import './CoursePage.css'

export default function CoursePage() {
  const { courseSlug } = useParams<{ courseSlug: string }>()
  const navigate = useNavigate()
  useScrollReveal()

  const course = COURSES.find(c => c.slug === courseSlug)
  if (!course) {
    navigate('/learn-paragliding', { replace: true })
    return null
  }

  const related = COURSES.filter(c => c.slug !== course.slug).slice(0, 3)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.shortDesc,
    provider: {
      '@type': 'Organization',
      name: 'Nirvana Adventures',
      url: 'https://www.flynirvana.com',
    },
    timeRequired: `P${course.duration.replace(' Days', 'D').replace(' Day', 'D')}`,
    educationalLevel: course.level,
    url: `https://www.flynirvana.com/learn-paragliding/${course.slug}`,
  }

  return (
    <>
      <SEOMeta
        title={course.seoTitle}
        description={course.seoDesc}
        canonical={`/learn-paragliding/${course.slug}`}
        keywords={`${course.name} Kamshet, paragliding ${course.duration} course, ${course.level} paragliding India`}
        schema={schema}
      />
      <PageHero
        title={course.name}
        subtitle={`${course.duration} · ${course.level}`}
        breadcrumbs={[
          { label: 'Learn Paragliding', path: '/learn-paragliding' },
          { label: course.name },
        ]}
      />
      <Marquee />

      <section>
        <div className="container">
          <div className="course-detail-grid">
            {/* Main content */}
            <div>
              <div className="section-tag reveal">Course Overview</div>
              <h2 className="display-md reveal" style={{ marginBottom: '20px' }}>
                {course.icon} {course.name}
              </h2>
              <p className="body-lg reveal">{course.fullDesc}</p>

              <div style={{ marginTop: '44px' }} className="reveal">
                <div className="section-tag">What You'll Experience</div>
                <div className="check-list" style={{ marginTop: '18px' }}>
                  {course.highlights.map(h => (
                    <div key={h} className="check-item">
                      <span className="check-icon" aria-hidden="true">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '44px' }} className="reveal">
                <div className="section-tag">What's Included</div>
                <div className="includes-grid" style={{ marginTop: '18px' }}>
                  {course.includes.map(item => (
                    <div key={item} className="include-chip">
                      <span aria-hidden="true">✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky sidebar */}
            <aside className="course-sidebar reveal">
              <div className="sidebar-card">
                <div className="sidebar-icon" aria-hidden="true">{course.icon}</div>
                <h3 className="sidebar-name">{course.name}</h3>
                <p className="sidebar-level">{course.level}</p>

                <div className="sidebar-meta">
                  {[
                    { icon: '📍', label: 'Location', value: 'Kamshet, Maharashtra' },
                    { icon: '⏱️', label: 'Duration', value: course.duration },
                    { icon: '👥', label: 'Batch Size', value: 'Small groups' },
                    { icon: '🛡️', label: 'Certification', value: 'APPI / Nirvana' },
                    { icon: '🏠', label: 'Stay', value: 'Native Place Guesthouse' },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="meta-row">
                      <span className="meta-icon" aria-hidden="true">{icon}</span>
                      <div>
                        <div className="meta-label">{label}</div>
                        <div className="meta-value">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn btn-gold" style={{ width: '100%', marginTop: '24px' }}>
                  Enquire &amp; Book →
                </Link>
                <Link to="/learn-paragliding" className="btn btn-outline" style={{ width: '100%', marginTop: '10px' }}>
                  ← All Courses
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related courses */}
      <section style={{ background: 'var(--sky2)' }}>
        <div className="container">
          <div className="section-tag reveal">You Might Also Like</div>
          <h2 className="display-lg reveal">Related Courses</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px', marginTop: '40px' }}>
            {related.map((c, i) => (
              <CourseCard key={c.slug} course={c} delay={i + 1} />
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  )
}
