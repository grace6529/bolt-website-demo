import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'prettysimpl - Business Automation & Low-Code Solutions',
  description = 'We help businesses grow bigger, stronger and more agile through low-code process automation and systems integration. 300+ happy clients, 5-star rated team.',
  keywords = 'business automation, low-code development, systems integration, process automation, fractional services, Airtable, Make, Softr, Smartsuite, Noloco',
  canonical,
  ogTitle,
  ogDescription,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false
}) => {
  const siteUrl = 'https://prettysimpl.com'; // Update with actual domain
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="prettysimpl" />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="prettysimpl" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "prettysimpl",
          "description": description,
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "foundingDate": "2015",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "ZA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "hello@prettysimpl.com"
          },
          "sameAs": [
            "https://www.linkedin.com/company/prettysim-pl/",
            "https://www.facebook.com/itsprettysimpl",
            "https://www.instagram.com/prettysim.pl/",
            "https://www.youtube.com/@itsprettysimpl"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;