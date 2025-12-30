
'use client';

import React from 'react';
import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Particles from "@/components/ui/particles";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Custom Software Development',
    desc: 'Tailor-made enterprise and business software designed to align perfectly with your workflows, scale reliably, and evolve with your organization.',
    // icon: Code,
  },
  {
    title: 'Web Application Development',
    desc: 'High-performance, secure web platforms including dashboards, portals, and e-commerce solutions built with modern frameworks.',
    // icon: Globe,
  },
  {
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile applications delivering seamless performance, intuitive UX, and real business value.',
    // icon: Smartphone,
  },
  {
    title: 'Cloud Solutions',
    desc: 'Architecture, migration, optimization, and managed services across AWS, Azure, and Google Cloud for scalable infrastructure.',
    // icon: Cloud,
  },
  {
    title: 'DevOps & CI/CD',
    desc: 'Automated pipelines, container orchestration, infrastructure as code, and observability to accelerate delivery with confidence.',
    // icon: GitBranch,
  },
  {
    title: 'AI-Integrated Platforms',
    desc: 'Intelligent applications powered by AI — chatbots, copilots, recommendation systems, analytics, and MLOps pipelines.',
    // icon: Brain,
  },
  {
    title: 'UI / UX Design',
    desc: 'Human-centered design focused on usability, accessibility, and aesthetics to deliver delightful digital experiences.',
    // icon: Palette,
  },
  {
    title: '24/7 Monitoring & Support',
    desc: 'Continuous monitoring and proactive incident response using tools like Grafana, Datadog, New Relic, and cloud-native observability.',
    // icon: Activity,
  },
];

const ServicesPage = () => {
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
            🧩 <span className="mx-2">Our Expertise</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <PageHeaderHeading>Software Services</PageHeaderHeading>

          <PageHeaderDescription>
            We deliver end-to-end software services — from strategy and design
            to engineering, deployment, and long-term support — helping
            businesses build reliable, scalable, and future-ready solutions.
          </PageHeaderDescription>

          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </PageHeader>

        {/* ================= SERVICES GRID ================= */}
        <section className="pt-10 pb-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service, index) => {
              // const Icon = service.icon;
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
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="pb-28">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 backdrop-blur p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Ready to Build Something Exceptional?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Partner with DEVMONIX to transform ideas into production-ready
              software that scales with your business.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </section>

      </MaxWidthWrapper>
    </div>
  );
};

export default ServicesPage;
