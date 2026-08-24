export type Project = {
  period: string;
  title: string;
  summary: string;
  with?: string;
};

export const projects: Project[] = [
  {
    period: 'Nov 2025 — Aug 2026',
    title: 'Chronic stress modelling in recurrent working-memory networks',
    summary:
      'Chronic stress as E/I perturbation in rate-based recurrent networks. Resilient networks stay robust under stress but generalise poorly to longer delays — a resilience–generalisation trade-off.',
    with: 'Junior-Prof. Dr. Janina Hesse',
  },
  {
    period: 'March 2025 — present',
    title: 'Machine-learning approaches to resilience in mental health',
    summary:
      'Hierarchical Bayesian modelling of multivariate longitudinal data to capture population-level seasonality and improve individual predictions.',
    with: 'Junior-Prof. Dr. Janina Hesse',
  },
  {
    period: 'Jan 2021 — present',
    title: 'hep-aid: sample-efficient parameter scans',
    summary:
      'A modular research-software framework for ML-based sampling in particle-physics phenomenology — Bayesian active search, MCMC and neural active sampling.',
  },
];

export const education = [
  { period: '2021 — 2025', what: 'Ph.D. in Theoretical Physics', where: 'University of Southampton, UK' },
  { period: '2018 — 2020', what: 'M.Sc. in Theoretical Physics', where: 'Pontifical Catholic University of Chile' },
  { period: '2013 — 2017', what: 'B.Sc. in Physics', where: 'Catholic University of the North, Chile' },
];
