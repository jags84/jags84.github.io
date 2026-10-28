export interface Job {
  role: string;
  company: string;
  url?: string;
  period: string;
  location?: string;
  summary: string;
  highlights?: string[];
  stack?: string[];
}

export const experience: Job[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Workpath',
    url: 'https://www.workpath.com',
    period: 'Apr 2021 – Present',
    location: 'Munich, Germany · Remote',
    summary:
      'B2B SaaS for strategy execution (OKRs, KPIs, initiatives and business reviews) used by large enterprises, including DAX-listed companies. Go-to engineer for integrations and owner of epics end to end, across backend and frontend.',
    highlights: [
      'Built and maintained the integrations with Azure DevOps, Jira (Cloud and Data Center), Microsoft Teams, Planner, Excel and Power BI, which also power Workpath\'s AI assistant.',
      'Let key results and KPIs update automatically from Excel and Power BI.',
      'Owned 8 epics end to end in six months (spike → design → tickets → backend → frontend → release) and reviewed 295 pull requests.',
      'Led the framework upgrades from Rails 6 to Rails 8 and Ruby 4, and kept dependencies up to date and secure with Dependabot.',
      'Cut Jira API rate-limit errors by 37% and peak load by 73%, then used production data to find the real root cause.',
      'Implemented SCIM user provisioning (incl. Okta), SAML-driven user transitions and a dedicated production region for an enterprise customer.',
      'Brought AI-assisted development into daily team practice: CLAUDE.md conventions, reusable skills and MCP workflows (Grafana, Figma, Atlassian).',
    ],
    stack: ['Ruby on Rails', 'PostgreSQL', 'Sidekiq', 'Redis', 'GraphQL', 'React', 'TypeScript', 'Java', 'Grafana'],
  },
  {
    role: 'Senior Backend Developer',
    company: 'Selectra',
    url: 'https://selectra.es',
    period: 'Jan 2018 – Mar 2021',
    location: 'Madrid, Spain',
    summary:
      'Energy and telecom comparison company. I built and owned the internal applications the call center used to find the right offer for each customer and close contracts.',
    highlights: [
      'Built the telecom sales application from scratch, from the coverage check to the offer and the signed contract.',
      'Designed a coverage-lookup module that checked, in real time and for each partner provider, which fiber and coverage options a customer had before showing what could be offered.',
      'Integrated with each telecom provider\'s systems, each with its own format, no documentation and its own way of expecting an address.',
      'Built a modular page builder for the SEO team: reusable header, body and footer modules that could be combined by drag and drop to generate many variants of landing pages.',
      'Handled deployments on Google Cloud.',
    ],
    stack: ['Ruby on Rails', 'PostgreSQL', 'MongoDB', 'Sidekiq', 'GraphQL', 'Go', 'Google Cloud'],
  },
  {
    role: 'Lead Developer',
    company: 'DADA.NYC',
    url: 'https://dada.nyc',
    period: 'Feb 2014 – Dec 2020',
    location: 'New York, USA · Remote',
    summary:
      'Social platform where artists and people speak through drawings, and collect digital art with crypto.',
    highlights: [
      'One of the two backend engineers who built the platform.',
      'Wrote the first Ethereum smart contract, used for the first collection DADA sold.',
      'Built the Ethereum marketplace on top of a smart contract, integrated with the Rails platform.',
      'Took part in the Matter 7 accelerator in New York City with the DADA team (2017).',
    ],
    stack: ['Ruby on Rails', 'MarionetteJS', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Ethereum', 'Solidity', 'Web3'],
  },
  {
    role: 'Freelance Developer',
    company: 'PicketFencer',
    period: 'Jul 2017 – Jul 2020',
    location: 'New York, USA · Remote',
    summary: 'Home search service covering 600+ New York City suburbs, helping people find houses and apartments in their next hometown.',
    highlights: ['Improved and extended their existing web application, shipping new features and changes across backend and frontend.'],
    stack: ['Ruby on Rails', 'JavaScript', 'Bootstrap'],
  },
  {
    role: 'Web Application Developer',
    company: 'Ries, Inc.',
    period: 'Jul 2012 – Jan 2014',
    location: 'Miami, USA · Remote',
    summary: 'Software company behind two products: AlliHay, a deal-finding app, and Celuseguro, mobile phone insurance against theft.',
    highlights: [
      'AlliHay: built the Rails backend of a community app where people checked in good deals they found in nearby stores, so others could find the best prices around them.',
      'Celuseguro: built the Rails back office and the full customer app in CakePHP, from finding your phone model and uploading photos of its condition to payment, financing, policy issuance and a dashboard to manage your policies.',
    ],
    stack: ['Ruby on Rails', 'CakePHP', 'PostgreSQL', 'MySQL', 'PhoneGap'],
  },
];

export const earlierExperience = [
  { role: 'IT Support', company: 'Harvest Natural Resources', period: '2011 – 2014' },
  { role: 'Intern', company: 'FUNVISIS (Venezuelan Foundation for Seismological Research)', period: '2011' },
  { role: 'Computer Consultant', company: 'Casa Arturo Uslar Pietri Foundation', period: '2007 – 2010' },
  { role: 'Computer Consultant', company: 'Municipal Council of Chacao', period: '2006 – 2010' },
];
