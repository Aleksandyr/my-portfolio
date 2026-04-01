/**
 * Synced from LinkedIn & GitHub. Experience from:
 * https://www.linkedin.com/in/aleksandar-kamenov-220881104/details/experience/
 */

export const profile = {
  name: "Aleksandar Kamenov",
  title: "Front-end developer · Freelance",
  tagline:
    "Calm interfaces and solid front-end delivery — from product teams to freelance engagements, with room to keep learning and building with purpose.",
  location: "Sofia, Bulgaria",
  avatarUrl: "https://avatars.githubusercontent.com/u/7037740?v=4",
  links: {
    github: "https://github.com/Aleksandyr",
    linkedin: "https://www.linkedin.com/in/aleksandar-kamenov-220881104/",
    email: "mailto:aleksandyr.kamenov@gmail.com",
  },
};

export type ServiceIconId =
  | "frontend"
  | "redesign"
  | "components"
  | "landing";

export const services: {
  title: string;
  description: string;
  icon: ServiceIconId;
}[] = [
  {
    title: "Front-end development",
    description:
      "Production-ready React and modern JavaScript/TypeScript. Performance, accessibility, and maintainable structure.",
    icon: "frontend",
  },
  {
    title: "Redesign & UX polish",
    description:
      "Refresh existing products: clearer hierarchy, softer visuals, and interactions that feel intentional.",
    icon: "redesign",
  },
  {
    title: "Custom web components",
    description:
      "Reusable UI pieces — from design system building blocks to embeddable widgets that match your brand.",
    icon: "components",
  },
  {
    title: "Landing pages & web apps",
    description:
      "Marketing sites and lightweight applications: fast loads, responsive layouts, and copy-friendly sections.",
    icon: "landing",
  },
];

export type SkillChip = { name: string; note: string };

/** Two groups: engineering vs layout & design tooling. */
export const skillCategories: { title: string; skills: SkillChip[] }[] = [
  {
    title: "Development",
    skills: [
      { name: "React", note: "Primary stack" },
      { name: "TypeScript", note: "" },
      { name: "JavaScript (ES6+)", note: "" },
      { name: "Web components", note: "Custom elements" },
      { name: "Node.js", note: "Backend" },
      { name: "Git", note: "" },
    ],
  },
  {
    title: "Web Design",
    skills: [
      { name: "HTML & CSS", note: "Layout, animation" },
      { name: "UI/UX & Design", note: "" },
      { name: "Figma", note: "" },
    ],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
};

/** LinkedIn experience (newest first). */
export const experience: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "TechPods",
    period: "Nov 2022 — Jul 2024",
    location: "Sofia, Bulgaria",
    summary:
      "Front-end development embedded with OVO Energy via TechPods (IT services & consulting, 51–200 employees). Engineering & Technical, specialist level.",
  },
  {
    role: "Freelance Frontend Developer & Designer",
    company: "Freelance",
    period: "Jun 2022 — Nov 2022",
    summary:
      "Independent front-end development and design work between full-time engagements. Engineering & Technical, specialist level.",
  },
  {
    role: "Software Developer",
    company: "Infragistics",
    period: "Jan 2019 — Mar 2022",
    location: "Sofia, Bulgaria",
    summary:
      "Software development on UI controls and developer tools in a privately held product company (51–200 employees). Engineering & Technical, specialist level.",
  },
  {
    role: "Associate Software Developer",
    company: "Infragistics",
    period: "Jul 2017 — Dec 2018",
    location: "Bulgaria",
    summary:
      "Associate-level software development on Infragistics products. Engineering & Technical, specialist level.",
  },
];

/** Matches repositories pinned on https://github.com/Aleksandyr */
export const featuredProjects = [
  {
    name: "angular / components",
    description:
      "Angular Material and CDK — component infrastructure and Material Design building blocks for Angular apps.",
    href: "https://github.com/angular/components",
    stack: ["TypeScript", "Angular"],
  },
  {
    name: "Ignite UI for Angular",
    description:
      "Full Angular UI library: fast grids and charts, dock manager, and enterprise-ready components.",
    href: "https://github.com/IgniteUI/igniteui-angular",
    stack: ["TypeScript", "Angular"],
  },
  {
    name: "Ignite UI TypeDoc theme",
    description:
      "Documentation theme for TypeDoc, tailored for Ignite UI API reference sites.",
    href: "https://github.com/IgniteUI/igniteui-typedoc-theme",
    stack: ["TypeScript", "TypeDoc"],
  },
];

