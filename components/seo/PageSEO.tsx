'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { pageMetadata } from '../../utils/seo/page-metadata';

export function PageSEO() {
  const pathname = usePathname();
  
  // Map pathname to metadata key
  const getPageKey = (path: string): keyof typeof pageMetadata => {
    if (path === '/') return 'home';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/services')) return 'services';
    if (path.startsWith('/portfolio')) return 'portfolio';
    if (path.startsWith('/contact')) return 'contact';
    if (path.startsWith('/careers')) return 'careers';
    if (path.startsWith('/faq')) return 'faq';
    if (path.startsWith('/ai-chat')) return 'aiChat';
    return 'home';
  };

  const pageKey = getPageKey(pathname);
  const metadata = pageMetadata[pageKey];
  const baseUrl = process.env.NEXT_PUBLIC_APP_DOMAIN 
    ? `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}` 
    : 'https://devmonix.io';
  const fullUrl = `${baseUrl}${metadata.url}`;
  const imageUrl = `${baseUrl}/Devmonix-drk.png`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{metadata.title}</title>
      <meta name="title" content={metadata.title} />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="DevMonix Technologies" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={metadata.title} />
      <meta property="twitter:description" content={metadata.description} />
      <meta property="twitter:image" content={imageUrl} />
      <meta property="twitter:creator" content="@devmonixtech" />
      <meta property="twitter:site" content="@devmonixtech" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="DevMonix Technologies" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
