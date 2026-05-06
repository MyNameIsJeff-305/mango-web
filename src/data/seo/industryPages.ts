export type IndustryPage = {
    slug: string;
    industryName: string;
    title: string;
    description: string;
    eyebrow: string;
    heroTitle: string;
    heroDescription: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
    painPoints: {
        title: string;
        description: string;
    }[];
    solutions: {
        title: string;
        description: string;
    }[];
    services: {
        title: string;
        description: string;
        href: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
};

export const industryPages: IndustryPage[] = [
    {
        slug: "dental-web-design",
        industryName: "Dental Practices",
        title: "Dental Website Design & Local SEO in South Florida | Mango Media",
        description:
            "Mango Media helps dental practices in Miami-Dade, Broward, and Monroe County with modern dental websites, local SEO, Google Business Profile optimization, and patient-focused online presence strategy.",
        eyebrow: "Dental Website Design",
        heroTitle:
            "Dental websites built to help practices look trusted, modern, and ready for new patients.",
        heroDescription:
            "We help dental offices improve their online presence with fast, modern websites, stronger service pages, local SEO structure, Google Business Profile support, and clear calls to action for appointments, calls, and patient inquiries.",
        primaryKeyword: "dental website design Miami",
        secondaryKeywords: [
            "dentist website design Miami",
            "dental SEO Miami",
            "dental marketing South Florida",
            "Google Business Profile for dentists",
            "website redesign for dental practices",
        ],
        painPoints: [
            {
                title: "Outdated websites can reduce patient trust",
                description:
                    "Patients often judge a dental practice before calling. An old, slow, or confusing website can make the office feel less professional, even when the care is excellent.",
            },
            {
                title: "Important services are often hidden",
                description:
                    "Dental implants, emergency dentistry, cosmetic dentistry, cleanings, Invisalign, extractions, and other high-value services need dedicated sections or pages that are easy to find.",
            },
            {
                title: "Local search competition is strong",
                description:
                    "Dental practices compete heavily in local search. A stronger website structure and optimized Google Business Profile can help improve visibility for service and location-based searches.",
            },
        ],
        solutions: [
            {
                title: "Patient-focused website structure",
                description:
                    "We organize your website around the services patients are actively searching for, while keeping the experience simple, mobile-friendly, and conversion-focused.",
            },
            {
                title: "Local SEO foundation",
                description:
                    "We help build stronger title tags, descriptions, headings, internal links, service pages, location signals, and content structure for local search visibility.",
            },
            {
                title: "Clear appointment paths",
                description:
                    "We make it easier for patients to call, request an appointment, use a booking link, message the office, or find the nearest location.",
            },
        ],
        services: [
            {
                title: "Website Design",
                description:
                    "Modern websites for dental offices that need a more professional and patient-friendly online presence.",
                href: "/web-design-miami",
            },
            {
                title: "Local SEO",
                description:
                    "SEO structure for dental services, locations, treatment pages, and local patient searches.",
                href: "/local-seo-miami",
            },
            {
                title: "Google Business Profile Optimization",
                description:
                    "Profile improvements that help patients quickly understand your services, location, hours, reviews, and contact options.",
                href: "/google-business-profile-optimization-miami",
            },
        ],
        faqs: [
            {
                question: "Do dental practices need separate pages for each service?",
                answer:
                    "In most cases, yes. Dedicated service pages help patients understand each treatment and help search engines connect your website with specific dental searches.",
            },
            {
                question: "Can Mango Media redesign an existing dental website?",
                answer:
                    "Yes. We can modernize the design, improve the service structure, strengthen calls to action, and create a stronger local SEO foundation.",
            },
            {
                question: "Do you work with multi-location dental offices?",
                answer:
                    "Yes. Multi-location practices can benefit from dedicated location pages, location-specific contact details, and stronger internal linking between services and offices.",
            },
        ],
    },
    {
        slug: "restaurant-web-design",
        industryName: "Restaurants",
        title: "Restaurant Website Design & Local SEO in South Florida | Mango Media",
        description:
            "Mango Media helps restaurants in Miami-Dade, Broward, and Monroe County improve their websites, local SEO, menus, Google Business Profile presence, and online customer experience.",
        eyebrow: "Restaurant Website Design",
        heroTitle:
            "Restaurant websites that make people hungry, build trust, and drive calls, reservations, and visits.",
        heroDescription:
            "We help restaurants create modern websites with clear menus, strong visuals, mobile-first layouts, location information, online ordering links, reservation paths, and local SEO structure.",
        primaryKeyword: "restaurant website design Miami",
        secondaryKeywords: [
            "restaurant web design Miami",
            "local SEO for restaurants Miami",
            "restaurant website redesign",
            "restaurant marketing South Florida",
            "Google Business Profile for restaurants",
        ],
        painPoints: [
            {
                title: "Customers need quick answers",
                description:
                    "People usually visit a restaurant website to see the menu, location, hours, phone number, photos, ordering options, or reservation links. If that information is hard to find, they may leave.",
            },
            {
                title: "Menus are often outdated or difficult to read",
                description:
                    "PDF menus, blurry images, and outdated pricing can create friction. A cleaner menu experience can help customers decide faster.",
            },
            {
                title: "Visual presentation matters",
                description:
                    "Food, atmosphere, and brand personality need to be presented professionally. A weak website can make a great restaurant feel less appealing online.",
            },
        ],
        solutions: [
            {
                title: "Mobile-first restaurant experience",
                description:
                    "We structure restaurant websites for people browsing on their phones, with fast access to menus, directions, phone calls, reservations, and ordering links.",
            },
            {
                title: "Local discovery support",
                description:
                    "We help align your website, location pages, menu content, Google Business Profile, and local keywords to support better visibility.",
            },
            {
                title: "Stronger food and brand presentation",
                description:
                    "We create a cleaner digital experience that reflects the quality of your food, atmosphere, and customer experience.",
            },
        ],
        services: [
            {
                title: "Website Design",
                description:
                    "Modern restaurant websites built around menus, photos, reservations, calls, and visits.",
                href: "/web-design-miami",
            },
            {
                title: "Local SEO",
                description:
                    "SEO support for restaurant searches, cuisine keywords, neighborhoods, and local service areas.",
                href: "/local-seo-miami",
            },
            {
                title: "Social Media Setup",
                description:
                    "Branded social profiles and visual consistency for restaurants that depend on strong presentation.",
                href: "/social-media-management-miami",
            },
        ],
        faqs: [
            {
                question: "Can you add online ordering or reservation links?",
                answer:
                    "Yes. We can connect your website to existing ordering, reservation, delivery, or booking platforms so customers can take action quickly.",
            },
            {
                question: "Should a restaurant use a PDF menu?",
                answer:
                    "PDF menus can work as a backup, but a mobile-friendly website menu is usually easier for customers and better for SEO.",
            },
            {
                question: "Can you help with restaurant Google Business Profile optimization?",
                answer:
                    "Yes. We can help improve categories, descriptions, service areas, photos, links, and consistency between your website and Google profile.",
            },
        ],
    },
    {
        slug: "med-spa-web-design",
        industryName: "Med Spas & Aesthetic Clinics",
        title: "Med Spa Website Design & Local SEO in South Florida | Mango Media",
        description:
            "Mango Media helps med spas and aesthetic clinics in South Florida with premium website design, local SEO, treatment page structure, branding, and online lead conversion.",
        eyebrow: "Med Spa Website Design",
        heroTitle:
            "Premium websites for med spas and aesthetic clinics that need to look polished, trusted, and conversion-ready.",
        heroDescription:
            "We help aesthetic businesses present treatments clearly, build trust with visitors, improve local SEO structure, and guide potential clients toward consultations, calls, and booking actions.",
        primaryKeyword: "med spa website design Miami",
        secondaryKeywords: [
            "medical spa web design Miami",
            "aesthetic clinic website design",
            "med spa SEO Miami",
            "beauty clinic marketing South Florida",
            "website redesign for med spas",
        ],
        painPoints: [
            {
                title: "Aesthetic services need premium presentation",
                description:
                    "Clients expect beauty, trust, and professionalism. A generic or outdated website can weaken the perceived quality of your treatments.",
            },
            {
                title: "Treatment information is often unclear",
                description:
                    "Services like Botox, fillers, facials, laser treatments, body contouring, and skincare need clear explanations, benefits, and consultation paths.",
            },
            {
                title: "Trust signals are essential",
                description:
                    "Aesthetic clients often look for credentials, safety, before-and-after examples, reviews, technology, and professional presentation before booking.",
            },
        ],
        solutions: [
            {
                title: "Premium visual design",
                description:
                    "We create polished, elegant website layouts that support the high-end experience clients expect from aesthetic brands.",
            },
            {
                title: "Treatment-focused SEO structure",
                description:
                    "We organize your website around your treatments, client questions, local keywords, and conversion goals.",
            },
            {
                title: "Consultation-focused conversion paths",
                description:
                    "We guide visitors toward booking a consultation, calling, sending a message, or learning more about a treatment.",
            },
        ],
        services: [
            {
                title: "Website Design",
                description:
                    "Premium website design for aesthetic clinics, beauty brands, and med spas.",
                href: "/web-design-miami",
            },
            {
                title: "Local SEO",
                description:
                    "SEO structure for treatment pages, service areas, and local aesthetic searches.",
                href: "/local-seo-miami",
            },
            {
                title: "Branding & Social Media Setup",
                description:
                    "Visual consistency across your website, social profiles, highlights, and online presence.",
                href: "/services/branding-social-media",
            },
        ],
        faqs: [
            {
                question: "Do med spas need dedicated treatment pages?",
                answer:
                    "Yes. Dedicated treatment pages help explain each service, support SEO, and give potential clients the information they need before booking.",
            },
            {
                question: "Can you make the website feel more premium?",
                answer:
                    "Yes. We can improve the visual direction, spacing, typography, imagery, calls to action, and overall brand experience.",
            },
            {
                question: "Can the website connect to a booking system?",
                answer:
                    "Yes. We can add links or buttons to your booking platform, consultation form, phone number, or messaging option.",
            },
        ],
    },
    {
        slug: "contractor-web-design",
        industryName: "Contractors & Home Service Businesses",
        title: "Contractor Website Design & Local SEO in South Florida | Mango Media",
        description:
            "Mango Media helps contractors and home service businesses in South Florida improve their websites, local SEO, service pages, quote requests, and online credibility.",
        eyebrow: "Contractor Website Design",
        heroTitle:
            "Websites for contractors that need more trust, better local visibility, and stronger quote requests.",
        heroDescription:
            "We help contractors, remodelers, installers, repair companies, and home service businesses build websites that explain their services clearly, show proof, and turn visitors into calls and quote requests.",
        primaryKeyword: "contractor website design Miami",
        secondaryKeywords: [
            "home services web design Miami",
            "contractor SEO Miami",
            "website design for contractors",
            "local SEO for contractors South Florida",
            "website redesign for home service companies",
        ],
        painPoints: [
            {
                title: "Many contractors rely too heavily on referrals",
                description:
                    "Referrals are powerful, but a stronger website can help capture search traffic, support trust, and convert people who are comparing companies online.",
            },
            {
                title: "Services are often too generic",
                description:
                    "Contractors need clear service pages for installation, repair, maintenance, remodeling, replacement, inspections, or specialty work.",
            },
            {
                title: "Proof matters before the call",
                description:
                    "Photos, reviews, service areas, licenses, warranties, process explanations, and project examples can help customers feel safer requesting a quote.",
            },
        ],
        solutions: [
            {
                title: "Service-based website structure",
                description:
                    "We organize your site around the specific services people are searching for, not just a generic list of what your company does.",
            },
            {
                title: "Quote-focused calls to action",
                description:
                    "We create clear paths for phone calls, quote requests, project inquiries, and consultation forms.",
            },
            {
                title: "Local SEO for service areas",
                description:
                    "We help your website communicate where you work, what you do, and which services matter most to your customers.",
            },
        ],
        services: [
            {
                title: "Website Design",
                description:
                    "Professional contractor websites designed to build trust and generate quote requests.",
                href: "/web-design-miami",
            },
            {
                title: "Website Redesign",
                description:
                    "Modernize an outdated contractor website with better layout, messaging, proof, and CTAs.",
                href: "/website-redesign-miami",
            },
            {
                title: "Local SEO",
                description:
                    "Service-area SEO structure for contractors and home service companies.",
                href: "/local-seo-miami",
            },
        ],
        faqs: [
            {
                question: "Can you create pages for each service we offer?",
                answer:
                    "Yes. Service-specific pages are one of the best ways to improve clarity for customers and support local SEO.",
            },
            {
                question: "Can you include project photos?",
                answer:
                    "Yes. Project photos, before-and-after examples, and galleries can help build trust and show the quality of your work.",
            },
            {
                question: "Can the website help generate quote requests?",
                answer:
                    "Yes. We can structure the website around quote forms, call buttons, service CTAs, and trust-building content.",
            },
        ],
    },
    {
        slug: "law-firm-web-design",
        industryName: "Law Firms",
        title: "Law Firm Website Design & Local SEO in South Florida | Mango Media",
        description:
            "Mango Media helps law firms in South Florida improve their websites, local SEO structure, practice area pages, online credibility, and lead conversion paths.",
        eyebrow: "Law Firm Website Design",
        heroTitle:
            "Professional law firm websites built to communicate trust, clarity, and credibility.",
        heroDescription:
            "We help law firms create modern websites with clear practice areas, attorney credibility, local SEO structure, and simple contact paths for consultations and case inquiries.",
        primaryKeyword: "law firm website design Miami",
        secondaryKeywords: [
            "attorney website design Miami",
            "law firm SEO Miami",
            "website design for lawyers",
            "legal website redesign South Florida",
            "local SEO for law firms",
        ],
        painPoints: [
            {
                title: "Legal websites need immediate credibility",
                description:
                    "Potential clients want to feel that the firm is professional, experienced, and easy to contact. A weak website can reduce confidence quickly.",
            },
            {
                title: "Practice areas need clear structure",
                description:
                    "Immigration, family law, personal injury, real estate, business law, criminal defense, and other practice areas should be easy to understand and navigate.",
            },
            {
                title: "Local competition is intense",
                description:
                    "Law firms compete heavily in local search. A stronger website structure can help support visibility for practice-area and location-based searches.",
            },
        ],
        solutions: [
            {
                title: "Trust-first website design",
                description:
                    "We create professional layouts that highlight practice areas, attorney profiles, client-focused messaging, and clear consultation paths.",
            },
            {
                title: "Practice-area SEO structure",
                description:
                    "We help organize your website around your legal services, local market, and the questions potential clients are searching for.",
            },
            {
                title: "Clear consultation CTAs",
                description:
                    "We make it easier for visitors to call, submit a consultation request, or contact the firm directly.",
            },
        ],
        services: [
            {
                title: "Website Design",
                description:
                    "Professional websites for law firms that need a stronger digital presence.",
                href: "/web-design-miami",
            },
            {
                title: "Local SEO",
                description:
                    "SEO structure for practice areas, service areas, and local legal searches.",
                href: "/local-seo-miami",
            },
            {
                title: "Google Business Profile Optimization",
                description:
                    "Improve consistency between your law firm website and Google Business Profile.",
                href: "/google-business-profile-optimization-miami",
            },
        ],
        faqs: [
            {
                question: "Should each legal practice area have its own page?",
                answer:
                    "Yes. Dedicated practice area pages usually provide a better user experience and stronger SEO foundation than listing every service on one page.",
            },
            {
                question: "Can you redesign an outdated law firm website?",
                answer:
                    "Yes. We can improve layout, messaging, calls to action, mobile experience, and local SEO structure.",
            },
            {
                question: "Can the website include attorney profiles?",
                answer:
                    "Yes. Attorney profiles can help build credibility and give potential clients a better sense of the firm’s experience.",
            },
        ],
    },
    {
        slug: "veterinary-web-design",
        industryName: "Veterinary Clinics",
        title: "Veterinary Website Design & Local SEO in South Florida | Mango Media",
        description:
            "Mango Media helps veterinary clinics in South Florida improve their websites, local SEO structure, service pages, online credibility, and lead conversion paths.",
        eyebrow: "Veterinary Website Design",
        heroTitle:
            "Professional veterinary websites built to communicate trust, clarity, and care.",
        heroDescription:
            "We help veterinary clinics create modern websites with clear service areas, veterinarian profiles, local SEO structure, and simple contact paths for appointments and inquiries.",
        primaryKeyword: "veterinary website design Miami",
        secondaryKeywords: [
            "vet website design Miami",
            "veterinary SEO Miami",
            "website design for vets",
            "local SEO for veterinary clinics South Florida",
            "website redesign for veterinary offices",
        ],
        painPoints: [
            {
                title: "Veterinary websites need to build trust quickly",
                description:
                    "Pet owners want to feel that the clinic is caring, professional, and easy to contact. A weak website can reduce confidence and lead to lost appointments.",
            },
            {
                title: "Services need clear presentation",
                description:
                    "Preventive care, vaccinations, emergency services, surgeries, dental care, and other veterinary services should be easy to understand and navigate.",
            },
            {
                title: "Local competition is strong",
                description:
                    "Veterinary clinics compete heavily in local search. A stronger website structure can help support visibility for service-area and location-based searches.",
            },
        ],
        solutions: [
            {
                title: "Trust-focused website design",
                description:
                    "We create professional layouts that highlight services, veterinarian profiles, pet-focused messaging, and clear appointment paths.",
            },
            {
                title: "Service-area SEO structure",
                description:
                    "We help organize your website around your veterinary services, local market, and the questions pet owners are searching for.",
            },
            {
                title: "Clear appointment CTAs",
                description:
                    "We make it easier for visitors to call, submit an appointment request, or contact the clinic directly.",
            },
        ],
        services: [
            {
                title: "Website Design",
                description:
                    "Professional websites for veterinary clinics that need a stronger digital presence.",
                href: "/web-design-miami",
            },
            {
                title: "Local SEO",
                description:
                    "SEO structure for veterinary services, service areas, and local pet care searches.",
                href: "/local-seo-miami",
            },
            {
                title: "Google Business Profile Optimization",
                description:
                    "Improve consistency between your veterinary website and Google Business Profile.",
                href: "/google-business-profile-optimization-miami",
            },
        ],
        faqs: [
            {
                question: "Should each veterinary service have its own page?",
                answer:
                    "Yes. Dedicated service pages usually provide a better user experience and stronger SEO foundation than listing every service on one page.",
            },
            {
                question: "Can you redesign an outdated veterinary website?",
                answer:
                    "Yes. We can improve layout, messaging, calls to action, mobile experience, and local SEO structure.",
            },
            {
                question: "Can the website include veterinarian profiles?",
                answer:
                    "Yes. Veterinarian profiles can help build credibility and give potential clients a better sense of the clinic’s experience and care philosophy.",
            },
        ],
    }
];