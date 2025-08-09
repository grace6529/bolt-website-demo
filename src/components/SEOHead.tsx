import React, { useEffect } from 'react';

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
  const siteUrl = 'https://prettysimpl.com';
  
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Set or update meta tags
    const setMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    
    // Robots
    if (noIndex) {
      setMetaTag('robots', 'noindex, nofollow');
    }
    
    // Open Graph
    setMetaTag('og:title', ogTitle || title, true);
    setMetaTag('og:description', ogDescription || description, true);
    setMetaTag('og:image', `${siteUrl}${ogImage}`, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:site_name', 'prettysimpl', true);
    
    if (canonical) {
      setMetaTag('og:url', `${siteUrl}${canonical}`, true);
    }
    
    // Twitter Card
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:title', ogTitle || title);
    setMetaTag('twitter:description', ogDescription || description);
    setMetaTag('twitter:image', `${siteUrl}${ogImage}`);
    
    // Canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', `${siteUrl}${canonical}`);
    }
    
    // Structured data
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify({
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
    });
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, twitterCard, noIndex]);

  return null;
};

export default SEOHead;