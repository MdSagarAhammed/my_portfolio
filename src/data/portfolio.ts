/**
 * ------------------------------------------------------------------
 *  PORTFOLIO CONTENT
 * ------------------------------------------------------------------
 *  Everything on the site is driven by this file.
 *  Replace the placeholder values below with your own details.
 *  Also swap `public/profile.svg` and `public/resume.pdf` with your
 *  real photo and resume — no code changes needed.
 * ------------------------------------------------------------------
 */

export const profile = {
  name: "Md Sagar Ahammed",
  firstName: "Md Sagar",
  initials: "SA",
  designation: "Full Stack Developer",
  roles: [
    "React & Next.js Specialist",
    "UI Engineer",
    "Design Systems Enthusiast",
  ],
  tagline:
    "I build fast, accessible web products — from pixel-perfect interfaces to the APIs and databases behind them.",
  location: "Rangpur, Bangladesh",
  email: "sagar2002004@gmail.com",
  phone: "+880 1722528308",
  phoneHref: "+8801700000000",
  whatsapp: "8801722528308",
  availability: "Available for freelance & full-time roles",
  resume: "/resume.pdf",
  photo: "/profile.jpeg",
  bio: [
    "I'm a full stack developer who fell in love with the web the day I inspected my first webpage. What started as tweaking MySpace layouts turned into a Computer Science degree, a stack of late-night side projects, and a career building products that people actually use.",
    "I enjoy work that sits at the intersection of design and engineering: turning a fuzzy idea into a clean interface, then wiring it to a backend that stays fast under real traffic. My happy place is a well-structured React codebase, a typed API, and a design system that makes shipping features feel effortless.",
    "Outside the editor you'll find me cycling the long way home, hunting for the best local coffee, sketching UI ideas in a battered notebook, or losing a few rounds of online chess. I care about craft, honest feedback, and leaving codebases better than I found them.",
  ],
  facts: [
    { label: "Based in", value: "Rangpur, Bangladesh" },
    { label: "Experience", value: "4+ years building for the web" },
    { label: "Focus", value: "React, Next.js, Node.js, Express.js" },
    { label: "Currently", value: "Open to new opportunities" },
  ],
  hobbies: [
    "playing Football",
    "Watching Anime",
    "UI sketching",
    "Open source",
    "Photography",
  ],
};

export type SocialIcon = "github" | "linkedin" | "twitter" | "facebook";

export const socials: {
  label: string;
  href: string;
  icon: SocialIcon;
  handle: string;
}[] = [
  {
    label: "GitHub",
    href: "https://github.com/MdSagarAhammed",
    icon: "github",
    handle: "@MdSagarAhammed",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mdsagarahammed0",
    icon: "linkedin",
    handle: "in/mdsagarahammed0",
  },
  {
    label: "Twitter",
    href: "https://x.com/MdSagarAhammed0",
    icon: "twitter",
    handle: "@MdSagarAhammed0",
  },
  // {
  //   label: "Facebook",
  //   href: "https://facebook.com/alexcarter",
  //   icon: "facebook",
  //   handle: "/alexcarter",
  // },
];

export const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "4+", label: "Projects shipped" },
  // { value: "12+", label: "Happy clients" },
];

export const stack = [
  "TypeScript",
  "Javascript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "MongoDB",
  "Figma",
  "Rest API",
];

export type SkillGroupIcon = "frontend" | "backend" | "tools";

