import { Metadata } from "next";
import Link from "next/link";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import Particles from "@/components/ui/particles";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently Asked Questions about DEVMONIX.",
};

const FAQPage = () => {
  return (
    <div className="relative z-10">
      <Particles
          className="absolute inset-0 -z-10"
          quantity={typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 200}
          ease={80}
          size={0.5}
          staticity={30}
          color="#ffffff"
      />
      <PageHeader>
        <PageHeaderHeading>Frequently Asked Questions</PageHeaderHeading>
        <PageHeaderDescription>
          Find answers to common questions about DEVMONIX and our services.
        </PageHeaderDescription>
      </PageHeader>

      <section className="pb-12 pt-6">
        <div className="container">
          <div className="grid gap-8">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold">What services does DEVMONIX offer?</h3>
              <p className="text-muted-foreground">
                DEVMONIX specializes in custom software development, web application development, mobile app development, and IT consulting. We help businesses build robust, scalable, and user-friendly digital solutions.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold">How can I get a quote for my project?</h3>
              <p className="text-muted-foreground">
                You can request a quote by visiting our <Link href="/contact" className="text-primary hover:underline">Contact Us</Link> page and filling out the inquiry form. Please provide as much detail as possible about your project requirements, and our team will get back to you promptly.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold">What is your development process?</h3>
              <p className="text-muted-foreground">
                Our development process typically involves several stages: discovery and planning, design, development, testing, deployment, and ongoing support. We follow agile methodologies to ensure flexibility and transparency throughout the project lifecycle.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold">Do you provide post-launch support?</h3>
              <p className="text-muted-foreground">
                Yes, we offer comprehensive post-launch support and maintenance services to ensure your application runs smoothly and efficiently. This includes bug fixes, performance optimization, and feature updates as needed.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold">What technologies do you work with?</h3>
              <p className="text-muted-foreground">
                We work with a wide range of modern technologies, including but not limited to React, Next.js, Node.js, Python, Django, various cloud platforms (AWS, Azure, Google Cloud), and mobile development frameworks like React Native and Flutter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
