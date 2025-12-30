'use client';
import React from 'react';
import { useState } from 'react';
import { toast } from 'sonner';
import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full relative">
      
      <MaxWidthWrapper>
        <PageHeader>
          <Link
            href=""
            target="_blank"
            className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          >
            🎉 <span className="mx-2">Connect With Us</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <PageHeaderHeading>Get in Touch with DEVMONIX</PageHeaderHeading>
          <PageHeaderDescription>
            Have a project in mind or a question for our team? We love to hear from you. Fill out the form below or reach out to us directly.
          </PageHeaderDescription>
          <Button asChild>
            <Link href="mailto:team@devmonix.in">
              Email Us
            </Link>
          </Button>
        </PageHeader>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Information</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Feel free to reach out to us through any of the following channels:
                </p>
                <ul className="mt-4 space-y-4 text-muted-foreground md:text-xl">
                  <li>
                    <span className="font-semibold text-foreground">Email:</span> sales@devmonix.in
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Phone:</span> +91 906 140 2804 | +62 217 697 9789
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Head Office:</span> Gorica Park, Podgorica, Montenegro
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Footprints:</span> Bukit Bintang, Kuala Lumpur, Malaysia
                  </li>
              
                  <li>
                    <span className="font-semibold text-foreground">Tech Space:</span> Door.No. 36/267, Infopark, Eranakulam, Kerala, India
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Send Us a Message</h2>
                <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@example.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Subject of your message" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message here" 
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactPage;