export const skillGroups: {
  title: string;
  icon: SkillGroupIcon;
  blurb: string;
  skills: { name: string; level: number }[];
}[] = [
  {
    title: "Frontend",
    icon: "frontend",
    blurb: "Interfaces that feel fast, accessible and intentional.",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 94 },
      // { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: "backend",
    blurb: "APIs and data layers built to stay reliable as they grow.",
    skills: [
      { name: "Node.js / Express", level: 88 },
      // { name: "PostgreSQL / Prisma", level: 84 },
      { name: "MongoDB", level: 86 },
      { name: "REST & Auth (JWT)", level: 82 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "tools",
    blurb: "The details that turn a project into a dependable product.",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Vercel / CI-CD", level: 86 },
      // { name: "Docker", level: 74 },
      { name: "Figma / Design", level: 78 },
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Hajee Mohammad Danesh Science and Technology University",
    period: "2020 — 2025",
    description:
      "Focused on web technologies, databases and human-computer interaction. Final-year thesis explored accessible UI patterns for low-bandwidth users.",
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Police Lines School and College, Rangpur",
    period: "2017 — 2019",
    description:
      "Studied physics, chemistry and mathematics; led the college programming club and built my first full website for a local event.",
  },
  // {
  //   degree: "Secondary School Certificate (SSC) — Science",
  //   institution: "Ideal School & College, Dhaka",
  //   period: "2012 — 2014",
  //   result: "GPA 5.00 / 5.00",
  //   description:
  //     "Where the curiosity started — a school computer lab, a borrowed HTML book, and a lot of trial and error.",
  // },
];

// export type ExperienceItem = {
//   role: string;
//   company: string;
//   period: string;
//   location: string;
//   summary: string;
//   highlights: string[];
//   tech: string[];
// };

// export const experience: ExperienceItem[] = [
//   {
//     role: "Senior Frontend Engineer",
//     company: "Northwind Studio",
//     period: "2023 — Present",
//     location: "Remote",
//     summary:
//       "Leading the frontend for a multi-tenant SaaS analytics platform used by 40k+ monthly users.",
//     highlights: [
//       "Rebuilt the dashboard in Next.js and TypeScript, cutting initial load time by 46%.",
//       "Introduced a shared design system with Tailwind and Storybook, reducing UI bugs by a third.",
//       "Mentored three junior developers and ran weekly frontend craft sessions.",
//     ],
//     tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Vitest"],
//   },
//   {
//     role: "Full Stack Developer",
//     company: "Pixel & Pine",
//     period: "2021 — 2023",
//     location: "Dhaka, Bangladesh",
//     summary:
//       "Built and shipped client products end to end — from Figma handoff to production deployment.",
//     highlights: [
//       "Delivered 14 client projects across e-commerce, fintech and education.",
//       "Designed REST APIs in Node.js and PostgreSQL serving 200k+ requests per day.",
//       "Set up CI/CD pipelines on Vercel and Render, taking releases from weekly to daily.",
//     ],
//     tech: ["React", "Node.js", "PostgreSQL", "Prisma", "Docker"],
//   },
// ];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  year: string;
  role: string;
  timeline: string;
  client: string;
  tech: string[];
  description: string[];
  features: string[];
  // challenges: string[];
  // improvements: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "fitlog",
    name: "Fitlog",
    tagline: "A workout library for your gym",
    image: "/projects/devboard.svg",
    year: "2026",
    role: "Design & Full Stack Development",
    timeline: "1 weeks",
    client: "Personal project",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", ],
    description: [
      "A dark, no-nonsense gym companion built to test my next.js skills. Pick a lift from the library, lock it into today's plan, and save others for later — all backed by a live workouts API and persisted in your browser.",
    ],
    features: [
      "Responsive workout library — a 3×4 card grid on desktop that collapses gracefully to 2 and 1 columns on tablet and mobile.",
      "Live sort & search — reorder the library by Duration, Calories, or Rating, or filter by name/muscle group, without leaving the page.",
      "Today's Plan with a 5-lift cap — add workouts from any detail page; the Add to today's plan button disables itself once the plan is full.",
      "Persistent Plan / Saved / Done state — everything is written to localStorage, so your plan survives a page reload, and badge counters in the navbar always reflect the current counts.",
      "Custom 404 page — any unknown route lands on a themed not-found screen with a way back home.",
    ],
    // challenges: [
    //   "GitHub's API rate limits meant naive per-page fetches broke quickly. I added server-side caching with tag-based revalidation and batched requests, reducing calls by roughly 70%.",
    //   "Drag-and-drop needed to feel instant without trusting the client. I combined optimistic UI with a server action queue and rollback on failure.",
    //   "Supporting multiple time zones in the focus analytics required storing UTC timestamps and rendering summaries in the user's locale.",
    // ],
    // improvements: [
    //   "Add team workspaces with shared boards and role-based permissions.",
    //   "Introduce Slack and Linear integrations so activity flows in automatically.",
    //   "Ship a public API and embeddable widgets for personal sites.",
    // ],
    liveUrl: "https://workouttrackerfitlog.vercel.app",
    githubUrl: "https://github.com/MdSagarAhammed/Workout_tracker_fitlog",
  },
  {
    slug: "shopsphere",
    name: "ShopSphere",
    tagline: "A modern storefront and admin suite for small independent brands.",
    image: "/projects/shopsphere.svg",
    year: "2024",
    role: "Full Stack Developer",
    timeline: "12 weeks",
    client: "Independent retailer",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Cloudinary"],
    description: [
      "ShopSphere is a complete commerce platform: a fast storefront for shoppers and a focused admin panel for the store owner. It handles catalogue management, inventory, discounts, order fulfilment and payments without the overhead of a heavy enterprise suite.",
      "The frontend is a React SPA with route-level code splitting, while the API is an Express service backed by MongoDB. Stripe handles checkout, and Cloudinary serves responsive product imagery.",
    ],
    features: [
      "Filterable catalogue with instant search and faceted categories",
      "Cart, guest checkout and Stripe payment flow with webhooks",
      "Admin dashboard for products, stock, discounts and orders",
      "Order tracking emails and downloadable invoices",
    ],
    // challenges: [
    //   "Cart state had to survive refreshes and sign-ins. I persisted a guest cart locally, then merged it into the server cart on login without duplicating line items.",
    //   "Payment webhooks occasionally arrived before the order record existed. I made webhook handling idempotent and added a reconciliation job for missed events.",
    //   "Product images were slowing the catalogue on mobile. Migrating to Cloudinary with width-based transformations cut the page weight by more than half.",
    // ],
    // improvements: [
    //   "Add multi-vendor support with per-seller payouts.",
    //   "Build a recommendation engine using purchase history.",
    //   "Add a headless storefront starter kit for faster client onboarding.",
    // ],
    liveUrl: "https://shopsphere.example.com",
    githubUrl: "https://github.com/alexcarter/shopsphere",
  },
  {
    slug: "chatwave",
    name: "ChatWave",
    tagline: "Real-time team chat with threads, presence and a tiny footprint.",
    image: "/projects/chatwave.svg",
    year: "2024",
    role: "Full Stack Developer",
    timeline: "8 weeks",
    client: "Personal project",
    tech: ["Next.js", "Socket.IO", "Redis", "PostgreSQL", "Tailwind CSS"],
    description: [
      "ChatWave is a lightweight messaging app for small teams. It supports channels, threaded replies, typing indicators, read receipts and presence — the essentials, without the enterprise bloat.",
      "Messages travel over Socket.IO with Redis pub/sub so multiple server instances stay in sync. Postgres stores history, and the client caches recent conversations for instant navigation.",
    ],
    features: [
      "Channels and direct messages with threaded replies",
      "Live typing indicators, presence and read receipts",
      "Message search with cursor-based pagination",
      "File attachments and emoji reactions",
    ],
    // challenges: [
    //   "Keeping unread counts accurate across reconnects was tricky. I derived counts from per-user last-read cursors instead of incrementing counters, which removed drift entirely.",
    //   "Fan-out to many sockets risked duplicate messages when a client reconnected mid-stream. Client-generated message IDs plus unique constraints made delivery idempotent.",
    //   "Scaling beyond one Node process required moving socket state into Redis while keeping the API stateless.",
    // ],
    // improvements: [
    //   "Add end-to-end encryption for direct messages.",
    //   "Build voice and video rooms using WebRTC.",
    //   "Ship a desktop app with offline message queuing.",
    // ],
    liveUrl: "https://chatwave.example.com",
    githubUrl: "https://github.com/alexcarter/chatwave",
  },
];

export const site = {
  title: "Sagar Ahammed — Full Stack Developer",
  description:
    "Portfolio of Sagar Ahammed, a full stack developer building fast, accessible web products with React, Next.js and Node.js.",
  url: "https://alexcarter.dev",
  ogImage: "/projects/devboard.svg",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
