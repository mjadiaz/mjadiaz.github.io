export type Publication = {
  year: number;
  authors: string[];
  title: string;
  venue: string;
  status?: string;
  links?: { label: string; href: string }[];
};

/** Author name that gets highlighted in the list. */
export const ME = 'Diaz, M. A.';

export const publications: Publication[] = [
  {
    year: 2026,
    authors: ['Diaz, M. A.', 'Beyer, M. A.', 'Hesse, J.'],
    title:
      'Modelling chronic stress as excitation–inhibition perturbation in recurrent working-memory networks',
    venue: 'PLOS Computational Biology',
    status: 'Under revision',
    links: [{ label: 'arXiv:2606.27529', href: 'https://arxiv.org/abs/2606.27529' }],
  },
  {
    year: 2024,
    authors: ['Diaz, M. A.', 'Dasmahapatra, S.', 'Moretti, S.'],
    title:
      'hep-aid: A Python library for sample efficient parameter scans in beyond the Standard Model phenomenology',
    venue: 'Preprint',
    links: [
      { label: 'arXiv:2412.17675', href: 'https://arxiv.org/abs/2412.17675' },
      // TODO(verify): guessed repo URL.
      { label: 'code', href: 'https://github.com/mjadiaz/hep-aid' },
    ],
  },
  {
    year: 2024,
    authors: ['Diaz, M. A.', 'Cerro, G.', 'Dasmahapatra, S.', 'Moretti, S.'],
    title:
      'Bayesian active search on parameter space: a 95 GeV spin-0 resonance in the (B−L)SSM',
    venue: 'SciPost Physics Core 8(4), 068',
    links: [
      {
        label: 'doi:10.21468/SciPostPhysCore.8.4.068',
        href: 'https://doi.org/10.21468/SciPostPhysCore.8.4.068',
      },
    ],
  },
  {
    year: 2023,
    authors: ['Diaz, M. A.', 'Cerro, G.', 'Chaplais, J.', 'Dasmahapatra, S.', 'Moretti, S.'],
    title:
      'JetLOV: Enhancing jet tree tagging through neural network learning of optimal LundNet variables',
    venue: 'NeurIPS 2023 Workshop — Machine Learning and the Physical Sciences',
    links: [{ label: 'arXiv:2311.14654', href: 'https://arxiv.org/abs/2311.14654' }],
  },
];
