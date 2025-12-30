// Structured Data (JSON-LD) for SEO
// https://schema.org/

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DevMonix Technologies",
  "alternateName": "DevMonix",
  "url": "https://devmonix.io",
  "logo": "https://devmonix.io/Devmonix-drk.png",
  "description": "DevMonix Technologies delivers cutting-edge enterprise software development, AI platforms, cloud modernization, and DevOps services.",
  "email": "sales@devmonix.io",
  "telephone": "+91-906-140-2804",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Podgorica",
      "addressCountry": "Montenegro"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "addressCountry": "India"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Kuala Lumpur",
      "addressCountry": "Malaysia"
    }
  ],
  "sameAs": [
    "https://twitter.com/devmonixtech",
    "https://linkedin.com/company/devmonix",
    "https://github.com/devmonix"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "10-50"
  },
  "areaServed": "Worldwide",
  "serviceType": [
    "Enterprise Software Development",
    "AI Solutions",
    "Cloud Modernization",
    "DevOps Services",
    "Product Engineering",
    "Custom Software Development"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "DevMonix Technologies",
  "url": "https://devmonix.io",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://devmonix.io/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "DevMonix Technologies",
  "image": "https://devmonix.io/Devmonix-drk.png",
  "url": "https://devmonix.io",
  "telephone": "+91-906-140-2804",
  "email": "sales@devmonix.io",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kochi",
    "addressRegion": "Kerala",
    "addressCountry": "India"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 9.9312,
    "longitude": 76.2673
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "DevMonix Technologies",
    "url": "https://devmonix.io"
  },
  "areaServed": "Worldwide",
  "url": service.url,
  ...(service.image && { "image": service.image })
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const jobPostingSchema = (job: {
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType?: string;
  experienceRequirements?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": job.title,
  "description": job.description,
  "datePosted": job.datePosted,
  "validThrough": job.validThrough || new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
  "employmentType": job.employmentType || "FULL_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "DevMonix Technologies",
    "sameAs": "https://devmonix.io",
    "logo": "https://devmonix.io/Devmonix-drk.png"
  },
  "jobLocation": [
    {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "addressCountry": "India"
      }
    }
  ],
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": 300000,
      "maxValue": 1200000,
      "unitText": "YEAR"
    }
  },
  "experienceRequirements": {
    "@type": "OccupationalExperienceRequirements",
    "monthsOfExperience": job.experienceRequirements || "12"
  }
});
