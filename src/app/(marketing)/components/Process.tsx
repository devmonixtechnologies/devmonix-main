// 'use client';

// import {
//   Target,
//   Users,
//   Rocket,
//   TrendingUp,
//   Zap,
//   CheckCircle2,
// } from 'lucide-react';

// const phases = [
//   {
//     icon: Target,
//     title: 'Discovery',
//     description: 'Understanding your goals, users, and technical needs',
//     color: 'from-indigo-500 to-violet-500',
//   },
//   {
//     icon: Users,
//     title: 'Planning',
//     description: 'Designing architecture, UX, and execution roadmap',
//     color: 'from-violet-500 to-fuchsia-500',
//   },
//   {
//     icon: Rocket,
//     title: 'Development',
//     description: 'Agile development with quality-first execution',
//     color: 'from-cyan-500 to-blue-500',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Launch',
//     description: 'Deployment, optimization, and performance tuning',
//     color: 'from-emerald-500 to-teal-500',
//   },
//   {
//     icon: Zap,
//     title: 'Scale',
//     description: 'Monitoring, scaling, and continuous improvement',
//     color: 'from-amber-500 to-orange-500',
//   },
// ];

// export default function Process() {
//   return (
//     <section className="relative py-24">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center max-w-2xl mx-auto mb-20">
//           <span className="inline-block mb-4 rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary">
//             Our Process
//           </span>
//           <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground">
//             How We Build Software That Scales
//           </h2>
//           <p className="mt-4 text-lg text-muted-foreground">
//             A transparent, proven workflow designed for speed, quality, and growth.
//           </p>
//         </div>

//         {/* Process Steps */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
//           {phases.map((phase, index) => {
//             const Icon = phase.icon;
//             return (
//               <div
//                 key={index}
//                 className="relative rounded-2xl border border-border bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md p-6 transition-all hover:shadow-xl"
//               >
//                 <div
//                   className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center mb-4`}
//                 >
//                   <Icon className="w-6 h-6 text-white" />
//                 </div>

//                 <h3 className="font-semibold text-foreground mb-2">
//                   {phase.title}
//                 </h3>
//                 <p className="text-sm text-muted-foreground">
//                   {phase.description}
//                 </p>

//                 {/* Connector */}
//                 {index < phases.length - 1 && (
//                   <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-border to-transparent" />
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Stats */}
//         <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             {
//               value: '6–8 Weeks',
//               title: 'Delivery Timeline',
//               desc: 'From idea to production-ready product',
//             },
//             {
//               value: '100%',
//               title: 'Quality Focus',
//               desc: 'Testing, reviews, and performance checks',
//             },
//             {
//               value: 'Agile',
//               title: 'Methodology',
//               desc: 'Flexible, collaborative, and transparent',
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="rounded-2xl border border-border bg-muted/40 p-8 text-center"
//             >
//               <div className="text-3xl font-bold text-primary mb-2">
//                 {item.value}
//               </div>
//               <div className="font-medium text-foreground">
//                 {item.title}
//               </div>
//               <p className="mt-2 text-sm text-muted-foreground">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Why It Works */}
//         <div className="mt-20 rounded-3xl border border-border bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md p-10">
//           <h3 className="text-2xl font-semibold text-foreground mb-8">
//             Why This Process Works
//           </h3>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               'Clear communication at every stage',
//               'Early risk identification',
//               'Continuous feedback & iteration',
//               'Performance and scalability focused',
//             ].map((text, i) => (
//               <div key={i} className="flex items-start gap-4">
//                 <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
//                   <CheckCircle2 className="w-5 h-5 text-white" />
//                 </div>
//                 <p className="text-muted-foreground">{text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // import { CheckCircle2, Zap, Users, Target, Rocket, TrendingUp } from 'lucide-react';

