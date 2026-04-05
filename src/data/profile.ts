export type NavItem = {
  label: string;
  href: string;
};

export type OrbitIcon = 'folder' | 'box' | 'book' | 'at-sign';

export type OrbitNode = {
  id: string;
  label: string;
  href: string;
  icon: OrbitIcon;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectCard = {
  title: string;
  status: string;
  description: string;
  tags: string[];
  image?: string;
  links: ProjectLink[];
  featured?: boolean;
};

export type Stat = {
  label: string;
  value: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin';
};

export type ProfileHighlight = {
  label: string;
  value: string;
};

export type RepoSpotlight = {
  name: string;
  description: string;
  href: string;
};

export type Profile = {
  meta: {
    title: string;
    description: string;
    brand: string;
  };
  nav: NavItem[];
  hero: {
    headlinePlain: string;
    headlineGradient: string;
    subtitle: string[];
    avatarSrc: string;
    cta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
  orbitNodes: OrbitNode[];
  profileSection: {
    eyebrow: string;
    title: string;
    description: string;
    currentlyLearning: string[];
    skills: string[];
    highlights: ProfileHighlight[];
    repositories: RepoSpotlight[];
  };
  projects: {
    intro: {
      eyebrow: string;
      title: string;
      description: string;
    };
    featured: ProjectCard[];
    secondary: ProjectCard[];
  };
  stats: Stat[];
  ctaCard: {
    title: string;
    body: string;
    button: { label: string; href: string };
  };
  footer: {
    copyright: string;
    social: SocialLink[];
  };
};

export const profile: Profile = {
  meta: {
    title: 'Afrizal · Every Bit',
    description:
      'Senior software engineer building thoughtful interfaces and systems. Open source, experiments, and creative coding.',
    brand: 'afri-bit',
  },
  nav: [
    { label: 'Home', href: '#top' },
    { label: 'Profile', href: '#profile' },
    { label: 'Work', href: '#projects' },
    { label: 'Stats', href: '#stats' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    headlinePlain: "Hi, I'm",
    headlineGradient: 'Afrizal',
    subtitle: [
      'Senior Software Engineer by day, playful builder on GitHub by night.',
      'I ship products, tinker with SDV tooling, and chase ideas from the shower and daydreams.',
    ],
    avatarSrc: 'https://github.com/afri-bit.png',
    cta: { label: 'View projects', href: '#projects' },
    secondaryCta: { label: 'GitHub', href: 'https://github.com/afri-bit' },
  },
  orbitNodes: [
    { id: 'repos', label: 'Repos', href: 'https://github.com/afri-bit?tab=repositories', icon: 'folder' },
    { id: 'packages', label: 'Packages', href: 'https://github.com/afri-bit?tab=packages', icon: 'box' },
    { id: 'readme', label: 'README', href: 'https://github.com/afri-bit/afri-bit#readme', icon: 'book' },
    { id: 'social', label: '@afri-bit', href: 'https://github.com/afri-bit', icon: 'at-sign' },
  ],
  profileSection: {
    eyebrow: 'Inside the profile',
    title: 'What I am learning, shipping, and sharpening right now',
    description:
      'Use this section as the editable snapshot of your current momentum: the things you are studying, the tools you trust, and the repositories you want people to open first.',
    currentlyLearning: [
      'Sharper AI-assisted product workflows with practical guardrails.',
      'Software-defined vehicle tooling, telemetry streams, and signal processing patterns.',
      'Design systems that keep motion, accessibility, and performance aligned.',
    ],
    skills: [
      'TypeScript',
      'React',
      'Astro',
      'Python',
      'Node.js',
      'Electron',
      'Docker',
      'SQLite',
      'ROS',
      'UI systems',
    ],
    highlights: [
      { label: 'Current mode', value: 'Shipping product and platform work' },
      { label: 'Favorite builds', value: 'Developer tools, dashboards, and creative experiments' },
      { label: 'Open to', value: 'Collaboration, consulting, and unusual side projects' },
      { label: 'Based around', value: 'Thoughtful UX, resilient systems, and fast iteration' },
    ],
    repositories: [
      {
        name: 'afri-bit',
        description: 'Profile README, experiments, and the public trail of what I am exploring.',
        href: 'https://github.com/afri-bit',
      },
      {
        name: 'Pinned projects',
        description: 'A curated doorway to the tools, prototypes, and products worth browsing first.',
        href: 'https://github.com/afri-bit?tab=repositories',
      },
      {
        name: 'Packages & ideas',
        description: 'Small utilities, package experiments, and unfinished concepts that still teach something.',
        href: 'https://github.com/afri-bit?tab=packages',
      },
    ],
  },
  projects: {
    intro: {
      eyebrow: 'Selected work',
      title: 'Projects & experiments',
      description: 'A mix of product work, tooling, and curiosity-driven builds.',
    },
    featured: [
      {
        title: 'VibeNote',
        status: 'Active',
        description: 'Desktop note canvas for engineers — Electron, React, SQLite.',
        tags: ['TypeScript', 'Electron', 'React'],
        links: [{ label: 'GitHub', href: 'https://github.com/afri-bit' }],
        featured: true,
      },
      {
        title: 'AlpacAI',
        status: 'Research',
        description: 'Driver drowsiness signals on SDV data via kuksa-client and Python tooling.',
        tags: ['Python', 'Automotive', 'AI'],
        links: [{ label: 'GitHub', href: 'https://github.com/afri-bit' }],
        featured: true,
      },
    ],
    secondary: [
      {
        title: 'Travel flows',
        status: 'Experiment',
        description: 'Full-stack itinerary experiments with Dockerized services.',
        tags: ['Docker', 'Full-stack'],
        links: [{ label: 'Explore', href: 'https://github.com/afri-bit' }],
      },
      {
        title: 'ROS editors',
        status: 'Tools',
        description: 'React Flow ROS node editor and VS Code extension ideas.',
        tags: ['ROS', 'TypeScript'],
        links: [{ label: 'Tools', href: 'https://github.com/afri-bit' }],
      },
    ],
  },
  stats: [
    { label: 'Years shipping', value: '10+' },
    { label: 'Focus', value: 'Product & platform' },
    { label: 'Timezone', value: 'Flexible' },
  ],
  ctaCard: {
    title: 'Open to collaboration',
    body: 'If you want to pair on tooling, SDV, or a weird side project, say hello on GitHub or email.',
    button: { label: 'GitHub profile', href: 'https://github.com/afri-bit' },
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Afrizal. Built with Astro.`,
    social: [
      { label: 'GitHub',   href: 'https://github.com/afri-bit',                      icon: 'github'   as const },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/afrizal-muhammad-nur/', icon: 'linkedin' as const },
    ],
  },
};
