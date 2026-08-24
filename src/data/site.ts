export const site = {
  name: 'Mauricio A. Diaz',
  short: 'M. A. Diaz',
  role: 'Postdoctoral researcher · Computational Resilience, LIR Mainz',
  url: 'https://mjadiaz.github.io',
  email: 'mauricio.a-diaz@lir-mainz.de',
  description:
    'Physicist working at the intersection of computational neuroscience and artificial intelligence — neural-circuit models of stress, learning and resilience.',

  /** Landing-page bio. Kept as paragraphs so the layout can style the first one as a lead. */
  bio: [
    'I am a physicist working at the intersection of computational neuroscience and artificial intelligence. As a postdoctoral researcher at the Leibniz Institute for Resilience Research in Mainz, I develop neural-circuit models to investigate how stress shapes learning, adaptation and resilience.',
    'More broadly, I am interested in how plasticity, neuromodulation and internal states regulate learning and adaptive behaviour.',
  ],

  /** Shown as icon links on the landing page and About. */
  profiles: [
    { label: 'GitHub', href: 'https://github.com/mjadiaz', icon: 'github' },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=onjoOzgAAAAJ&hl=en',
      icon: 'scholar',
    },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mjadiaz/', icon: 'linkedin' },
  ],

  /** Contact and feed — kept in the sidebar footer rather than the hero. */
  extras: [
    { label: 'Email', href: 'mailto:mauricio.a-diaz@lir-mainz.de', icon: 'mail' },
    { label: 'RSS', href: '/rss.xml', icon: 'rss' },
  ],
} as const;
