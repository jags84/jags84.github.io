export const profile = {
  name: 'Juan Gonzalez',
  fullName: 'Juan A. Gonzalez Santana',
  title: 'Senior Software Engineer',
  tagline: 'Ruby on Rails · Enterprise integrations · AI-native, end-to-end delivery',
  location: 'Spain · Remote',
  // Split so the address never appears whole in the HTML; Contact.astro assembles it in the browser.
  email: { user: 'me', domain: 'jags84.com' },
  // Hidden until the new CV is ready; set to the PDF path under public/ to show the download button.
  resume: undefined as string | undefined,
  languages: ['Spanish (native)', 'English (professional working proficiency)'],
  links: {
    linkedin: 'https://www.linkedin.com/in/jags84',
    github: 'https://github.com/jags84',
    youtube: 'https://www.youtube.com/channel/UCsx1shVqTiL85hZq3xq0JBA',
  },
  about: [
    'I build web products, and I have been doing it for more than 14 years. For the last five I have worked on a B2B strategy-execution SaaS used by large enterprises, where I became the go-to engineer for integrations: Jira, Azure DevOps and the Microsoft 365 stack, plus the OAuth, sync and reliability work that makes them hold up with real enterprise data.',
    'Today I own features end to end: the spike and the design doc, the tickets, the backend, the frontend and what happens in production afterwards. AI is part of how I work every day, which lets one engineer deliver what used to need a handover between several people, without giving up on design, security or code review.',
  ],
};

export const howIWork = [
  {
    step: 'Discover',
    text: 'Start with a spike: try the external API, compare options, measure what matters.',
  },
  {
    step: 'Design',
    text: 'Write the design doc and the API contract first, so frontend and other teams can build in parallel.',
  },
  {
    step: 'Plan',
    text: 'Break the epic into tickets, including the frontend ones, with clear scope and acceptance criteria.',
  },
  {
    step: 'Build',
    text: 'Backend with years of Rails experience, frontend in React with AI as a real part of the workflow.',
  },
  {
    step: 'Ship safely',
    text: 'Dark launches, dual-write migrations and backwards compatibility, so customers never notice the switch.',
  },
  {
    step: 'Own it',
    text: 'Watch it in production with Grafana and Sentry, measure the impact and fix what comes up.',
  },
];
