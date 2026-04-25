export type MangoPageHour = {
    day: string;
    time: string;
};

export type MangoPageSocial = {
    label: string;
    href: string;
};

export type MangoPageBusiness = {
    slug: string;

    name: string;
    category: string;
    tagline: string;
    description: string;

    logoInitial: string;
    logoImage: string;
    coverImage: string;

    mainColor: string;
    secondaryColor: string;

    phoneDisplay: string;
    phoneHref: string;
    smsHref: string;
    whatsappHref: string;

    email: string;
    emailHref: string;

    address: string;
    directionsHref: string;

    hours: MangoPageHour[];
    services: string[];
    socials: MangoPageSocial[];

    featuredText: string;
    mapEmbedSrc: string;

    brandUrl?: string;
    poweredByUrl?: string;
};