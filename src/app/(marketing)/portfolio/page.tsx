'use client';

import React from 'react';
import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Button } from '@/components/ui/button';
import MagicCard from '@/components/ui/magic-card';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  Github,
  Activity,
  ShoppingCart,
  Brain,
  Layers,
  Server,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import GithubOrgInfo from '@/components/ui/github-org-info';
import Link from 'next/link';

const projects = [
  {
    title: 'Enterprise CRM Platform',
    desc: 'Enterprise-grade CRM system streamlining sales, marketing, and operations with deep system integrations.',
    // icon: Layers,
    tags: ['Enterprise', 'CRM', 'Automation'],
  },
  {
    title: 'Scalable E-Commerce Platform',
    desc: 'High-performance e-commerce solution with secure payments, inventory automation, and personalization.',
    // icon: ShoppingCart,
    tags: ['E-Commerce', 'Payments', 'Scalability'],
  },
  {
    title: 'AI-Powered Chatbot',
    desc: 'Conversational AI handling complex customer queries with intelligent escalation to human agents.',
    // icon: Brain,
    tags: ['AI', 'NLP', 'Automation'],
  },
  {
    title: 'Real-Time Analytics Dashboard',
    desc: 'Advanced dashboards delivering actionable insights on campaigns, users, and business performance.',
    // icon: Activity,
    tags: ['Analytics', 'Dashboards', 'Data'],
  },
  {
    title: 'DevOps Automation Pipeline',
    desc: 'CI/CD automation reducing deployment time while improving reliability and code quality.',
    // icon: Server,
    tags: ['DevOps', 'CI/CD', 'Cloud'],
  },
  {
    title: '24/7 Monitoring System',
    desc: 'Proactive monitoring platform ensuring uptime, performance, and security across cloud infrastructure.',
    // icon: Activity,
    tags: ['Monitoring', 'SRE', 'Reliability'],
  },
];

const PortfolioPage = () => {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      
      <MaxWidthWrapper>

        {/* ================= HEADER ================= */}
        <PageHeader>
          <Link
            href=""
            className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          >
            💼 <span className="mx-2">Our Work</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <PageHeaderHeading>Portfolio</PageHeaderHeading>

          <PageHeaderDescription>
            A selection of projects where strategy, engineering excellence,
            and modern technology combine to deliver measurable business impact.
          </PageHeaderDescription>

          <Button asChild>
            <Link href="/contact">Start a Project</Link>
          </Button>
        </PageHeader>

        {/* ================= PROJECTS ================= */}
        <section className="pt-10 pb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => {
              // const Icon = project.icon;
              return (
                // <MagicCard key={index}>
                  <Card
                    className="
                      h-full
                      border border-neutral-800
                      bg-neutral-900/60
                      backdrop-blur
                      transition-all
                      hover:-translate-y-1
                      hover:shadow-[0_0_30px_rgba(0,0,0,0.6)]
                    "
                  >
                    <CardHeader className="space-y-3">
                      {/* <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div> */}
                      <CardTitle className="text-xl">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    {/* <CardFooter>
                      <Button size="sm" variant="outline">
                        View Case Study
                      </Button>
                    </CardFooter> */}
                  </Card>
                // </MagicCard>
              );
            })}

          </div>
        </section>

        {/* ================= ENGINEERING CULTURE ================= */}
        <section className="pt-8 pb-24">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

    {/* WIDER CARD */}
    <div className="lg:col-span-12">
      <Card className="border border-neutral-800 bg-neutral-900/70 backdrop-blur">
        <CardHeader className="space-y-2">
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5" />
            <CardTitle className="text-2xl">
              Engineering & Open-Source
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground max-w-5xl">
            We maintain strong engineering standards and actively contribute to
            open-source projects, focusing on scalability, security, and
            long-term maintainability.
          </p>

          <GithubOrgInfo org="devmonixtechnologies" />

          <div className="flex flex-wrap gap-2 mt-6">
            <Badge variant="outline">Open Source</Badge>
            <Badge variant="secondary">DevOps</Badge>
            <Badge variant="secondary">Monitoring</Badge>
            <Badge variant="secondary">Cloud</Badge>
          </div>
        </CardContent>

        <CardFooter>
          <Button asChild variant="outline">
            <Link
              href="https://github.com/devmonixtechnologies"
              target="_blank"
            >
              View GitHub Organization
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>

    {/* SMALL RIGHT BREATHING SPACE */}
    <div className="hidden lg:block lg:col-span-1" />

  </div>
</section>

        {/* <section className="pt-8 pb-24">
          <MagicCard>
            <Card className="border border-neutral-800 bg-neutral-900/70 backdrop-blur">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  <CardTitle className="text-2xl">
                    Engineering & Open-Source
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground max-w-3xl">
                  We maintain strong engineering standards and actively
                  contribute to open-source projects, focusing on scalability,
                  security, and long-term maintainability.
                </p>

                <GithubOrgInfo org="devmonixtechnologies" />

                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge variant="outline">Open Source</Badge>
                  <Badge variant="secondary">DevOps</Badge>
                  <Badge variant="secondary">Monitoring</Badge>
                  <Badge variant="secondary">Cloud</Badge>
                </div>
              </CardContent>

              <CardFooter>
                <Button asChild variant="outline">
                  <Link
                    href="https://github.com/devmonixtechnologies"
                    target="_blank"
                  >
                    View GitHub Organization
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </MagicCard>
        </section> */}

      </MaxWidthWrapper>
    </div>
  );
};

export default PortfolioPage;