/** Employer / product work (not public repos). */
export const productHighlights: {
  name: string;
  description: string;
  href: string;
  stack: string[];
  linkLabel: string;
}[] = [
  {
    name: "OVO Energy — operations dashboard",
    description:
      "In-house dashboard for managing OVO agents and customers: accounts, relationships, and energy consumption insights.",
    href: "https://www.ovoenergy.com/",
    stack: ["React", "Node.js", "SCSS"],
    linkLabel: "OVO Energy →",
  },
];

/** Personal / client work and design explorations. */
export const personalProjects: {
  name: string;
  description: string;
  href?: string;
  stack?: string[];
  linkLabel?: string;
}[] = [
  {
    name: "Job Application Dashboard",
    description:
      "UI/UX design for a job applicants dashboard — layout, flows, and interactive prototype.",
    href: "https://www.figma.com/proto/VOtBtAv3I4jn5IBwqSTl0I/Job-Applicants-Dashboard?node-id=34-41&p=f&t=zf0kFbi8nN22Kd7H-1&scaling=scale-down&content-scaling=fixed&page-id=34%3A40",
    stack: ["Figma", "UI/UX"],
    linkLabel: "View Figma prototype →",
  },
  {
    name: "Portfolio site",
    description:
      "Client portfolio for premium beauty services. Still a work in progress — layout, content, and polish ongoing.",
    href: "http://cvetelinakamenova.com/",
    stack: ["Web", "Client"],
    linkLabel: "Visit site →",
  },
];

/**
 * Received recommendations tab (public view). Automated tools only receive full
 * text for the entries below; anything else requires copying while logged into
 * LinkedIn — append `{ quote, author, relation, profileUrl? }` to `testimonials`.
 */
export const linkedInRecommendationsUrl =
  "https://www.linkedin.com/in/aleksandar-kamenov-220881104/details/recommendations/?detailScreenTabIndex=0";

export const linkedInExperienceUrl =
  "https://www.linkedin.com/in/aleksandar-kamenov-220881104/details/experience/";

export type Testimonial = {
  quote: string;
  author: string;
  relation: string;
  profileUrl?: string;
  placeholder?: boolean;
};

/** All recommendation bodies available from the public LinkedIn page (complete quotes). */
export const testimonials: Testimonial[] = [
  {
    quote:
      "By the time I worked with Aleksandar, I was always amazed to observe the easiness Aleks approaches complex problems and the precise solutions he'd come up with. Working with this guy is more than a pleasure because his professional and social capabilities are always at a very high pace, he's never setting for less and therefore always willing to work on improving themself. The way he does that and the manner he communicates it to his surroundings is making the whole improvement process a contagious one. He's an extraordinary trend setter and hence I recommend him very warmly for his upcoming challenges as a great professional and a human!",
    author: "Petko Bozhinov",
    relation: "Colleague · Infragistics",
    profileUrl: "https://www.linkedin.com/in/bozhinov",
  },
  {
    quote:
      "I had the pleasure to work with Alex for 3 years in the same team. He always completes his tasks for the given time frame, he digs deeply into the problems and resolves them the best way possible. He is ambitious to learn and to share knowledge, he never steps back from responsibilities and sees new challenges as opportunities. A great team player and a great motivator. In a nutshell, a very well developed professional.",
    author: "Hristo Popov",
    relation: "Teammate (3 years) · Infragistics",
    profileUrl: "https://www.linkedin.com/in/hristop",
  },
  {
    quote:
    "I started my work journey with Aleks. He is innovative, organized as well as helpful, open to ideas and suggestions and willing to put that extra help whenever you need it. His expertise as a developer is considerable and his contribution is valuable for the team and the project. I highly recommend Aleks and would love to work with him again.",
    author: "Dobromir Tsvetkov",
    relation: "Colleague · Infragistics",
    profileUrl: "https://www.linkedin.com/in/dobromir-tsvetkov-04462317a/",
  },
  {
    quote:
    "Alex is talented and easy going person. He is always showing genuine interest in the feature and experience he is building. I admire him for his ability to stay up-to-date with latest trends in software development. I'm sure that Alex would be a great fit for any company or project and will quickly make a positive impact on it.",
    author: "Ivan Zahariev",
    relation: "Colleague · Software University",
    profileUrl: "https://www.linkedin.com/in/izahariev96/",
  },
  {
    quote:
    "Aleks is very disciplined, passionate about what he's doing, committed to every task and always pursuing great results. He is not afraid to work on new challenges and shows a lot of eagerness to learn new technologies and principles. In general he is a great young person, who wants to prove himself and help to the team to grow (knowledge) and prosper. It is a pleasure to work with him :))",
    author: "Zdravko Kolev",
    relation: "Manager · Infragistics",
    profileUrl: "https://www.linkedin.com/in/zdravko-kolev/",
  },
];
