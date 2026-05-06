export type ServiceAreaPage = {
    slug: string;
    countyName: string;
    title: string;
    description: string;
    heroTitle: string;
    heroDescription: string;
    cities: string[];
    services: {
        title: string;
        description: string;
        href: string;
    }[];
};

export const serviceAreaPages: ServiceAreaPage[] = [
    {
        slug: "miami-dade-county",
        countyName: "Miami-Dade County",
        title: "Digital Marketing & Web Design in Miami-Dade County | Mango Media",
        description:
            "Mango Media helps businesses across Miami-Dade County with web design, local SEO, Google Business Profile optimization, branding, and social media setup.",
        heroTitle:
            "Web design, SEO, and online presence support for Miami-Dade businesses.",
        heroDescription:
            "From Miami and Doral to Kendall, Coral Gables, Hialeah, Homestead, and nearby communities, Mango Media helps local businesses modernize their online presence and convert more visitors into leads.",
        cities: [
            "Miami",
            "Kendall",
            "Doral",
            "Coral Gables",
            "Hialeah",
            "Homestead",
            "Tamiami",
            "Fontainebleau",
            "Miami Lakes",
            "Aventura",
        ],
        services: [
            {
                title: "Website Design",
                description:
                    "Modern websites built for trust, speed, SEO, and lead generation.",
                href: "/web-design-miami",
            },
            {
                title: "Local SEO",
                description:
                    "Local search optimization for businesses that want better visibility in their service areas.",
                href: "/local-seo-miami",
            },
            {
                title: "Google Business Profile Optimization",
                description:
                    "Profile improvements that help customers understand your services, location, and credibility.",
                href: "/google-business-profile-optimization-miami",
            },
        ],
    },
    {
        slug: "broward-county",
        countyName: "Broward County",
        title: "Web Design & Local SEO in Broward County | Mango Media",
        description:
            "Mango Media helps Broward County businesses improve their websites, local SEO, online presence, branding, and social media foundation.",
        heroTitle:
            "Digital growth support for Broward County businesses ready to look stronger online.",
        heroDescription:
            "We help businesses across Fort Lauderdale, Hollywood, Pembroke Pines, Miramar, Davie, Plantation, and nearby Broward communities build stronger websites and local visibility.",
        cities: [
            "Fort Lauderdale",
            "Hollywood",
            "Pembroke Pines",
            "Miramar",
            "Davie",
            "Plantation",
            "Sunrise",
            "Weston",
        ],
        services: [
            {
                title: "Website Redesign",
                description:
                    "Upgrade outdated websites into modern, conversion-focused experiences.",
                href: "/website-redesign-miami",
            },
            {
                title: "Local SEO",
                description:
                    "Improve service-page structure, local content, and search visibility.",
                href: "/local-seo-miami",
            },
            {
                title: "Social Media Setup",
                description:
                    "Create a more consistent brand presence across key social platforms.",
                href: "/social-media-management-miami",
            },
        ],
    },
    {
        slug: "monroe-county",
        countyName: "Monroe County",
        title: "Web Design & Local SEO in Monroe County | Mango Media",
        description:
            "Mango Media supports Monroe County businesses with web design, local SEO, Google Business Profile optimization, branding, and online presence setup.",
        heroTitle:
            "Websites and local SEO for Monroe County businesses that depend on visibility.",
        heroDescription:
            "From Key Largo to Key West, Mango Media helps local companies improve their digital presence with modern websites, stronger local SEO, and clearer conversion paths.",
        cities: [
            "Key Largo",
            "Islamorada",
            "Marathon",
            "Big Pine Key",
            "Key West",
        ],
        services: [
            {
                title: "Website Design",
                description:
                    "Modern business websites designed to build trust and support local customer inquiries.",
                href: "/web-design-miami",
            },
            {
                title: "Google Business Profile Optimization",
                description:
                    "Better local profile structure for businesses serving residents, tourists, and nearby communities.",
                href: "/google-business-profile-optimization-miami",
            },
            {
                title: "Local SEO",
                description:
                    "Service and location signals that help search engines better understand your business.",
                href: "/local-seo-miami",
            },
        ],
    },
];