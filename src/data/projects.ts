import type { ImageMetadata } from 'astro';
import allihay from '../assets/portfolio/allihay.jpg';
import celuseguro from '../assets/portfolio/celuseguro.jpg';
import dada from '../assets/portfolio/dada.jpg';
import dadaMarketplace from '../assets/portfolio/dada_marketplace.jpg';
import dancingDiablo from '../assets/portfolio/dancingdiablo.jpg';
import picketfencer from '../assets/portfolio/picketfencer.jpg';
import pushem from '../assets/portfolio/pushem.jpg';

export interface Project {
  name: string;
  summary: string;
  role: string;
  stack: string[];
  image: ImageMetadata;
  url?: string;
}

export const projects: Project[] = [
  {
    name: 'DADA.NYC',
    summary: 'Social platform where artists and people speak through drawings.',
    role: 'One of two backend engineers who built it',
    stack: ['Ruby on Rails', 'MarionetteJS', 'Handlebars', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    image: dada,
    url: 'https://dada.nyc',
  },
  {
    name: 'DADA.NYC Marketplace',
    summary: 'Ethereum marketplace for collecting DADA digital art, backed by a smart contract.',
    role: 'Smart contracts and marketplace development',
    stack: ['Ruby on Rails', 'Ethereum', 'Solidity', 'Web3', 'JavaScript', 'Handlebars'],
    image: dadaMarketplace,
  },
  {
    name: 'PicketFencer',
    summary: 'Home search across 600+ New York City suburbs: houses, apartments and the right hometown.',
    role: 'Improvements and new features, backend and frontend',
    stack: ['Ruby on Rails', 'JavaScript', 'jQuery', 'Bootstrap'],
    image: picketfencer,
  },
  {
    name: 'Pushem',
    summary: 'Push notification service built at DADA, launched as its own product and used by DADA in production.',
    role: 'Entire backend',
    stack: ['Ruby on Rails', 'Node.js', 'Socket.IO', 'PostgreSQL', 'Redis'],
    image: pushem,
  },
  {
    name: 'Dancing Diablo',
    summary: 'Website for a digital content studio.',
    role: 'Frontend development',
    stack: ['HTML5', 'CSS', 'AngularJS'],
    image: dancingDiablo,
  },
  {
    name: 'Celuseguro',
    summary: 'Mobile phone insurance against theft: device lookup, photo-based condition check, payment and financing, policy issuance and a customer dashboard.',
    role: 'Rails back office and the full CakePHP customer app',
    stack: ['Ruby on Rails', 'CakePHP', 'MySQL'],
    image: celuseguro,
  },
  {
    name: 'AlliHay',
    summary: 'Community app to find good prices nearby: people checked in the deals they found and in which store.',
    role: 'Backend and APIs (Rails 3 and 4)',
    stack: ['Ruby on Rails', 'Handlebars', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'PhoneGap'],
    image: allihay,
  },
];
