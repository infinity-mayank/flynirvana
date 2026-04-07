import type { Testimonial, Event, FlyingSite } from '@/types'

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Deepa Daniels',
    location: 'Denmark',
    avatar: '🌍',
    text: 'I took the Elementary Paragliding Course with Nirvana Adventures. It was the best paragliding school. The place was beautiful, we were very well taken care of and the course was very well planned. The instructors were brilliant, and learning was fun. I have already recommended Nirvana to many people!',
    type: 'student',
  },
  {
    name: 'Victor B.',
    location: 'Paris, France',
    avatar: '🗼',
    text: 'If you want to paraglide in Kamshet, this is the best school. Everything is professionally organised, it\'s safe and the instructors are patient and helpful. The guest house has a great vibe. The food is nice and you get to mingle with some really interesting people.',
    type: 'pilot',
  },
  {
    name: 'Gladys Gonsalves',
    location: 'Mumbai, India',
    avatar: '🇮🇳',
    text: 'For the Don Bosco International School students, tandem paragliding with Nirvana Adventures at Kamshet was a dream come true. The kids had a gala time. They enjoyed every activity, and paragliding was unanimously the highlight of the day.',
    type: 'corporate',
  },
  {
    name: 'Michael Prichard',
    location: 'Hong Kong, China',
    avatar: '🇭🇰',
    text: 'I have made 11 visits to Nirvana since Dec \'01. Happily, the location, ambience and food always worked their usual magic, overseen by Sanjay and Astrid\'s unique blend of extended family hosting and attention to detail. The core Nirvana experience remains true to its Peace, Bliss and Happy Landings mantra!',
    type: 'pilot',
  },
  {
    name: 'Dag Ivar Hansen',
    location: 'Norway',
    avatar: '🇳🇴',
    text: 'I spent a month here and we flew every day. Great food, good variety. At Native Place you are well taken care of by the staff. There is a lot of positive energy. Beautiful lake 50 meters from the house. Great place for yoga and meditation.',
    type: 'pilot',
  },
  {
    name: 'Shreya Das',
    location: 'Mumbai, India',
    avatar: '⭐',
    text: 'My paragliding experience was mostly second-hand until I took the plunge and did my first tandem with Nirvana Adventures. I enjoyed every second of it and can\'t wait for the next one. It is definitely something to have on your bucket list.',
    type: 'tandem',
  },
]

export const EVENTS: Event[] = [
  {
    day: '24',
    month: 'October',
    title: 'Paragliding Season Opens',
    description: 'Announcing the opening of our paragliding season at Kamshet. Elementary Pilot Courses begin from October 24th — join us for an exciting new season of flying.',
  },
  {
    day: '9',
    month: 'November',
    title: 'Permaculture Design Workshop',
    description: 'Native Place is hosting a permaculture weekend workshop. Students and pilots are welcome to join in and learn about sustainable living and organic gardening.',
  },
  {
    day: '28',
    month: 'November',
    title: 'Swedish Group Meetup',
    description: 'Peder and group from Sweden visiting for their annual gathering. All pilots are welcome to join this beloved tradition of international flying camaraderie.',
  },
]

export const FLYING_SITES: FlyingSite[] = [
  {
    icon: '🏔️',
    name: 'Tower Hill',
    altitude: '1,200 m',
    difficulty: 'Beginner – Intermediate',
    description: 'One of the most popular and reliable flying sites near Kamshet. Suitable for students and visiting pilots alike, with smooth, consistent conditions and excellent thermals during the season.',
    bestFor: ['Training flights', 'Solo students', 'Tandem flights', 'Thermal soaring'],
  },
  {
    icon: '🌄',
    name: 'Shelar',
    altitude: '1,050 m',
    difficulty: 'Beginner – Advanced',
    description: 'A picturesque ridge site offering excellent soaring conditions and beautiful scenery. Gentle thermals make it ideal for intermediate pilots and extended soaring sessions.',
    bestFor: ['Ridge soaring', 'Intermediate pilots', 'Extended flights', 'Thermalling practice'],
  },
  {
    icon: '⛰️',
    name: 'Shinde Hill',
    altitude: '980 m',
    difficulty: 'Intermediate',
    description: 'A quieter, scenic site with great launch conditions. Often used for thermalling practice and offers stunning panoramic views of the Sahyadri hills and surrounding lakes.',
    bestFor: ['Thermalling', 'Advanced students', 'Quiet flying', 'Photography'],
  },
]

export const CORPORATE_CLIENTS: string[] = [
  'Indian Navy', 'Procter & Gamble', 'Ogilvy & Mather', 'Tata Indicom',
  'ICICI Bank', 'Reuters', 'Indian Air Force', 'Titan', 'Coca-Cola',
  'Johnson & Johnson', 'Airtel', 'Unilever', 'Kotak Mahindra Bank',
  'Marico', 'Radio Mirchi 98.3 FM', 'T-Systems', 'Pioneer', 'Geometric',
]

export const WHY_US = [
  { icon: '📅', number: '01', title: '25+ Years of Excellence', description: 'Conducting adventure programs since 1997 — India\'s original and oldest paragliding school.' },
  { icon: '🛡️', number: '02', title: 'ISO 9001:2008 Certified', description: 'India\'s first and only ISO-certified paragliding school, ensuring world-class training standards.' },
  { icon: '👨‍✈️', number: '03', title: 'APPI Certified Instructors', description: 'Highly experienced instructors with international APPI certifications and decades of flying expertise.' },
  { icon: '🤝', number: '04', title: 'Warm & Friendly Team', description: 'A welcoming community where every student and visiting pilot from around the world feels at home.' },
  { icon: '🌿', number: '05', title: 'Eco-Conscious Ethos', description: 'Deeply committed to preserving the natural beauty of Kamshet and the Sahyadris for future generations.' },
]
