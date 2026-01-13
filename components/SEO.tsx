import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSiteData } from '../hooks/useSiteData';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
  schema?: object | object[];
}

const SEO = ({ title, description, image, canonical, noIndex, schema }: SEOProps) => {
  const { data: site } = useSiteData();
  const { seo, settings } = site;
  
  const pageTitle = title 
    ? seo.titleTemplate.replace('%s', title)
    : seo.defaultTitle;
  const pageDescription = description || seo.defaultDescription;
  const pageImage = image || seo.ogImage;
  const pageUrl = canonical || (typeof window !== 'undefined' ? window.location.href : seo.siteUrl);
  
  // Dynamic LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': seo.schema.type,
    name: settings.companyName,
    image: settings.logoUrl,
    telephone: settings.contact.phone,
    email: settings.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: settings.contact.address.street,
      addressLocality: settings.contact.address.city,
      addressRegion: settings.contact.address.state,
      addressCountry: settings.contact.address.country,
    },
    openingHours: settings.openingHours,
    priceRange: settings.priceRange,
    url: seo.siteUrl,
    sameAs: [
      settings.socialMedia.instagram,
      settings.socialMedia.facebook,
      settings.socialMedia.googleMyBusiness,
    ].filter(Boolean),
    ...(seo.schema.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: seo.schema.aggregateRating.ratingValue,
        reviewCount: seo.schema.aggregateRating.reviewCount,
        bestRating: '5',
        worstRating: '1',
      },
    }),
  };

  const schemas: any[] = [localBusinessSchema];
  if (schema) {
    if (Array.isArray(schema)) {
      schemas.push(...schema);
    } else {
      schemas.push(schema);
    }
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageUrl} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      {pageImage && <meta property="og:image" content={pageImage} />}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {pageImage && <meta name="twitter:image" content={pageImage} />}
      
      {/* Theme Color */}
      <meta name="theme-color" content={settings.colors.primary} />
      
      {/* Schema.org */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;