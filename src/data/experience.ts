export interface Job {
  role: string;
  company: string;
  url?: string;
  period: string;
  location?: string;
  summary: string;
  highlights?: string[];
  // Shorter list for the CV when the key projects already cover the rest.
  cvHighlights?: string[];
  // CV-only "AI-native engineering" block.
  cvAi?: string[];
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
      'Built and maintained the integrations with Azure DevOps, Jira (Cloud and Data Center), Excel and Power BI, built the backend API for the Microsoft Teams app and contributed to Planner; the Jira and Azure DevOps integrations also power Workpath\'s AI assistant.',
      'Let key results and KPIs update automatically from Excel and Power BI.',
      'Owned 8 epics end to end in six months (spike → design → tickets → backend → frontend → release) and reviewed 295 pull requests.',
      'Mentored junior engineers through daily code reviews and pairing.',
      'Ran the backend technical interviews (live coding and technical questions) and took part in frontend hiring.',
      'Led the framework upgrades from Rails 6 to Rails 8 and Ruby 4, and kept dependencies up to date and secure with Dependabot.',
      'Cut Jira API rate-limit errors by 37% and peak load by 73%, then used production data to find the real root cause.',
      'Implemented SCIM user provisioning (incl. Okta), SAML-driven user transitions and a dedicated production region for an enterprise customer.',
      'Brought AI-assisted development into daily team practice: CLAUDE.md conventions, reusable skills and MCP workflows (Grafana, Figma, Atlassian).',
    ],
    cvHighlights: [
      'Owned 8 epics end to end in six months (spike → design → tickets → backend → frontend → release) and reviewed 295 pull requests.',
      'Mentored junior engineers through daily code reviews and pairing.',
      'Ran the backend technical interviews (live coding and technical questions) and took part in frontend hiring.',
    ],
    cvAi: [
      'Delivered full epics without handovers: as a backend engineer, opened ~30 frontend PRs with Claude Code, including the Azure DevOps and Jira linking flows, with designs pulled in through the Figma MCP.',
      'Investigated production issues and measured the impact of changes using AI with the Grafana MCP server.',
      'Wrote the team\'s CLAUDE.md conventions and reusable skills, wired in MCP servers (Grafana, Figma, Atlassian) and turned lessons from production into AI coding guidelines.',
      'Built the APIs and search that Workpath\'s AI assistant uses to find and link work items.',
    ],
    stack: ['Ruby on Rails', 'PostgreSQL', 'Sidekiq', 'Redis', 'GraphQL', 'RSpec', 'React', 'TypeScript', 'Java', 'Kubernetes', 'GitHub Actions', 'Grafana'],
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
      'Set up CI/CD for the applications and managed their infrastructure on Google Cloud.',
    ],
    cvHighlights: [
      'Built the telecom sales application from scratch, from coverage check to signed contract.',
      'Designed a real-time coverage-lookup module across partner providers, each with its own undocumented format.',
      'Built a drag-and-drop page builder that let the SEO team generate many landing-page variants.',
      'Set up CI/CD and managed the infrastructure on Google Cloud.',
    ],
    stack: ['Ruby on Rails', 'PostgreSQL', 'MongoDB', 'Sidekiq', 'GraphQL', 'Go', 'Node.js', 'Google Cloud'],
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
      'Built the entire backend of Pushem, a push-notification service launched as its own product and used by DADA in production.',
      'Maintained the Ubuntu servers and set up CI/CD for the applications.',
      'Took part in the Matter 7 accelerator in New York City with the DADA team (2017).',
    ],
    cvHighlights: [
      'One of the two backend engineers who built the platform; maintained its servers and CI/CD.',
      'Wrote the first Ethereum smart contract (Solidity), used for DADA\'s first collection sale, and built the marketplace on top of it.',
      'Built the entire backend of Pushem, a push-notification service launched as its own product and used by DADA.',
    ],
    stack: ['Ruby on Rails', 'MarionetteJS', 'Node.js', 'Socket.IO', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Ethereum', 'Solidity', 'Web3'],
  },
  {
    role: 'Freelance Developer',
    company: 'PicketFencer',
    period: 'Jul 2017 – Jul 2020',
    location: 'New Jersey, USA · Remote',
    summary: 'Home search service covering 600+ suburbs around New York City, helping people find houses and apartments in their next hometown.',
    highlights: ['Improved and extended their existing web application, shipping new features and changes across backend and frontend.'],
    cvHighlights: [],
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
    cvHighlights: [
      'AlliHay: Rails backend for a community app where people shared the best deals in nearby stores.',
      'Celuseguro: Rails back office and the full CakePHP customer app, from device check to payment, financing and policy issuance.',
    ],
    stack: ['Ruby on Rails', 'CakePHP', 'PostgreSQL', 'MySQL', 'PhoneGap'],
  },
];

// `details` only shows in the CV; the website keeps these as one-liners.
export const earlierExperience = [
  {
    role: 'IT Analyst',
    company: 'Harvest Natural Resources',
    period: 'Jun 2011 – Jan 2014',
    details: 'IT support and management of servers and network.',
  },
  {
    role: 'Intern',
    company: 'FUNVISIS (Venezuelan Foundation for Seismological Research)',
    period: 'Aug – Oct 2011',
    details: 'Built a Ruby on Rails application for internal communication across the organization.',
  },
  {
    role: 'Computer Consultant',
    company: 'Casa Arturo Uslar Pietri Foundation',
    period: 'Jan 2007 – Jul 2010',
    details: "Built the foundation's website and a PHP application to manage its database, plus IT support.",
  },
  { role: 'Computer Consultant', company: 'Municipal Council of Chacao', period: '2006 – 2010' },
];
