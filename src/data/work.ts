// Selected work at Workpath. Keep customer names and internal details out: this repo is public.
export interface Highlight {
  title: string;
  year: string;
  summary: string;
  points: string[];
  // One short line for the CV, result first.
  cv: string;
  tags: string[];
}

export const workIntro =
  'Workpath helps large companies plan and track their strategy through goals, key results and KPIs. My focus is connecting it with the tools teams already use, and keeping the platform modern and reliable.';

export const selectedWork: Highlight[] = [
  {
    title: 'Azure DevOps integration',
    year: '2021 – 2026',
    summary: 'Built from scratch to connect Azure DevOps work items with company goals, and kept evolving it.',
    points: [
      'Work items linked to goals and key results, kept in sync automatically.',
      'Added sign-in with Microsoft accounts (OAuth) alongside personal access tokens, without breaking existing customers.',
      'Redesigned the Azure DevOps extension and published the new version on the Microsoft Marketplace.',
      'Teams can now link work items from both sides: from Workpath and from inside Azure DevOps.',
    ],
    cv: 'Built it from scratch, then added Microsoft OAuth alongside access tokens with zero customer disruption, redesigned the extension (Microsoft Marketplace) and enabled linking from both sides.',
    tags: ['Azure DevOps', 'OAuth2', 'Rails', 'React'],
  },
  {
    title: 'Jira integration (Cloud and Data Center)',
    year: '2022 – 2026',
    summary: 'Built, maintained and improved the Jira integration, keeping it up to date with every Jira release.',
    points: [
      'Link Jira issues to more goals and key results, from Workpath or from inside Jira.',
      'Kept it compatible across Jira Cloud and Data Center versions, including the Java plugin for self-hosted Jira.',
      'Extracted shared linking code across integrations, so every new one is cheaper to build.',
    ],
    cv: 'Built and maintained it across Cloud and Data Center, including the Java plugin; two-way linking to more goals and key results, on shared code that makes each new integration cheaper.',
    tags: ['Jira', 'OAuth2', 'Rails', 'Java'],
  },
  {
    title: 'Key results from Excel and Power BI',
    year: '2023 – 2025',
    summary: 'Key results and KPIs that update themselves from the data teams already have.',
    points: [
      'Connect a key result or KPI to a Power BI report or an Excel cell, and its value updates automatically.',
      'Secure Microsoft sign-in (OAuth) and background jobs that keep the values fresh.',
      'Also built the Microsoft Teams and Planner integrations.',
    ],
    cv: 'Key results and KPIs update automatically from Power BI reports and Excel cells through Microsoft Graph and OAuth. Also built the Teams and Planner integrations.',
    tags: ['Power BI', 'Excel', 'Microsoft Graph', 'Sidekiq'],
  },
  {
    title: 'Keeping the platform modern',
    year: '2021 – 2026',
    summary: 'Led the framework upgrades from Rails 6 to Rails 8 and Ruby 4.',
    points: [
      'Rails 6 → 7 → 7.1 → 7.2 → 8.0 and Ruby up to 4.0, step by step and without disrupting the team.',
      'The latest upgrade shipped with zero incidents and found a hidden production bug along the way.',
      'Kept dependencies up to date and secure with Dependabot.',
    ],
    cv: 'Led every upgrade from Rails 6 to Rails 8.0 and Ruby 4.0; the latest shipped with zero incidents and surfaced a hidden production bug. Dependencies kept current with Dependabot.',
    tags: ['Rails', 'Ruby', 'Security'],
  },
  {
    title: 'Platform and enterprise features',
    year: '2021 – 2026',
    summary: 'Core product work and the features large companies need before they can roll out a tool.',
    points: [
      'User provisioning from identity providers (SCIM, including Okta) and SAML-based user management.',
      'Role-based permissions, key results calculated from other goals, GraphQL APIs and the activity feed.',
      'A dedicated production region for an enterprise customer.',
    ],
    cv: 'SCIM provisioning (incl. Okta), SAML-based user management, role-based permissions, GraphQL APIs and a dedicated production region for an enterprise customer.',
    tags: ['SCIM', 'SAML', 'GraphQL', 'PostgreSQL'],
  },
  {
    title: 'Reliability and observability',
    year: '2023 – 2026',
    summary: 'Making integrations hold up in production, and measuring it instead of assuming it.',
    points: [
      'Retries with backoff and staggered scheduling: Jira 429 errors −37%, exhausted retries −45%, peak requests per minute −73%.',
      'Fixed privacy and security leaks: personal data reaching error tracking, tokens reaching logs, a plugin CVE and a CSRF issue.',
      'Built the structured logging pattern used across all integration code, and cut the integrations worker log volume.',
    ],
    cv: '−37% Jira rate-limit errors and −73% peak load with retries and staggered scheduling; fixed personal data and tokens leaking to logs and error tracking, a plugin CVE and a CSRF issue.',
    tags: ['Grafana', 'Sentry', 'Incident response'],
  },
];

export const aiNote =
  'The work on Jira and Azure DevOps also made both integrations available to Workpath\'s AI assistant, so it can search and link work items too.';
