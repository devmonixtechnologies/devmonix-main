'use client';

import React from 'react';
import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import Link from 'next/link';
// import Particles from "@/components/ui/particles";

const AboutUsPage = () => {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full relative">
      {/* Background particles (optional) */}
      

      <MaxWidthWrapper>

        {/* ================= HEADER ================= */}
        <PageHeader>
          <Link
            href=""
            target="_blank"
            className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          >
            🎉 <span className="mx-2">Introducing DEVMONIX</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <PageHeaderHeading>About DEVMONIX</PageHeaderHeading>

          <PageHeaderDescription>
            At DEVMONIX, we are passionate about crafting innovative software
            solutions that empower businesses and individuals to thrive in the
            digital age. With a focus on cutting-edge technologies and a
            commitment to excellence, we deliver bespoke software development,
            robust web applications, and intuitive mobile experiences.
          </PageHeaderDescription>

          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </PageHeader>

        {/* ================= MISSION & VALUES ================= */}
        <section className="pt-10 md:pt-16 lg:pt-20 pb-6">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

              {/* Mission */}
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Our mission is to transform complex challenges into elegant,
                  user-friendly software solutions. We believe in the power of
                  technology to simplify, connect, and innovate, and we are
                  dedicated to helping our clients achieve their goals through
                  exceptional software.
                </p>
              </div>

              {/* Values */}
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Values
                </h2>
                <ul className="mt-4 space-y-4 text-muted-foreground md:text-xl">
                  <li>
                    <span className="font-semibold text-foreground">
                      Innovation:
                    </span>{' '}
                    We constantly explore new technologies and methodologies to
                    deliver forward-thinking solutions.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">
                      Quality:
                    </span>{' '}
                    We are committed to delivering high-quality, reliable, and
                    scalable software.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">
                      Collaboration:
                    </span>{' '}
                    We work closely with our clients, fostering a partnership
                    approach to achieve shared success.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">
                      Integrity:
                    </span>{' '}
                    We operate with transparency, honesty, and a strong ethical
                    compass.
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ================= EVOLUTION ================= */}
        <section className="px-3 pt-6 pb-20">
          <div
            className="
              max-w-6xl mx-auto
              rounded-3xl
              border border-neutral-800
              bg-neutral-900/70
              backdrop-blur-xl
              shadow-[0_0_60px_rgba(0,0,0,0.8)]
              p-10
            "
          >
            <div className="grid md:grid-cols-2 gap-12">

              {/* Left Content */}
              <div className="space-y-5">
                <h2 className="text-3xl font-bold text-neutral-100">
                  Our evolution
                </h2>

                <p className="text-neutral-400 leading-relaxed">
                  We started as a lean automation crew helping mid-market
                  companies migrate to the cloud. Today, we operate as a
                  strategic partner for enterprises across APAC, South Asia, and
                  EMEA—shipping AI-powered products, resilient platforms, and
                  secure integrations.
                </p>

                <p className="text-neutral-400 leading-relaxed">
                  Every delivery pod pairs discovery-led workshops with sprints
                  focused on production readiness. That means fewer handoffs,
                  faster launches, and systems that teams can own after we roll
                  off.
                </p>
              </div>

              {/* Stats */}
              <dl className="grid grid-cols-2 gap-6 text-center">
                {[
                  {
                    label: 'Uptime',
                    value: '99.9%',
                  },
                  {
                    label: 'Client retention across enterprise programs',
                    value: '92%',
                  },
                  {
                    label: 'Availability of pods across global timezones',
                    value: '24/7',
                  },
                  {
                    label: 'Average time to first production release',
                    value: '8 wks',
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="
                      relative rounded-3xl
                      border border-neutral-800
                      bg-neutral-950/70
                      p-8
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                    "
                  >
                    {/* Subtle glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent blur-2xl" />

                    <dt className="relative text-3xl font-bold text-cyan-400">
                      {stat.value}
                    </dt>
                    <dd className="relative mt-2 text-sm text-neutral-400 leading-relaxed">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>

            </div>
          </div>
        </section>

      </MaxWidthWrapper>
    </div>
  );
};

export default AboutUsPage;
