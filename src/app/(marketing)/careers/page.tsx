'use client';

import React from 'react';
import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from '@/components/page-header';
import { Button } from '@/components/ui/button';
import Particles from "@/components/ui/particles";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Briefcase,
  Code,
  Database,
  ArrowRight,
  Mail,
} from 'lucide-react';
import Link from 'next/link';

const openings = [
  {
    title: 'Tech Sales Executive',
    experience: '1+ Year Experience',
    // icon: Briefcase,
    description:
      'Drive business growth by identifying opportunities, engaging prospects, and translating technical solutions into business value.',
    skills: [
      'B2B Sales',
      'Client Communication',
      'IT Services Knowledge',
      'Lead Generation',
      'CRM Tools',
    ],
  },
  {
    title: 'MERN Stack Developer',
    experience: '1+ Year Experience',
    // icon: Code,
    description:
      'Build scalable, high-performance web applications using MongoDB, Express.js, React, and Node.js.',
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Git',
      'Version Control',
      'Postgres',
      'Angular (Plus)',
      'Three js (Plus)',
      'Svelte (Plus)'
    ],
  },
  {
    title: 'Backend Developer',
    experience: '1+ Year Experience',
    // icon: Database,
    description:
      'Design and develop robust backend systems, APIs, and services using Go, Python, and other relevant frameworks.',
    skills: [
      'Python',
      'Django / FastAPI',
      'REST APIs',
      'Database Design',
      'Cloud Basics',
      'Go (Plus)',
      'Tunneling (Plus)',
      'Docker (Plus)',
      'Kubernetes (Plus)',
    ],
  },
];

const CareersPage = () => {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      <Particles
          className="absolute inset-0 -z-10"
          quantity={typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 150}
          ease={80}
          size={0.5}
          staticity={30}
          color="#ffffff"
      />
      <MaxWidthWrapper>

        {/* ================= HEADER ================= */}
        <PageHeader>
          <Link
            href=""
            className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          >
            🚀 <span className="mx-2">We Are Hiring</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <PageHeaderHeading>Careers at DEVMONIX</PageHeaderHeading>

          <PageHeaderDescription>
            Join a team of passionate engineers, designers, and innovators.
            At DEVMONIX, we build modern software solutions while fostering
            growth, learning, and ownership.
          </PageHeaderDescription>

          <Button asChild>
            {/* <Link href="mailto:careers@devmonix.com"> */}
            <Link href="mailto:careerdevmonix@gmail.com">
              Apply Now
            </Link>
          </Button>
        </PageHeader>

        {/* ================= OPEN POSITIONS ================= */}
        <section className="pt-10 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {openings.map((role, index) => {
              // const Icon = role.icon;
              return (
                <Card
                  key={index}
                  className="
                    h-full
                    border border-neutral-800
                    bg-neutral-900/70
                    backdrop-blur
                    transition-all
                    hover:-translate-y-1
                    hover:shadow-[0_0_30px_rgba(0,0,0,0.6)]
                  "
                >
                  <CardHeader className="space-y-4">
                    {/* <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div> */}
                    <CardTitle className="text-xl">
                      {role.title}
                    </CardTitle>
                    <p className="text-sm text-cyan-400 font-medium">
                      {role.experience}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {role.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-neutral-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="mt-6 w-full flex items-center gap-2"
                      asChild
                    >
                      <Link href="mailto:careers@devmonix.com">
                        <Mail className="w-4 h-4" />
                        Apply for this Role
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}

          </div>
        </section>

        {/* ================= WHY DEVMONIX ================= */}
        <section className="pb-28">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 backdrop-blur p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Why Work With Us?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              We believe in empowering people, encouraging innovation,
              and building long-term careers—not just projects.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                'Modern Tech Stack',
                'Career Growth & Learning',
                'Collaborative Culture',
                'Ownership & Responsibility',
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
                >
                  <p className="font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </MaxWidthWrapper>
    </div>
  );
};

export default CareersPage;
