// ─── HOLIDAYS PAGE ────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import { SEOMeta, PageHero, Marquee, WhySection, Newsletter, TestimonialsGrid } from '@/components/ui/index'
import { FLYING_SITES, TESTIMONIALS } from '@/data/index'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function HolidaysPage() {
  useScrollReveal()
  const activities = [
    '🪂 Tandem Flights', '🧗 Rock Climbing', '🌿 Nature Trails', '🐦 Bird Watching',
    '🎣 Traditional Fishing', '🧘 Yoga & Meditation', '🏕️ Camping', '🗺️ Village Visits',
    '🏛️ Cave Temple Visits', '📚 Permaculture Workshops', '🌙 Stargazing', '🔥 Weekend BBQ',
  ]
  return (
    <>
      <SEOMeta
        title="Paragliding Holidays in Kamshet, Maharashtra | Fly Nirvana"
        description="Kamshet is India's premier paragliding holiday destination — beautiful Sahyadri hills, lake views, ancient caves, and world-class flying. Just 60km from Pune."
        canonical="/paragliding-holidays"
        keywords="paragliding holidays Kamshet, paragliding vacation Maharashtra, Kamshet tourism, paragliding weekend near Pune Mumbai"
      />
      <PageHero
        title="Paragliding Holidays in Kamshet"
        subtitle="Kamshet is India's premier paragliding destination — known to the world flying community as a paradise of hills, lakes, and wondrous winds amidst the majestic Western Ghats."
        breadcrumbs={[{ label: 'Paragliding Holidays' }]}
      />
      <Marquee />

      {/* About Kamshet */}
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div className="reveal-left">
              <div className="section-tag">About Kamshet</div>
              <h2 className="display-lg">A Paragliding Paradise</h2>
              <p className="body-lg" style={{ marginTop: '20px', marginBottom: '16px' }}>
                Up until the mid-90s, Kamshet was just another small town — an unknown train station
                on the Indian railway network. Today, thanks to founders Sanjay and Astrid Rao, Kamshet
                is known to the world paragliding community as a flying holiday destination.
              </p>
              <p className="body-md" style={{ marginBottom: '16px' }}>
                Located in the Western Ghats off an ancient trade route linking the west coast to the
                hinterland, the hills are dotted with ancient cave temples, medieval hill fortresses and
                colonial hill stations. Kamshet is a dream come true for those who love flying and nature.
              </p>
              <p className="body-md">
                Superb scenery changes hues along with the seasons. No noise, no pollution — just hills,
                lakes and wondrous winds. The small villages are still built in traditional style, and the
                bullock cart is still a reliable means of transport.
              </p>
              <div className="badge badge-green" style={{ marginTop: '22px' }}>
                📍 60 km from Pune · 110 km from Mumbai
              </div>
            </div>

            {/* Flying seasons */}
            <div className="reveal-right">
              <div className="section-tag">Flying Season</div>
              <h3 className="display-md" style={{ marginBottom: '20px' }}>Best Time to Visit</h3>
              {[
                { period: 'October – February', desc: 'Best conditions. Cool, stable air — ideal for all levels including beginners and training courses.', status: '🟢 Peak Season', bg: 'rgba(45,90,61,0.15)', border: 'rgba(45,90,61,0.35)' },
                { period: 'March – May', desc: 'Stronger thermals and excellent XC flying. Great for intermediate to advanced pilots.', status: '🟡 Good Season', bg: 'rgba(232,168,48,0.08)', border: 'rgba(232,168,48,0.25)' },
                { period: 'June – September', desc: 'Monsoon. Flying is suspended during heavy rains. The landscape is lush and beautiful.', status: '🔴 Off Season', bg: 'rgba(180,60,60,0.08)', border: 'rgba(180,60,60,0.25)' },
              ].map(s => (
                <div key={s.period} style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: '14px', padding: '18px 20px', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <strong style={{ fontSize: '14.5px' }}>{s.period}</strong>
                    <span style={{ fontSize: '12.5px' }}>{s.status}</span>
                  </div>
                  <p className="body-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flying Sites */}
      <section style={{ background: 'var(--sky2)' }}>
        <div className="container">
          <div className="section-tag reveal">Flying Sites</div>
          <h2 className="display-lg reveal">Where You'll Fly</h2>
          <p className="body-lg reveal" style={{ maxWidth: '600px', marginTop: '12px' }}>
            Kamshet has three main flying sites, each with its own character and conditions.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px', marginTop: '44px' }}>
            {FLYING_SITES.map((site, i) => (
              <article key={site.name} className={`card reveal delay-${i + 1}`} style={{ overflow: 'hidden' }}>
                <div style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px', background: 'linear-gradient(135deg, var(--sky3), var(--sky2))' }}>
                  {site.icon}
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>{site.name}</h3>
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span className="badge badge-gold" style={{ padding: '3px 10px', fontSize: '10px' }}>{site.altitude}</span>
                    <span className="badge badge-gold" style={{ padding: '3px 10px', fontSize: '10px' }}>{site.difficulty}</span>
                  </div>
                  <p className="body-sm">{site.description}</p>
                  <div style={{ marginTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {site.bestFor.map(b => <span key={b} style={{ fontSize: '12px', color: 'var(--muted)', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 8px' }}>{b}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Nightlife */}
      <section>
        <div className="container">
          <div className="section-tag reveal">Beyond Flying</div>
          <h2 className="display-lg reveal">Activities for Everyone</h2>
          <p className="body-lg reveal" style={{ maxWidth: '600px', marginTop: '12px' }}>
            Kamshet is perfect for non-flyers too. From ancient cave temples to stargazing,
            there's something for the whole family.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px', marginTop: '36px' }}>
            {activities.map((a, i) => (
              <div key={a} className={`card reveal delay-${Math.min(i + 1, 5)}`} style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 500, cursor: 'default' }}>
                {a}
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginTop: '40px' }}>
            {[
              { tag: 'Karla, Bhaja & Bhedsa Caves', title: 'Ancient Buddhist Cave Temples', desc: 'The hills around Kamshet are dotted with ancient Buddhist cave temples featuring exquisite carvings and magnificent statues of the Buddha — a must-visit for history enthusiasts.' },
              { tag: 'Native Place Guesthouse', title: 'Weekend BBQ & Pilot Gatherings', desc: 'The weekend BBQ and pilot get-together is the big social event of the week. Tandoori chicken, jacket potatoes and nans are universal favourites. Chill out on the terrace under a starry tropical sky.' },
            ].map(item => (
              <div key={item.title} className="card reveal" style={{ padding: '28px' }}>
                <div className="section-tag" style={{ marginBottom: '10px' }}>{item.tag}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>{item.title}</h3>
                <p className="body-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--sky2)' }}>
        <div className="container">
          <div className="section-tag reveal">Pilot Reviews</div>
          <h2 className="display-lg reveal">What Visiting Pilots Say</h2>
          <TestimonialsGrid items={TESTIMONIALS.filter(t => t.type === 'pilot').slice(0, 3)} />
        </div>
      </section>
      <Newsletter />
    </>
  )
}

// ─── CORPORATE PAGE ────────────────────────────────────────────────────────────
export function CorporatePage() {
  useScrollReveal()
  const zones = [
    {
      icon: '🏢', name: 'Corporate Zone',
      desc: 'De-stress your team from a hectic environment with adventure, team building programs and shared thrills in the great outdoors.',
      items: ['Team building programs', 'Adventure-based leadership', 'Incentive paragliding packages', 'Outbound training sessions'],
    },
    {
      icon: '🎒', name: 'Youth Zone',
      desc: 'Perfect for schools and colleges. Introduce young adventurers to rock climbing, paragliding and nature awareness programs.',
      items: ['Introduction to paragliding', 'Rock climbing sessions', 'Low ropes course', 'Nature classroom activities'],
    },
    {
      icon: '🌟', name: 'Multi-Activity Programs',
      desc: 'A wide range of specialised activities for corporate and school groups — the ultimate adventure weekend package.',
      items: ['Tandem joyrides', 'Mountaineering activities', 'Team games & challenges', 'Campsite facilities'],
    },
  ]
  const clients = ['Indian Navy', 'Procter & Gamble', 'Ogilvy & Mather', 'Tata Indicom', 'ICICI Bank', 'Reuters', 'Indian Air Force', 'Titan', 'Coca-Cola', 'Johnson & Johnson', 'Airtel', 'Unilever', 'Kotak Mahindra Bank', 'Marico', 'Radio Mirchi 98.3 FM', 'T-Systems', 'Pioneer', 'Geometric']
  return (
    <>
      <SEOMeta
        title="Corporate Adventures & Team Building | Kamshet | Fly Nirvana"
        description="Choose Nirvana Adventures for corporate team building, school outings and group adventures at Kamshet, Maharashtra. Paragliding, rock climbing, nature trails and more."
        canonical="/corporate-adventures"
        keywords="corporate team building Kamshet, corporate paragliding India, adventure offsite Maharashtra, school adventure trip near Pune"
      />
      <PageHero
        title="Corporate Adventures"
        subtitle="Choose Nirvana Adventures for group activities, offsite events, shared thrills, team building and relaxation in a breath-taking eco-friendly locale near Pune and Mumbai."
        breadcrumbs={[{ label: 'Corporate Adventures' }]}
      />
      <Marquee />
      <section>
        <div className="container">
          <div className="section-tag reveal">What We Offer</div>
          <h2 className="display-lg reveal">Adventure for Every Group</h2>
          <p className="body-lg reveal" style={{ maxWidth: '620px', marginTop: '12px' }}>
            Whether you're a corporate team, a school group or a family seeking a nature
            adventure — our multi-activity programs ensure a joy-filled experience for all.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px', marginTop: '48px' }}>
            {zones.map((z, i) => (
              <article key={z.name} className={`card reveal delay-${i + 1}`} style={{ padding: '32px' }}>
                <div style={{ fontSize: '44px', marginBottom: '18px' }}>{z.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>{z.name}</h3>
                <p className="body-md" style={{ marginBottom: '18px' }}>{z.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {z.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'rgba(255,255,255,0.72)' }}>
                      <span style={{ color: 'var(--gold)' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--sky2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div className="reveal-left">
              <div className="section-tag">A Fully Integrated Setup</div>
              <h2 className="display-lg">Your Adventure Base</h2>
              <p className="body-lg" style={{ marginTop: '20px', marginBottom: '16px' }}>
                Nirvana Adventures offers groups of 10 and more a chance to experience a weekend
                getaway filled with thrills and tranquility in the great outdoors. Our fully
                integrated adventure sports setup is ideally located on the edge of a lake.
              </p>
              <p className="body-md">
                Stay at Native Place — our eco-friendly guesthouse 3 hours from Mumbai or Pune
                via the Expressway. Enjoy home-cooked meals made with locally grown ingredients
                and a perfect blend of thrills and tranquility.
              </p>
              <Link to="/contact" className="btn btn-gold" style={{ marginTop: '28px' }}>
                Get a Corporate Quote →
              </Link>
            </div>
            <div className="reveal-right">
              <div className="section-tag">What's Included</div>
              <div className="check-list" style={{ marginTop: '12px' }}>
                {['Adventure sports (paragliding, rock climbing, low ropes)', 'Tandem joyrides for all participants', 'Campsite & guesthouse accommodation options', 'Home-cooked meals with locally grown ingredients', 'Nature trails and village visits', 'Experiential team building games', 'Outbound training and leadership programs', 'Flexible group sizes — 10 to 200+ participants'].map(s => (
                  <div key={s} className="check-item"><span className="check-icon">✓</span><span>{s}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-tag reveal">Trusted By</div>
          <h2 className="display-lg reveal">Our Corporate Clients</h2>
          <p className="body-lg reveal" style={{ maxWidth: '580px', marginTop: '12px' }}>
            Over 25 years, we've hosted teams from India's most respected organisations.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '36px' }}>
            {clients.map((c, i) => (
              <span key={c} className={`card reveal delay-${Math.min(i + 1, 5)}`} style={{ padding: '10px 18px', fontSize: '13px', fontWeight: 500, color: 'var(--muted)', cursor: 'default' }}>
                {c}
              </span>
            ))}
          </div>
          <blockquote style={{ background: 'var(--card)', border: '1px solid rgba(232,168,48,0.2)', borderLeft: '4px solid var(--gold)', borderRadius: 'var(--radius)', padding: '28px', marginTop: '40px' }}>
            <p style={{ fontStyle: 'italic', fontSize: '15px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, fontWeight: 300 }}>
              "I had been here with a 25-member Comviva team in 2009, and in 2011 with a 70-member Mauj team.
              Overall the experience was pleasant and people really enjoyed the adventure sports. The bonding
              between team members increased. It was a nice combination of physical and mental challenge."
            </p>
            <cite style={{ display: 'block', marginTop: '14px', color: 'var(--gold)', fontWeight: 600, fontSize: '14px', fontStyle: 'normal' }}>
              — Hari Nair, Mauj Telecom
            </cite>
          </blockquote>
        </div>
      </section>
      <WhySection />
      <Newsletter />
    </>
  )
}

// ─── ACCOMMODATION PAGE ────────────────────────────────────────────────────────
export function AccommodationPage() {
  useScrollReveal()
  const rooms = [
    { icon: '🛏️', name: 'Private Rooms', desc: 'Comfortable private rooms overlooking the lake and terraced tropical garden. Perfect for couples, small families and solo travellers.' },
    { icon: '🏕️', name: 'Dormitory Rooms', desc: 'Budget-friendly shared dorms popular with student groups and young pilots. Great for meeting fellow flyers from around the world.' },
    { icon: '⛺', name: 'Tented Camping', desc: 'Spend nights under a star-studded sky in comfortable tents on our lakeside property. A truly unique outdoor experience.' },
  ]
  const amenities = [
    '🌿 Eco-friendly architecture', '🌊 Lake Vadivali views', '🌅 Sahyadri mountain vistas',
    '🍳 Home-cooked local meals', '🌻 Organic garden produce', '☕ Communal hangout spaces',
    '🌳 Shaded hammocks & nooks', '🔥 Weekend BBQ gatherings', '🎯 Paragliding facilities',
    '🧘 Yoga & meditation space', '📚 Nature & bird discovery walks', '🛻 Station pickups available',
  ]
  return (
    <>
      <SEOMeta
        title="Paragliding Accommodation Kamshet | Native Place Guesthouse | Fly Nirvana"
        description="Stay at Native Place — Fly Nirvana's eco-friendly guesthouse overlooking Lake Vadivali and the Sahyadri mountains. Just 60km from Pune, perfect for paragliding holidays."
        canonical="/accommodation"
        keywords="accommodation Kamshet, guesthouse Kamshet paragliding, Native Place Nirvana Adventures, stay near Pune adventure"
      />
      <PageHero
        title="Native Place Guesthouse"
        subtitle="Your home amidst nature — a charming eco-friendly guesthouse overlooking Lake Vadivali and the Sahyadri range, just 60 km from Pune and 110 km from Mumbai."
        breadcrumbs={[{ label: 'Accommodation' }]}
      />
      <Marquee />
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div className="reveal-left">
              <div className="section-tag">About Native Place</div>
              <h2 className="display-lg">Stay in the Midst of Nature</h2>
              <p className="body-lg" style={{ marginTop: '20px', marginBottom: '16px' }}>
                Native Place is a large house that hugs a hillside sloping towards the picturesque
                Vadivali Lake. Designed as an eco-friendly guesthouse to complement an eco-friendly
                sport, it's a bright and airy piece of architecture with charming features around a
                central open-to-sky courtyard.
              </p>
              <p className="body-md" style={{ marginBottom: '16px' }}>
                Within 10 km of two of the world's favourite flying sites — Tower Hill and Shelar —
                Native Place houses our paragliding school facilities including a debriefing zone,
                audio-visual training aids, a simulator, and accommodation for students and visiting pilots.
              </p>
              <p className="body-md">
                It is famed for great atmosphere, delightful hangout spaces, delicious meals and
                stunning views of the lake past the lush terraced tropical garden.
              </p>
              <Link to="/contact" className="btn btn-gold" style={{ marginTop: '28px' }}>
                Book Your Stay →
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }} className="reveal-right">
              {[
                { icon: '🌅', title: 'Gorgeous Lake Views', desc: 'Wake up to misty Sahyadri mornings and golden sunsets over Lake Vadivali every day.' },
                { icon: '🍛', title: 'Delicious Local Cuisine', desc: 'Home-cooked Maharashtrian meals made with fresh, locally grown organic produce from our garden.' },
                { icon: '🌙', title: 'Starry Nights', desc: 'Chill out on the terrace under a tropical sky — you might catch a shooting star or two.' },
                { icon: '🤝', title: 'Community & Connection', desc: 'Meet pilots and adventurers from around the world in a warm, welcoming atmosphere.' },
              ].map(item => (
                <div key={item.title} className="card" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '28px', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '4px', fontSize: '15px' }}>{item.title}</div>
                    <p className="body-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--sky2)' }}>
        <div className="container">
          <div className="section-tag reveal">Room Types</div>
          <h2 className="display-lg reveal">Accommodation Options</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px', marginTop: '44px' }}>
            {rooms.map((r, i) => (
              <div key={r.name} className={`card reveal delay-${i + 1}`} style={{ overflow: 'hidden' }}>
                <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '56px', background: 'linear-gradient(135deg, var(--sky3), var(--sky))' }}>{r.icon}</div>
                <div style={{ padding: '22px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{r.name}</h3>
                  <p className="body-sm">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-tag reveal">Facilities & Amenities</div>
          <h2 className="display-lg reveal">Everything You Need</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px', marginTop: '36px' }}>
            {amenities.map((a, i) => (
              <div key={a} className={`card reveal delay-${Math.min(i + 1, 5)}`} style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 500 }}>
                <span style={{ fontSize: '22px', flexShrink: 0 }}>{a.split(' ')[0]}</span>
                <span>{a.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--sky2)' }}>
        <div className="container">
          <div className="section-tag reveal">Guest Stories</div>
          <h2 className="display-lg reveal">Our Guests Love It Here</h2>
          <TestimonialsGrid items={TESTIMONIALS.filter(t => t.type === 'pilot').slice(0, 3)} />
        </div>
      </section>
      <Newsletter />
    </>
  )
}

// ─── ABOUT PAGE ────────────────────────────────────────────────────────────────
export function AboutPage() {
  useScrollReveal()
  const timeline = [
    { year: '1994', text: 'Founders Sanjay and Astrid Rao acquire land in Kamshet, envisioning a peaceful nature retreat away from Mumbai.' },
    { year: '1996', text: 'Sanjay discovers the sport of paragliding and sees the training potential in the hills of Kamshet.' },
    { year: '1997', text: 'Nirvana Adventures is founded — India\'s first dedicated paragliding school opens. Kamshet is changed forever.' },
    { year: '2000s', text: 'Kamshet becomes known to the world paragliding community. Pilots from Europe, Scandinavia and Japan make annual pilgrimages.' },
    { year: '2010', text: 'Nirvana Adventures becomes India\'s first and only ISO 9001:2008 certified paragliding school.' },
    { year: '2019', text: '22nd paragliding season opens. Thousands of students trained, hundreds certified, and a community built around flight.' },
    { year: 'Today', text: '25+ years of operation, 10,000+ students trained, and an unwavering commitment to Peace, Bliss and Happy Landings.' },
  ]
  const goals = [
    'To offer safe, standardized training to people from all over the world',
    'To build a thriving paragliding community across India',
    'To open the paragliding sites at Kamshet to the world paragliding community',
    'To ensure that our activities enrich the lives of the local community',
    'To encourage eco-friendly tourism and preserve the beauty of Kamshet for future generations',
  ]
  return (
    <>
      <SEOMeta
        title="About Fly Nirvana | Nirvana Adventures | Kamshet Since 1997"
        description="Learn about Nirvana Adventures — India's first ISO 9001:2008 certified paragliding school founded in 1997 by Sanjay and Astrid Rao at Kamshet, Maharashtra."
        canonical="/about"
        keywords="about Nirvana Adventures, Fly Nirvana history, Sanjay Astrid Rao paragliding, ISO certified paragliding school India"
      />
      <PageHero
        title="About Fly Nirvana"
        subtitle="Peace · Bliss · Happy Landings — our motto since 1997, when we set out to make the dream of free flight a reality for aspiring pilots across India and the world."
        breadcrumbs={[{ label: 'About Us' }]}
      />
      <Marquee />
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>
            <div className="reveal-left">
              <div className="section-tag">Our Story</div>
              <h2 className="display-lg">How It All Began</h2>
              <p className="body-lg" style={{ marginTop: '20px', marginBottom: '16px' }}>
                In 1997, Kamshet was reborn as a paragliding destination. Nirvana Adventures came
                into being to fulfil your dreams of free flight by offering a safe, standardized
                and encouraging atmosphere to anyone interested in joining the magical world of paragliding.
              </p>
              <p className="body-md" style={{ marginBottom: '16px' }}>
                Founders Sanjay and Astrid Rao owned land in Kamshet since 1994. Astrid had a dream
                — that her children would run barefoot, climb trees and hills, and swim in the lakes.
                Sanjay discovered free flight, and the dream evolved into something far bigger than
                a private retreat.
              </p>
              <p className="body-md" style={{ marginBottom: '28px' }}>
                Today Kamshet is known to the world paragliding community as a flying holiday
                destination, because of the massive task Sanjay and Astrid undertook in developing
                infrastructure and popularizing the area.
              </p>
              <div className="badge badge-green">✔ India's First ISO 9001:2008 Certified Paragliding School</div>

              <div style={{ marginTop: '44px' }}>
                <div className="section-tag">Our Goals</div>
                <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {goals.map((g, i) => (
                    <div key={g} className="card" style={{ padding: '16px 20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <span style={{ width: '28px', height: '28px', background: 'rgba(232,168,48,0.12)', border: '1px solid rgba(232,168,48,0.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: 'var(--gold)', flexShrink: 0 }}>{i + 1}</span>
                      <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6 }}>{g}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="reveal-right">
              <div className="section-tag">Our Journey</div>
              <h2 className="display-md" style={{ marginBottom: '32px' }}>Timeline</h2>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '15px', top: '8px', bottom: '8px', width: '1.5px', background: 'var(--border)' }} aria-hidden="true" />
                {timeline.map(t => (
                  <div key={t.year} style={{ display: 'flex', gap: '24px', paddingBottom: '24px', position: 'relative' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--sky2)', border: '2px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0, zIndex: 1 }}>📅</div>
                    <div style={{ paddingTop: '4px' }}>
                      <div style={{ fontSize: '11.5px', fontWeight: 700, letterSpacing: '2px', color: 'var(--gold)', marginBottom: '4px' }}>{t.year}</div>
                      <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, fontWeight: 300 }}>{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhySection />
      <section>
        <div className="container">
          <div className="section-tag reveal">What the Community Says</div>
          <h2 className="display-lg reveal">Testimonials</h2>
          <TestimonialsGrid items={TESTIMONIALS} />
        </div>
      </section>
      <Newsletter />
    </>
  )
}

// ─── CONTACT PAGE ──────────────────────────────────────────────────────────────
import { useState } from 'react'
import { COURSES } from '@/data/courses'

export function ContactPage() {
  useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  const update = (k: string, v: string) => {
    setForm(f => ({ ...f, [k]: v }))
    setErrors(er => ({ ...er, [k]: '' }))
  }

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Fly Nirvana',
    url: 'https://www.flynirvana.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Nirvana Adventures',
      telephone: '+919323708809',
      email: 'flynirvana@gmail.com',
    },
  }

  return (
    <>
      <SEOMeta
        title="Contact Fly Nirvana | Book Paragliding | Kamshet, Maharashtra"
        description="Contact Nirvana Adventures to book paragliding courses, tandem flights or accommodation at Kamshet, Maharashtra. Call +91 9323708809 or fill in our enquiry form."
        canonical="/contact"
        keywords="contact Nirvana Adventures, book paragliding Kamshet, paragliding enquiry Pune, Fly Nirvana contact"
        schema={contactSchema}
      />
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to book a course, enquire about tandem flights, or simply ask us anything about paragliding in Kamshet."
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '60px', alignItems: 'start' }}>
            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="reveal-left">
              {[
                { icon: '📞', label: 'Phone', value: '+91 9323708809\n+91 7678068855 (Tandem bookings)', href: 'tel:+919323708809' },
                { icon: '✉️', label: 'Email', value: 'flynirvana@gmail.com', href: 'mailto:flynirvana@gmail.com' },
                { icon: '📍', label: 'Location', value: 'Kamshet, Maharashtra\n(~60 km from Pune · ~110 km from Mumbai)' },
                { icon: '🕐', label: 'Flying Season', value: 'October to May (Best: Oct – Feb)' },
                { icon: '🚂', label: 'Getting There', value: 'Nearest station: Kamshet on the Mumbai–Pune railway line. Also accessible via Expressway.' },
              ].map(info => (
                <div key={info.label} className="card" style={{ padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', background: 'rgba(232,168,48,0.1)', border: '1px solid rgba(232,168,48,0.22)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{info.icon}</div>
                  <div>
                    <div style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '5px' }}>{info.label}</div>
                    {info.href
                      ? <a href={info.href} style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, whiteSpace: 'pre-line', textDecoration: 'none' }}>{info.value}</a>
                      : <div style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{info.value}</div>
                    }
                  </div>
                </div>
              ))}
              <a
                href="https://api.whatsapp.com/send?phone=919323708809&text=Hi! I'd like to enquire about paragliding."
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: '#25D366', borderRadius: 'var(--radius)', padding: '20px 24px', display: 'flex', gap: '14px', alignItems: 'center', textDecoration: 'none', transition: 'opacity 0.2s' }}
              >
                <span style={{ fontSize: '32px' }}>💬</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: '#fff' }}>Chat on WhatsApp</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>Quick response guaranteed</div>
                </div>
              </a>
            </div>

            {/* Form */}
            <div className="card reveal-right" style={{ padding: '40px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎉</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, marginBottom: '12px' }}>Thank You!</h3>
                  <p className="body-md">We've received your message and will get back to you shortly. Happy flying!</p>
                  <button className="btn btn-gold" style={{ marginTop: '24px' }} onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', interest: '', message: '' }) }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, marginBottom: '28px' }}>Send Us a Message</h2>
                  <div className="form-row">
                    <div className="f-group">
                      <label className="f-label" htmlFor="name">Your Name *</label>
                      <input id="name" className="f-input" placeholder="Full name" value={form.name} onChange={e => update('name', e.target.value)} aria-required="true" aria-invalid={!!errors.name} />
                      {errors.name && <span style={{ fontSize: '12px', color: '#f87171' }}>{errors.name}</span>}
                    </div>
                    <div className="f-group">
                      <label className="f-label" htmlFor="email">Email Address *</label>
                      <input id="email" type="email" className="f-input" placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)} aria-required="true" aria-invalid={!!errors.email} />
                      {errors.email && <span style={{ fontSize: '12px', color: '#f87171' }}>{errors.email}</span>}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="f-group">
                      <label className="f-label" htmlFor="phone">Phone Number</label>
                      <input id="phone" type="tel" className="f-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => update('phone', e.target.value)} />
                    </div>
                    <div className="f-group">
                      <label className="f-label" htmlFor="interest">I'm Interested In</label>
                      <select id="interest" className="f-input" value={form.interest} onChange={e => update('interest', e.target.value)}>
                        <option value="">Select an option</option>
                        <option>Tandem Paragliding</option>
                        {COURSES.map(c => <option key={c.slug}>{c.name}</option>)}
                        <option>Corporate / Group Adventure</option>
                        <option>Accommodation</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                  </div>
                  <div className="f-group">
                    <label className="f-label" htmlFor="message">Message</label>
                    <textarea id="message" className="f-input" placeholder="Tell us your preferred dates, group size, or any questions you have..." value={form.message} onChange={e => update('message', e.target.value)} />
                  </div>
                  <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: '4px' }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  )
}

// ─── 404 NOT FOUND PAGE ────────────────────────────────────────────────────────
export function NotFoundPage() {
  return (
    <>
      <SEOMeta title="Page Not Found | Fly Nirvana" description="The page you're looking for doesn't exist. Return to Fly Nirvana's homepage." canonical="/404" />
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px', background: 'linear-gradient(180deg, var(--sky2), var(--sky))' }}>
        <div>
          <div style={{ fontSize: '80px', marginBottom: '24px' }}>🪂</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, marginBottom: '16px' }}>Lost in the Clouds?</h1>
          <p className="body-lg" style={{ maxWidth: '480px', margin: '0 auto 36px' }}>
            The page you're looking for seems to have taken a wrong thermal. Let's get you back on course.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-gold btn-lg">Back to Homepage</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
