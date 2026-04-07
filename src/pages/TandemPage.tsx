import { Link } from 'react-router-dom'
import { SEOMeta, PageHero, Marquee, WhySection, Newsletter, TestimonialsGrid } from '@/components/ui/index'
import { TESTIMONIALS } from '@/data/index'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import './TandemPage.css'

const SAFETY_TIPS = [
  'Wear shoes with ankle support for better protection during take-off and landing',
  'Ladies should wear trousers, kurtas or comfortable flying attire (no skirts/dresses)',
  'Follow all instructions given by your tandem pilot strictly at all times',
  'Children under 18 years require written parental or guardian consent',
  'Those with heart, respiratory, back or other health issues must consult a doctor first',
  'Flights are weather-dependent — always call ahead to confirm availability before travelling',
  'You\'ll need your own transport to reach Kamshet from Mumbai or Pune',
  'From Kamshet, hire a local vehicle to reach the flying site (roads can be rough)',
  'Carry sunscreen, water and light snacks — no vendors are available at the site',
  'In-flight video & photos are available for ₹500 extra — ask your pilot in advance',
  'Please do not litter the site — carry a bag for your trash and respect nature',
]

const TANDEM_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tandem Paragliding at Kamshet',
  provider: { '@type': 'Organization', name: 'Nirvana Adventures', url: 'https://www.flynirvana.com' },
  description: 'Experience paragliding without training with our tandem flights at Kamshet, Maharashtra. Packages from ₹3,000.',
  areaServed: { '@type': 'Place', name: 'Kamshet, Maharashtra, India' },
  offers: [
    { '@type': 'Offer', name: 'Easy Flight', price: '3000', priceCurrency: 'INR', description: '10-15 minute tandem joyride' },
    { '@type': 'Offer', name: 'Learning Flight', price: '5000', priceCurrency: 'INR', description: '20-25 minute tandem with controls demo' },
    { '@type': 'Offer', name: 'Pro Flight', price: '7000', priceCurrency: 'INR', description: '30-35 minute aerobatic tandem flight' },
  ],
}

export default function TandemPage() {
  useScrollReveal()
  return (
    <>
      <SEOMeta
        title="Tandem Paragliding Kamshet | No Training Needed | Fly Nirvana"
        description="Experience paragliding without any training! Book a tandem paragliding flight at Kamshet, Maharashtra with Nirvana Adventures. Packages from ₹3,000. Just 60km from Pune."
        canonical="/tandem-paragliding"
        keywords="tandem paragliding Kamshet, tandem paragliding near Pune, tandem paragliding near Mumbai, paragliding joyride Maharashtra"
        schema={TANDEM_SCHEMA}
      />
      <PageHero
        title="Tandem Paragliding"
        subtitle="Experience the joy of flight without any training. Our expert tandem pilots take you on a breathtaking ride over Kamshet's hills and green fields. No experience necessary."
        breadcrumbs={[{ label: 'Tandem Paragliding' }]}
      />
      <Marquee />

      <section>
        <div className="container">
          <div className="tandem-grid">
            {/* Left column */}
            <div>
              <div className="section-tag reveal">Fly Without Training</div>
              <h2 className="display-lg reveal" style={{ marginBottom: '20px' }}>Fly Like a Bird Today</h2>
              <p className="body-lg reveal">
                The weekend rush is near. You and your friends want something adventurous — but
                you haven't had any paragliding training. What if you could experience the thrill
                without learning first?
              </p>
              <p className="body-md reveal" style={{ marginTop: '14px', marginBottom: '32px' }}>
                A tandem ride lets you savour paragliding with an experienced pilot at the controls.
                You enjoy a bird's-eye view of beautiful hills and long green fields — state-of-the-art
                equipment, breathtaking sites, and zero effort required from you.
              </p>

              <div className="reveal">
                <div className="section-tag" style={{ marginBottom: '12px' }}>Pricing</div>
                <div className="pricing-table">
                  <div className="pricing-head pricing-cols-3">
                    <span>Package</span><span>Weekday</span><span>Weekend / Holiday</span>
                  </div>
                  {[
                    { plan: 'Easy Flight', sub: '10–15 mins · Joy ride with expert pilot', wd: '₹3,000', we: '₹3,500' },
                    { plan: 'Learning Flight', sub: '20–25 mins · Feel the controls yourself', wd: '₹5,000', we: '₹5,500' },
                    { plan: 'Pro Flight', sub: '30–35 mins · Aerobatics & G-forces', wd: '₹7,000', we: '₹7,500' },
                  ].map(r => (
                    <div key={r.plan} className="pricing-row pricing-cols-3">
                      <div>
                        <div className="price-plan-name">{r.plan}</div>
                        <div className="price-plan-sub">{r.sub}</div>
                      </div>
                      <div className="price-amount">{r.wd}</div>
                      <div className="price-amount">{r.we}</div>
                    </div>
                  ))}
                </div>
                <p className="price-note">
                  * Prices exclude taxes, transport &amp; photo/video (₹500 extra). Call{' '}
                  <a href="tel:7678068855" style={{ color: 'var(--gold)', fontWeight: 600 }}>7678068855</a>{' '}
                  to book. Actual flight duration may vary based on wind conditions.
                </p>
              </div>

              <div className="tandem-buttons reveal">
                <Link to="/contact" className="btn btn-gold btn-lg">Book a Tandem Flight →</Link>
                <a
                  href="https://api.whatsapp.com/send?phone=919323708809&text=I'd like to book a tandem flight at Kamshet."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-lg"
                >
                  WhatsApp Us 💬
                </a>
              </div>

              {/* Gift voucher */}
              <div className="gift-box reveal">
                <h3>🎁 Gift a Tandem Flight</h3>
                <p className="body-md" style={{ marginTop: '10px', marginBottom: '14px' }}>
                  Tandem paragliding is the perfect gift — an experience someone will never forget.
                  Purchase a Nirvana Adventures Gift Voucher for someone special.
                </p>
                <div className="check-list">
                  {[
                    'Gift voucher is valid for 2 months from date of purchase',
                    'Extendable in case of bad weather — no stress',
                    'Call us or write to enquire about purchasing a voucher',
                  ].map(i => (
                    <div key={i} className="check-item">
                      <span className="check-icon">✓</span><span>{i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — safety */}
            <div>
              <div className="section-tag reveal">Safety &amp; Instructions</div>
              <h2 className="display-md reveal" style={{ marginBottom: '16px' }}>Before You Fly</h2>
              <p className="body-md reveal" style={{ marginBottom: '18px' }}>
                Our tandem pilots are highly experienced and follow strict safety protocols. Please
                read these guidelines before your flight:
              </p>
              <div className="check-list reveal">
                {SAFETY_TIPS.map(tip => (
                  <div key={tip} className="check-item">
                    <span className="check-icon" aria-hidden="true">✓</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--sky2)' }}>
        <div className="container">
          <div className="section-tag reveal">Tandem Reviews</div>
          <h2 className="display-lg reveal">What Flyers Say</h2>
          <TestimonialsGrid items={TESTIMONIALS.filter(t => t.type === 'tandem' || t.type === 'student').slice(0, 3)} />
        </div>
      </section>

      <WhySection />
      <Newsletter />
    </>
  )
}
