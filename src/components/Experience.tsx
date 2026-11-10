// import { Briefcase, CheckCircle2, MapPin } from "lucide-react";
// import { experience } from "@/data/portfolio";
// import { SectionHeading } from "@/components/ui/SectionHeading";
// import { Reveal } from "@/components/ui/Reveal";

// export function Experience() {
//   if (!experience.length) return null;

//   return (
//     <section id="experience" className="section">
//       <div className="container-x grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
//         <div className="lg:sticky lg:top-28 lg:self-start">
//           <SectionHeading
//             eyebrow="04 — Experience"
//             title={
//               <>
//                 Where I&apos;ve{" "}
//                 <span className="text-gradient-accent">shipped</span>.
//               </>
//             }
//             description="Roles where I learned to balance speed with quality, and features with the people using them."
//           />
//           <Reveal delay={120}>
//             <div className="mt-8 hidden rounded-2xl border border-line bg-white/[0.02] p-5 lg:block">
//               <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted/70">
//                 <Briefcase className="h-3.5 w-3.5 text-accent-light" />
//                 Currently employed
//               </div>
//               <p className="mt-2 text-sm leading-relaxed text-muted">
//                 Building analytics products at Northwind Studio — and always open to
//                 conversations about thoughtful frontend work.
//               </p>
//             </div>
//           </Reveal>
//         </div>

//         <div className="timeline">
//           {experience.map((job, index) => (
//             <Reveal key={`${job.company}-${job.role}`} delay={index * 90}>
//               <div className="relative pb-7 last:pb-0">
//                 <span className="timeline-dot">
//                   <Briefcase className="h-3.5 w-3.5" strokeWidth={1.8} />
//                 </span>

//                 <div className="card-glass card-hover p-5 sm:p-6">
//                   <div className="flex flex-wrap items-start justify-between gap-3">
//                     <div>
//                       <h3 className="font-display text-[1.05rem] font-semibold text-cream sm:text-lg">
//                         {job.role}
//                       </h3>
//                       <p className="mt-1 text-[0.85rem] font-medium text-accent-light/90">
//                         {job.company}
//                       </p>
//                     </div>
//                     <span className="chip text-[0.64rem]">{job.period}</span>
//                   </div>

//                   <p className="mt-3 flex items-center gap-1.5 font-mono text-[0.64rem] uppercase tracking-wider text-muted/70">
//                     <MapPin className="h-3 w-3" />
//                     {job.location}
//                   </p>

//                   <p className="mt-4 text-[0.86rem] leading-relaxed text-muted">
//                     {job.summary}
//                   </p>

//                   <ul className="mt-4 space-y-2.5">
//                     {job.highlights.map((highlight) => (
//                       <li
//                         key={highlight}
//                         className="flex items-start gap-2.5 text-[0.84rem] leading-relaxed text-muted"
//                       >
//                         <CheckCircle2
//                           className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-light/80"
//                           strokeWidth={2}
//                         />
//                         {highlight}
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="mt-5 flex flex-wrap gap-1.5">
//                     {job.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="rounded-md border border-line bg-white/[0.03] px-2 py-1 font-mono text-[0.62rem] text-muted"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
