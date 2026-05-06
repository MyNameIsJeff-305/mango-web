export type SeoLandingPage = {
    slug: string;
    title: string;
    description: string;
    eyebrow: string;
    heroTitle: string;
    heroDescription: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
    serviceName: string;
    locationName: string;
    ctaLabel: string;
    ctaHref: string;
    sections: {
        title: string;
        content: string;
    }[];
    benefits: {
        title: string;
        description: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
};

export const seoLandingPages: SeoLandingPage[] = [
    {
        slug: "web-design-miami",
        title: "Web Design Miami | Websites for Local Business Growth",
        description:
            "Mango Media provides conversion-focused web design in Miami for local businesses that want a modern website, stronger SEO foundation, and more qualified leads.",
        eyebrow: "Web Design in Miami",
        heroTitle: "Web design built to help Miami businesses get found and get chosen.",
        heroDescription:
            "We design fast, modern, SEO-ready websites for local businesses across Miami-Dade, Broward, and Monroe County — built to turn visitors into calls, messages, and booked appointments.",
        primaryKeyword: "web design Miami",
        secondaryKeywords: [
            "website design Miami",
            "Miami web design company",
            "local business websites Miami",
            "website redesign Miami",
        ],
        serviceName: "Website Design",
        locationName: "Miami",
        ctaLabel: "Request a Website Review",
        ctaHref: "/contact",
        sections: [
            {
                title: "Modern websites for businesses that need real ROI",
                content:
                    "A good-looking website is not enough. Your website should explain what you do, build trust quickly, guide visitors toward action, and support your visibility in local search results.",
            },
            {
                title: "Built for local search and lead conversion",
                content:
                    "Every Mango Media website is planned around clear messaging, service structure, mobile experience, calls to action, page speed, local SEO foundations, and the customer journey.",
            },
        ],
        benefits: [
            {
                title: "Better first impression",
                description:
                    "Replace an outdated or confusing website with a polished digital presence that makes your business look trustworthy and active.",
            },
            {
                title: "Stronger local SEO structure",
                description:
                    "Create pages, headings, metadata, and internal links that help Google understand your services and service areas.",
            },
            {
                title: "More calls and inquiries",
                description:
                    "Guide visitors toward phone calls, contact forms, WhatsApp messages, booking links, or quote requests.",
            },
        ],
        faqs: [
            {
                question: "Do you design websites for businesses outside Miami?",
                answer:
                    "Yes. Mango Media works with businesses across Miami-Dade, Broward, and Monroe County, including companies that serve customers throughout South Florida.",
            },
            {
                question: "Can you redesign an outdated website?",
                answer:
                    "Yes. We can modernize the structure, visuals, messaging, calls to action, and SEO foundation of an outdated website while keeping the business goals clear.",
            },
            {
                question: "Do your websites include SEO?",
                answer:
                    "Our websites are built with SEO foundations such as optimized titles, descriptions, headings, internal links, fast performance, mobile responsiveness, and local search structure.",
            },
        ],
    },

    {
        slug: "local-seo-miami",
        title: "Local SEO Miami | Get Found by More Local Customers",
        description:
            "Mango Media helps Miami businesses improve local visibility with local SEO strategy, service pages, Google Business Profile optimization, and stronger search structure.",
        eyebrow: "Local SEO in Miami",
        heroTitle: "Local SEO that helps your business show up where customers are searching.",
        heroDescription:
            "We help local businesses improve their online visibility with SEO-focused content, service pages, local landing pages, Google Business Profile improvements, and conversion-focused website structure.",
        primaryKeyword: "local SEO Miami",
        secondaryKeywords: [
            "Miami local SEO services",
            "SEO for local businesses Miami",
            "Google Business Profile optimization Miami",
            "local search optimization Miami",
        ],
        serviceName: "Local SEO",
        locationName: "Miami",
        ctaLabel: "Request a Local SEO Review",
        ctaHref: "/contact",
        sections: [
            {
                title: "Local SEO starts with clarity",
                content:
                    "Google needs to clearly understand what services you offer, where you offer them, and why your business is relevant to local customers. We help organize your website and online presence around those signals.",
            },
            {
                title: "Your website and Google profile should work together",
                content:
                    "A strong local SEO strategy connects your website pages, Google Business Profile, service descriptions, reviews, internal links, and location signals into one consistent system.",
            },
        ],
        benefits: [
            {
                title: "More local visibility",
                description:
                    "Improve how your business appears for searches related to your services, city, county, and nearby areas.",
            },
            {
                title: "Better service-page structure",
                description:
                    "Create focused pages for your most important services so Google and customers can understand your offers faster.",
            },
            {
                title: "Stronger Google profile support",
                description:
                    "Align your website with your Google Business Profile so customers see a consistent and trustworthy business presence.",
            },
        ],
        faqs: [
            {
                question: "How long does local SEO take?",
                answer:
                    "Local SEO is usually a long-term growth strategy. Some technical and content improvements can help quickly, but stronger rankings usually require consistent optimization over time.",
            },
            {
                question: "Do I need a website for local SEO?",
                answer:
                    "A Google Business Profile is important, but a strong website gives your business more control, more content depth, and more opportunities to rank for specific services and locations.",
            },
            {
                question: "Can you help if my business already has a website?",
                answer:
                    "Yes. We can review the current structure, identify SEO gaps, improve service pages, update metadata, strengthen calls to action, and plan new landing pages.",
            },
        ],
    },
];