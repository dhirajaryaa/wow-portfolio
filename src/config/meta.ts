import { Metadata } from "next";

export interface PageMeta {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    twitterCard?: 'summary' | 'summary_large_image';
};

export const siteMeta = {
    title: "Dhiraj Arya – A self-taught developer",
    description: "Dhiraj Arya is a self-taught full-stack web developer specializing in Next.js, MERN stack, and modern SaaS applications. I build fast, scalable, and user-focused web products.",
    url: process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000',
    ogImage: '/og/home.webp',
    keywords: [
        "Dhiraj Arya",
        "Full Stack Developer",
        "Next.js Developer",
        "MERN Stack Developer",
        "React Developer",
        "Web Developer Portfolio",
        "SaaS Developer",
        "JavaScript Developer",
    ],
    author: {
        name: "Dhiraj Arya",
        twitter: 'dhirajarya01',
        github: 'dhirajaryaa',
        linkedin: 'dhirajarya01',
        youtube: 'dhirajaryaa',
        "dev.to": 'dhirajarya01',
        email: 'dhirajkum4580@gmail.com',
    },
};


export const pageMetadata: Record<string, PageMeta> = {
    // Home page
    '/': {
        title: siteMeta.title,
        description: siteMeta.description,
        keywords: [
            'portfolio',
            'developer',
            'full-stack',
            'web development',
            'projects',
        ],
        ogImage: '/og/home.webp',
        twitterCard: 'summary_large_image',
    },
    // Gears page
    '/gears': {
        title: 'Gears - My Setup & Tools',
        description:
            'Explore the PC setup, gadgets, and web extensions I use daily as a full-stack developer to build fast, modern web applications.',
        keywords: [
            'setup',
            'tools',
            'devices',
            'software',
            'productivity',
            'development environment',
        ],
        ogImage: '/og/gears.png',
        twitterCard: 'summary_large_image',
    },
    // Setup page
    '/setup': {
        title: 'Setup - Dev Environment',
        description:
            'My VSCode configuration, terminal setup, and developer environment preferences.',
        keywords: [
            'setup',
            'vscode',
            'developer environment',
            'code editor',
            'terminal',
        ],
        ogImage: '/og/gears.png',
        twitterCard: 'summary_large_image',
    },
    // Contact page
    '/contact': {
        title: 'Contact - Get in Touch',
        description:
            "Get in touch with me for collaborations, projects, or opportunities. I'd love to hear from you!",
        keywords: ['contact', 'hire', 'collaboration', 'freelance', 'developer'],
        ogImage: '/og/contact.webp',
        twitterCard: 'summary',
    },
    //blog page 
    '/blog': {
        title: 'Blog – Articles & Learnings',
        description:
            'Technical articles, learnings, and insights on web development, Next.js, MERN stack, and building real-world products.',
        keywords: [
            'blog',
            'web development blog',
            'next.js blog',
            'mern tutorials',
            'developer articles',
        ],
        ogImage: '/og/blog.webp',
        twitterCard: 'summary_large_image',
    },
    // blog + slug page
    '/blog/[slug]': {
        title: 'Blog Post',
        description:
            'Read in-depth articles and practical insights on modern web development.',
        keywords: ['blog', 'article', 'web development'],
        ogImage: '/og/blog.webp',
        twitterCard: 'summary_large_image',
    },
    // projects [pow]
    '/pow': {
        title: 'Proof of Work – Real World Work',
        description:
            'A collection of real-world projects built using Next.js, MERN stack, and modern web technologies.',
        keywords: [
            'projects',
            'portfolio projects',
            'next.js projects',
            'mern stack projects',
            'web developer work',
        ],
        ogImage: '/og/pow.webp',
        twitterCard: 'summary_large_image',
    },
    // pow + slug 
    '/projects/[slug]': {
        title: 'Project Case Study',
        description:
            'Detailed case study of a real-world project including features, tech stack, and learnings.',
        keywords: ['project', 'case study', 'web app'],
        ogImage: '/og/pow.webp',
        twitterCard: 'summary_large_image',
    },
    // not found 
    '/invalid': {
        title: '404 – Page Not Found',
        description:
            'The page you are looking for does not exist or has been moved.',
        keywords: ['404', 'page not found', 'error', 'not found'],
        ogImage: '/og/404.webp',
        twitterCard: 'summary_large_image',
    },

};
 

export const getMetaData = (pathname: string): Metadata => {
    const pageMeta = pageMetadata[pathname] ?? pageMetadata["/"];
    // meta data return 
    return {
       metadataBase: new URL(siteMeta.url),
        title: pageMeta.title,
        description: pageMeta.description,
        keywords: pageMeta.keywords?.join(', '),
        authors: [{ name: siteMeta.author.name }],
        creator: siteMeta.author.name,
        openGraph: {
            type: 'website',
            url: `${siteMeta.url}${pathname}`,
            title: pageMeta.title,
            description: pageMeta.description,
            siteName: siteMeta.title,
            images: [
                {
                    url: pageMeta.ogImage || siteMeta.ogImage,
                    width: 1200,
                    height: 630,
                    alt: pageMeta.title,
                },
            ],
        },
        twitter: {
            card: pageMeta.twitterCard || 'summary_large_image',
            title: pageMeta.title,
            description: pageMeta.description,
            creator: siteMeta.author.twitter,
            images: [pageMeta.ogImage || siteMeta.ogImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        alternates: {
            canonical: `${siteMeta.url}${pathname}`,
        },
    };
} 