export type NavItem = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type Channel = LinkItem & {
  icon: 'vscode' | 'openvsx' | 'github';
};

export type Project = {
  name: string;
  summary: string;
  detail: string;
  language: string;
  stars?: number;
  /** Install and download figures, shown under the language. */
  reach?: string[];
  image?: { src: string; alt: string; fit?: 'cover' | 'contain' };
  links: LinkItem[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type WorkStep = {
  name: string;
  body: string;
};

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: 'mail' | 'github' | 'linkedin' | 'x' | 'instagram';
  /** Placeholder links show an "add link" tag until a real URL is filled in. */
  placeholder?: boolean;
};

const github = 'https://github.com/afri-bit';
const marketplace = 'https://marketplace.visualstudio.com/publishers/afri-bit';
const openVsx = 'https://open-vsx.org/namespace/afri-bit';

export const profile = {
  meta: {
    title: 'Afrizal · Software engineer, practicing vibe engineering',
    description:
      'Afrizal (afri-bit) builds developer tools for C/C++, automotive and DevOps work: VS Code extensions, a pipeline runner and the odd hardware project.',
    brand: 'afri-bit',
  },
  nav: [
    { label: 'Home', href: '#top' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],
  hero: {
    name: 'Afrizal',
    location: 'Germany',
    headline: 'I turn ideas into products. **Faster, with AI.**',
    lede:
      'Software engineer by training, ==vibe engineer by choice==. I shape the vision, **orchestrate AI agents** to build it, and **ship real tools** across different areas, from C/C++ development and automotive software to DevOps and smart home gadgets.',
    // Replace with your own photo: drop it in /public/images and point avatarSrc at it.
    avatarSrc: 'images/avatar.jpg',
    avatarAlt: 'Portrait of Afrizal',
    pronunciation: {
      word: 'afri·bit',
      ipa: '/ˈev.ri bɪt/',
      meaning: 'sounds like “every bit”. Every bit of an idea, shipped.',
    },
    from: 'Software engineering',
    to: 'Vibe engineering',
  },
  distribution: [
    { label: 'VS Code Marketplace', href: marketplace, icon: 'vscode' },
    { label: 'Open VSX', href: openVsx, icon: 'openvsx' },
    { label: 'GitHub', href: github, icon: 'github' },
  ] satisfies Channel[],
  githubHref: github,
  projects: [
    {
      name: 'VSConan',
      summary: 'Conan package manager, inside VS Code.',
      detail:
        'An explorer for your local Conan cache: recipes, packages, profiles and remotes in a sidebar, plus workspace commands for install, build and create. Handles Conan 1 and 2 side by side.',
      language: 'TypeScript',
      stars: 27,
      reach: ['9.5k+ Marketplace installs', 'Rated 5.0 on Marketplace', '2k+ Open VSX downloads'],
      image: { src: 'images/vsconan.png', alt: 'VSConan logo', fit: 'contain' },
      links: [
        { label: 'GitHub', href: `${github}/vsconan` },
        { label: 'Marketplace', href: 'https://marketplace.visualstudio.com/items?itemName=afri-bit.vsconan' },
        { label: 'Open VSX', href: 'https://open-vsx.org/extension/afri-bit/vsconan' },
        { label: 'Docs', href: 'https://afri-bit.github.io/vsconan/' },
      ],
    },
    {
      name: 'CANdb Studio',
      summary: 'CAN bus databases, readable in your editor.',
      detail:
        'A structured editor for .dbc files with a database explorer, syntax highlighting and, when hardware is attached, a live bus monitor and frame transmit, all against the same database.',
      language: 'TypeScript',
      stars: 8,
      reach: ['700+ Marketplace installs', '1.2k+ Open VSX downloads'],
      image: { src: 'images/candb.png', alt: 'CANdb Studio logo', fit: 'contain' },
      links: [
        { label: 'GitHub', href: `${github}/candb-studio` },
        { label: 'Marketplace', href: 'https://marketplace.visualstudio.com/items?itemName=afri-bit.candb-studio' },
        { label: 'Open VSX', href: 'https://open-vsx.org/extension/afri-bit/candb-studio' },
      ],
    },
    {
      name: 'Truss',
      summary: 'Define a pipeline once, run it anywhere.',
      detail:
        'Pipelines that live on your machine. One YAML file, run by hand or on a schedule, each step on the host or in a container, watched from the terminal or a desktop app.',
      language: 'Go',
      stars: 1,
      image: { src: 'images/truss.svg', alt: 'TRUSS logo' },
      links: [
        { label: 'GitHub', href: `${github}/truss` },
        { label: 'Docs', href: 'https://afri-bit.github.io/truss/' },
      ],
    },
    {
      name: 'Word Clock DE',
      summary: 'A German word clock that tells time in sentences.',
      detail:
        'A word clock in Python that spells out “ES IST VIERTEL NACH ZWEI”. Motion and brightness sensors, plus a small web app for colours and settings.',
      language: 'Python',
      stars: 1,
      image: { src: 'images/wordclock.png', alt: 'The German word clock spelling out the time' },
      links: [{ label: 'GitHub', href: `${github}/word-clock-de` }],
    },
  ] satisfies Project[],
  skills: [
    {
      title: 'Languages',
      items: ['TypeScript', 'Python', 'Go', 'C / C++ toolchains'],
    },
    {
      title: 'Developer tooling',
      items: ['VS Code extension API', 'Conan', 'CMake', 'Docker', 'CI/CD pipelines'],
    },
    {
      title: 'Domains',
      items: ['Automotive & CAN bus', 'Software-defined vehicles', 'ROS', 'Embedded & hardware tinkering'],
    },
    {
      title: 'Agentic engineering',
      items: ['Claude Code & coding agents', 'Spec-driven development', 'Multi-agent orchestration', 'Automated review & guardrails'],
    },
  ] satisfies SkillGroup[],
  about: {
    title: 'From software engineering to vibe engineering.',
    paragraphs: [
      'For years I wrote everything myself. I learned a lot, but I always had ==more ideas than evenings==. Between work and everyday life, most of them stayed in a notebook.',
      'Now I work with AI agents, and those ideas become **products in days instead of months**. It isn’t magic: I ==plan the work, break it into clear steps== and keep every change reviewable. That structure is what lets me move fast without losing quality.',
      'Vibe engineering lets me spend my time on what I enjoy most: ==deciding what to build and making it genuinely useful==.',
    ],
    steps: [
      { name: 'Envision', body: 'Start from a real need and describe what done looks like: the product, the user, the edges.' },
      { name: 'Orchestrate', body: 'Agents build in planned, structured steps. Tests and checks run along the way, not at the end.' },
      { name: 'Ship', body: 'Review, release and keep improving it. Ideas reach real users while they still feel fresh.' },
    ] satisfies WorkStep[],
  },
  contact: {
    title: 'Let’s connect.',
    body: 'Got an idea, a project, or just want to talk about **developer tooling**, **automotive software** or **agentic engineering**? Reach out on any of these.',
  },
  social: [
    { label: 'Email', handle: 'afribit.tech@gmail.com', href: 'mailto:afribit.tech@gmail.com', icon: 'mail' },
    { label: 'GitHub', handle: '@afri-bit', href: github, icon: 'github' },
    { label: 'LinkedIn', handle: 'Afrizal Herlambang', href: 'https://www.linkedin.com/in/afrizal-herlambang/', icon: 'linkedin' },
    { label: 'X', handle: '@afri_bit', href: 'https://x.com/afri_bit', icon: 'x' },
    { label: 'Instagram', handle: '@afribit.tech', href: 'https://www.instagram.com/afribit.tech/', icon: 'instagram' },
  ] satisfies SocialLink[],
};