// // const phases = [
// //   {
// //     icon: Target,
// //     title: 'Discovery & Strategy',
// //     description: 'Deep dive into your business goals, challenges, and market landscape',
// //     details: [
// //       'Stakeholder interviews',
// //       'Market analysis',
// //       'Technical requirements',
// //       'Risk assessment',
// //     ],
// //   },
// //   {
// //     icon: Users,
// //     title: 'Planning & Design',
// //     description: 'Create detailed roadmaps and prototypes aligned with your vision',
// //     details: [
// //       'Architecture design',
// //       'UI/UX design',
// //       'Project roadmap',
// //       'Resource planning',
// //     ],
// //   },
// //   {
// //     icon: Rocket,
// //     title: 'Development & Delivery',
// //     description: 'Agile development with weekly sprints and continuous collaboration',
// //     details: [
// //       'Agile sprint cycles',
// //       'Code reviews',
// //       'Testing & QA',
// //       'Performance optimization',
// //     ],
// //   },
// //   {
// //     icon: TrendingUp,
// //     title: 'Launch & Optimize',
// //     description: 'Successful deployment with monitoring and continuous improvement',
// //     details: [
// //       'Production deployment',
// //       'Performance tuning',
// //       'Analytics setup',
// //       'User training',
// //     ],
// //   },
// //   {
// //     icon: Zap,
// //     title: 'Support & Scaling',
// //     description: '24/7 monitoring, maintenance, and scaling as you grow',
// //     details: [
// //       '24/7 monitoring',
// //       'Bug fixes & updates',
// //       'Performance scaling',
// //       'Feature enhancements',
// //     ],
// //   },
// // ];

// // export default function Process() {
// //   return (
// //     <section id="process" className="py-24 px-6 relative overflow-hidden">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="text-center mb-16">
// //           <h2 className="text-5xl md:text-6xl font-bold mb-6">
// //             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
// //               Our Proven
// //             </span>
// //             <span className="text-gray-800"> Process</span>
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //             A streamlined, transparent approach to delivering excellence at every stage
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-5 gap-4 mb-12">
// //           {phases.map((phase, index) => {
// //             const Icon = phase.icon;
// //             return (
// //               <div key={index} className="relative">
// //                 <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
// //                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
// //                     <Icon className="w-6 h-6 text-white" />
// //                   </div>

// //                   <h3 className="font-bold text-gray-800 mb-2 text-sm">{phase.title}</h3>
// //                   <p className="text-xs text-gray-600 mb-4 leading-relaxed">{phase.description}</p>

// //                   <div className="space-y-2">
// //                     {phase.details.map((detail, i) => (
// //                       <div key={i} className="flex items-start gap-2 text-xs">
// //                         <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-0.5" />
// //                         <span className="text-gray-700">{detail}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {index < phases.length - 1 && (
// //                   <div className="hidden md:block absolute top-1/3 -right-2 w-4 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 z-0" />
// //                 )}
// //               </div>
// //             );
// //           })}
// //         </div>

// //         <div className="mt-16 grid md:grid-cols-3 gap-6">
// //           <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
// //             <div className="text-4xl font-bold text-blue-600 mb-2">6-Week</div>
// //             <div className="text-gray-700 font-semibold mb-2">Average Project Timeline</div>
// //             <p className="text-gray-600 text-sm">From concept to production deployment</p>
// //           </div>

// //           <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200">
// //             <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
// //             <div className="text-gray-700 font-semibold mb-2">Quality Assurance</div>
// //             <p className="text-gray-600 text-sm">Rigorous testing at every phase</p>
// //           </div>

// //           <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200">
// //             <div className="text-4xl font-bold text-purple-600 mb-2">Agile</div>
// //             <div className="text-gray-700 font-semibold mb-2">Development Methodology</div>
// //             <p className="text-gray-600 text-sm">Flexible, transparent, collaborative approach</p>
// //           </div>
// //         </div>

// //         <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-200 p-8 md:p-12">
// //           <h3 className="text-2xl font-bold text-gray-800 mb-8">Why Our Process Works</h3>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             {[
// //               {
// //                 title: 'Transparent Communication',
// //                 description: 'Regular updates, clear roadmaps, and open collaboration throughout the project',
// //               },
// //               {
// //                 title: 'Risk Management',
// //                 description: 'Proactive identification and mitigation of potential challenges',
// //               },
// //               {
// //                 title: 'Continuous Improvement',
// //                 description: 'Regular retrospectives and optimization to enhance outcomes',
// //               },
// //               {
// //                 title: 'Quality First',
// //                 description: 'Comprehensive testing and code review at every stage',
// //               },
// //             ].map((item, index) => (
// //               <div key={index} className="flex gap-4">
// //                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
// //                   <CheckCircle2 className="w-5 h-5 text-white" />
// //                 </div>
// //                 <div>
// //                   <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
// //                   <p className="text-gray-600 text-sm">{item.description}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
