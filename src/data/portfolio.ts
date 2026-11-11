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
    "Express.js & RestAPI Expert",
    "Backend Focused",
  ],
  tagline:
    "I build fast, accessible web products — from pixel-perfect interfaces to the APIs and databases behind them.",
  location: "Rangpur, Bangladesh",
  email: "sagar2002004@gmail.com",
  phone: "+880 1722528308",
  phoneHref: "+8801700000000",
  whatsapp: "+8801722528308",
  availability: "Available for freelance & full-time roles",
  resume: "/resume.pdf",
  photo: "/profile.jpeg",
  bio: [
    "I'm a full stack developer who fell in love with the web the day I inspected my first webpage. What started as tweaking MySpace layouts turned into a Computer Science degree, a stack of late-night side projects, and aiming for a career building products that people actually use.",
    "I enjoy work that sits at the intersection of design and engineering: turning an idea into a clean interface, then wiring it to a backend that stays fast under real traffic. My happy place is a well-structured React codebase, a typed API, and a design system that makes shipping features feel effortless.",
    "Outside the editor you'll find me watching anime or movie series, hunting for the best spot for traveling or playing football in an open field. I care about craft, honest feedback, and leaving codebases better than I found them.",
  ],
  facts: [
    { label: "Based in", value: "Rangpur, Bangladesh" },
    // { label: "Experience", value: "4+ years building for the web" },
    { label: "Focus", value: "React, Next.js, Node.js, Express.js" },
    { label: "Currently", value: "Open to new opportunities" },
  ],
  hobbies: ["Playing Football", "Watching Anime", "Traveling", "Open source"],
};

export type SocialIcon = "github" | "linkedin" | "x" | "facebook";

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
    label: "X",
    href: "https://x.com/MdSagarAhammed0",
    icon: "x",
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
  // { value: "4+", label: "Years of experience" },
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

export type SkillCategory = "Frontend" | "Backend" | "Tools";

export type Skill = {
  name: string;
  category: SkillCategory;
  logo: string;
  /** Invert monochrome logos that ship black so they read on the dark theme. */
  invert?: boolean;
};

export const skills: Skill[] = [
  {
    name: "HTML",
    category: "Frontend",
    logo: "/tech/html5-original.svg",
  },
  {
    name: "CSS",
    category: "Frontend",
    logo: "/tech/css3-original.svg",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    logo: "/tech/javascript-original.svg",
  },
  {
    name: "React",
    category: "Frontend",
    logo: "/tech/react-original.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    logo: "/tech/nextjs-original.svg",
    invert: true,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    logo: "/tech/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    category: "Backend",
    logo: "/tech/nodedotjs-original.svg",
  },
  {
    name: "MongoDB",
    category: "Backend",
    logo: "/tech/mongodb-original.svg",
  },
  {
    name: "Express.js",
    category: "Backend",
    logo: "/tech/logo-express-black.svg",
    invert: true,
  },
  {
    name: "GitHub",
    category: "Tools",
    logo: "/tech/github-original.svg",
    invert: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    logo: "/tech/ts-logo-256.svg",
    
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
      "Focused on web technologies, databases, oop, data structures, algorithm. Final-year thesis explored artificial intelligence and machine learning.",
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Police Lines School and College, Rangpur",
    period: "2017 — 2019",
    description:
      "Studied physics, chemistry, mathematics and ict; run my very first basic C programme.",
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
  for: string;
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
    image: "/projects/fitlog.png",
    year: "2026",
    role: "Frontend Development",
    timeline: "1 weeks",
    for: "Personal project",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
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
    slug: "bazardor",
    name: "BazarDor",
    tagline: "BazarDor is a responsive Bangla-first market-price dashboard.",
    image: "/projects/bajardor.png",
    year: "2026",
    role: "Full Stack Developer",
    timeline: "1 weeks",
    for: "personal project",
    tech: [
      "React",
      "Javascript",
      "Next.js",
      "MongoDB Atlas",
      "BetterAuth",
      "Tailwind CSS",
    ],
    description: [
      "BazarDor is a responsive Bangla-first market-price dashboard for checking everyday grocery prices in Bangladesh, comparing estimated prices across markets, and following daily price movement.",
    ],
    features: [
      "Live product catalogue: Fetches products and categories exclusively from the provided BazarDor API; no local sample product catalogue is used.",
      "Price movement overview: Separate sections for the top six price risers and fallers.",
      "Product details and market comparison: Login-protected product pages with min/max/average price summaries and market-level comparisons.",
      "Category browsing and sorting: Category routes with numeric ascending/descending price sorting that correctly handles Bengali digits.",
      "Authentication: Better Auth email/password registration and sign-in, optional Google/GitHub OAuth, protected product details, profile and sign-out.",
      "Responsive Bangla UI: Mobile-friendly navigation, scrolling price ticker, loading skeletons, toast notifications and a custom 404 page.",
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
    liveUrl: "https://bazardor-a-market-tracker.onrender.com",
    githubUrl: "https://github.com/MdSagarAhammed/bazardor_a_market_tracker",
  },
  {
    slug: "studiospace",
    name: "StudioSpace",
    tagline: "A Creative Workspace Marketplace",
    image: "/projects/studiospace.png",
    year: "2026",
    role: "Full Stack Developer",
    timeline: "2 weeks",
    for: "Personal project",
    tech: ["Next.js", "Express.js", "Javascript", "Mongodb", "Better Auth", "Google OAuth", "JWT", "Tailwind CSS", "Rest API",],
    description: [
      "Discover. Book. Create.",
      "StudioSpace is a peer-to-peer marketplace where creators, photographers, filmmakers, podcasters, and musicians can discover and book professional creative workspaces. It also allows studio owners to list and manage their spaces through a seamless booking platform.",
    ],
    features: [
      "Explore Studios: Discover creative spaces with category-based filtering, search, and detailed workspace information.",
      "Secure Authentication: Register and log in using email/password or Google authentication.",
      "Studio Management: Add, update, and delete studio listings with image uploads and detailed information.",
      "Smart Booking System: Reserve studio spaces and manage bookings with real-time booking status.",
      "Responsive Design: Fully optimized interface for mobile, tablet, and desktop devices.",
      "Theme Customization: Switch between light and dark themes for a personalized experience.",
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
    liveUrl: "https://studiospace-web.onrender.com",
    githubUrl: "https://github.com/MdSagarAhammed/studiospace-web",
  },
];

export const site = {
  title: "Sagar Ahammed — Full Stack Developer",
  description:
    "Portfolio of Sagar Ahammed, a full stack developer building fast, accessible web products with React, Next.js and Express.js.",
  url: "https://myportfolio-ashen-seven-24.vercel.app",
  ogImage: "/projects/portfolioss.png",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  // { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
