export interface Course {
  slug: string
  icon: string
  duration: string
  name: string
  level: string
  shortDesc: string
  fullDesc: string
  highlights: string[]
  includes: string[]
  seoTitle: string
  seoDesc: string
}

export interface Testimonial {
  name: string
  location: string
  avatar: string
  text: string
  type: 'student' | 'pilot' | 'tandem' | 'corporate'
}

export interface Event {
  day: string
  month: string
  title: string
  description: string
}

export interface NavItem {
  label: string
  path: string
  children?: { label: string; path: string }[]
}

export interface FlyingSite {
  icon: string
  name: string
  altitude: string
  difficulty: string
  description: string
  bestFor: string[]
}

export interface PricingRow {
  plan: string
  description: string
  weekday: string
  weekend: string
}
