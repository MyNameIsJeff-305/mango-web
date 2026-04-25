import type { MangoPageBusiness } from "../../../types/mangoPage";

export const demoCafe: MangoPageBusiness = {
    slug: "demo-cafe",

    name: "Mango Café & Bakery",
    category: "Local Coffee Shop",
    tagline: "Fresh coffee, pastries, and cozy moments in Miami.",
    description:
        "Mango Café & Bakery is a neighborhood café serving handcrafted coffee, fresh pastries, breakfast bites, and a warm space to meet, work, and relax.",

    logoInitial: "M",
    logoImage: "/images/mango-pages/demo-cafe/logo.webp",
    coverImage: "/images/mango-pages/demo-cafe/cover.webp",

    mainColor: "db4177",
    secondaryColor: "f1b025",

    phoneDisplay: "(305) 555-0198",
    phoneHref: "tel:+13055550198",
    smsHref: "sms:+13055550198",
    whatsappHref: "https://wa.me/13055550198",

    email: "hello@mangocafebakery.com",
    emailHref: "mailto:hello@mangocafebakery.com",

    address: "123 Mango Ave, Miami, FL 33135",
    directionsHref:
        "https://www.google.com/maps/search/?api=1&query=123+Mango+Ave+Miami+FL+33135",

    hours: [
        {
            day: "Monday - Friday",
            time: "7:00 AM - 6:00 PM",
        },
        {
            day: "Saturday",
            time: "8:00 AM - 5:00 PM",
        },
        {
            day: "Sunday",
            time: "8:00 AM - 2:00 PM",
        },
    ],

    services: [
        "Specialty Coffee",
        "Fresh Pastries",
        "Breakfast Bites",
        "Catering Orders",
        "Online Orders",
        "Private Events",
    ],

    socials: [
        {
            label: "Instagram",
            href: "https://instagram.com/",
        },
        {
            label: "Facebook",
            href: "https://facebook.com/",
        },
        {
            label: "TikTok",
            href: "https://tiktok.com/",
        },
        {
            label: "Google Reviews",
            href: "https://google.com/",
        },
    ],

    featuredText:
        "Ask about our weekly pastry box and coffee catering options for offices and local events.",

    mapEmbedSrc:
        "https://www.google.com/maps?q=Miami%2C%20FL&output=embed",

    brandUrl: "https://mangomedia305.com",
    poweredByUrl: "https://mangomedia305.com",
};