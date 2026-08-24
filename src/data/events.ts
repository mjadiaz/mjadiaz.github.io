export type EventEntry = {
  /** ISO date used only for sorting and for the past/upcoming split. */
  date: string;
  /** How the date is shown. Falls back to a formatted `date` when omitted. */
  display?: string;
  title: string;
  kind: 'Poster' | 'Talk' | 'Course' | 'Workshop' | 'Conference';
  what?: string;
  where?: string;
  href?: string;
};

/**
 * Add future events here with a date in the future — the site sorts them into
 * "Upcoming" automatically, no other change needed. e.g.
 *   { date: '2026-11-04', title: 'Bernstein Conference 2026', kind: 'Poster',
 *     what: 'Eligibility traces under short-term plasticity', where: 'Berlin, Germany' },
 */
export const events: EventEntry[] = [
  {
    date: '2026-07-06',
    display: 'July 2026',
    title: 'Neuromatch Academy — NeuroAI',
    kind: 'Course',
    what:
      'Course project combining gradient-based and Hebbian learning rules in recurrent networks.',
    where: 'Online',
  },
  {
    date: '2026-05-20',
    display: 'May 20–22, 2026',
    title: '9th Biennial Meeting of the Rhine-Main Neuroscience Network (rmn²)',
    kind: 'Poster',
    what: 'Modelling chronic stress in recurrent working-memory networks.',
    where: 'Oberwesel, Germany',
  },
  {
    date: '2025-10-13',
    display: 'Oct 13–15, 2025',
    title: 'The Göttingen Cognition Forum: Curiosity & Interaction',
    kind: 'Poster',
    what: 'Information-theoretic approaches to capture resilience in neural data.',
    where: 'Göttingen, Germany',
  },
  {
    date: '2025-03-01',
    display: 'March 2025',
    title: 'Mathematical Modeling and Simulation',
    kind: 'Poster',
    what: '“Parameter scan algorithms for particle physics and stress resilience”.',
    where: 'Leibniz Institute for Baltic Sea Research Warnemünde, Germany',
  },
  {
    date: '2023-07-01',
    display: 'July 2023',
    title: 'European AI for Fundamental Physics Conference (EuCAIFCon)',
    kind: 'Poster',
    what:
      '“Efficient parameter space exploration in BSM theories with batched multi-objective constraint active search”.',
    where: 'Amsterdam, Netherlands',
  },
];

const byDateDesc = (a: EventEntry, b: EventEntry) => b.date.localeCompare(a.date);

export function splitEvents(now = new Date()) {
  const today = now.toISOString().slice(0, 10);
  return {
    upcoming: events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date)),
    past: events.filter((e) => e.date < today).sort(byDateDesc),
  };
}
