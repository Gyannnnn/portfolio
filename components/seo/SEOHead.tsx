import { Metadata } from 'next';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  noIndex?: boolean;
  noFollow?: boolean;
  structuredData?: object;
}

const defaultSEO: SEOHeadProps = {
  title: 'Gyanranjan Patra | VSSUT Burla Developer Portfolio',
  description: 'Portfolio of Gyanranjan Patra, a skilled developer and VSSUT Burla graduate. Showcasing projects, skills, and experience in full-stack development.',
  keywords: [
    'Gyanranjan Patra',
    'Gyanaranjan Patra VSSUT',
    'VSSUT Burla',
    'portfolio',
    'developer',
    'software engineer',
    'full-stack developer',
    'React',
    'Next.js',
    'Node.js',
    'MongoDB',
    'TypeScript',
    'JavaScript'
  ],
  ogType: 'website',
  twitterCard: 'summary_large_image',
  noIndex: false,
  noFollow: false,
};

export function generateMetadata(seoProps: SEOHeadProps = {}): Metadata {
  const seo = { ...defaultSEO, ...seoProps };
  
  const title = seo.title || defaultSEO.title;
  const description = seo.description || defaultSEO.description;
  const keywords = seo.keywords || defaultSEO.keywords;
  const canonicalUrl = seo.canonicalUrl;
  const ogImage = seo.ogImage || '/profile/og.png';
  const ogType = seo.ogType || 'website';
  const twitterCard = seo.twitterCard || 'summary_large_image';

  return {
    title,
    description,
    keywords: keywords?.join(', ') || '',
    authors: [{ name: 'Gyanranjan Patra' }],
    creator: 'Gyanranjan Patra',
    publisher: 'Gyanranjan Patra',
    robots: {
      index: !seo.noIndex,
      follow: !seo.noFollow,
      googleBot: {
        index: !seo.noIndex,
        follow: !seo.noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: canonicalUrl,
      title,
      description,
      siteName: 'Gyanranjan Patra Portfolio',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      images: [ogImage],
      creator: '@gyanranjanpatra',
      site: '@gyanranjanpatra',
    },
    alternates: {
      canonical: canonicalUrl,
    },
    category: 'technology',
    classification: 'Portfolio',
    other: {
      'google-site-verification': 'your-google-verification-code', // Replace with actual verification code
    },
  };
}

export function generateStructuredData(data: object) {
  return {
    '@context': 'https://schema.org',
    ...data,
  };
}

export function generatePersonStructuredData() {
  return generateStructuredData({
    '@type': 'Person',
    name: 'Gyanranjan Patra',
    alternateName: 'Gyanaranjan Patra',
    jobTitle: 'Full-Stack Developer',
    description: 'Skilled developer and VSSUT Burla graduate specializing in full-stack development',
    url: 'https://your-portfolio-domain.com', // Replace with actual domain
    sameAs: [
      'https://github.com/gyanranjanpatra',
      'https://linkedin.com/in/gyanranjanpatra',
      'https://twitter.com/gyanranjanpatra',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Veer Surendra Sai University of Technology, Burla',
      alternateName: 'VSSUT Burla',
    },
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
      'PostgreSQL',
      'Full-Stack Development',
      'Web Development',
    ],
  });
}

export function generateProjectStructuredData(project: {
  name: string;
  description: string;
  url: string;
  technologies: string[];
  githubUrl?: string;
  imageUrl?: string;
}) {
  return generateStructuredData({
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    url: project.url,
    creator: {
      '@type': 'Person',
      name: 'Gyanranjan Patra',
    },
    keywords: project.technologies.join(', '),
    programmingLanguage: project.technologies,
    codeRepository: project.githubUrl,
    image: project.imageUrl,
    dateCreated: new Date().toISOString(),
    inLanguage: 'en',
  });
}

export function generatePortfolioStructuredData() {
  return generateStructuredData({
    '@type': 'CollectionPage',
    name: 'Gyanranjan Patra Portfolio',
    description: 'Portfolio showcasing projects, skills, and experience of Gyanranjan Patra',
    url: 'https://your-portfolio-domain.com', // Replace with actual domain
    creator: {
      '@type': 'Person',
      name: 'Gyanranjan Patra',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Projects',
      description: 'Collection of software development projects',
    },
  });
}
