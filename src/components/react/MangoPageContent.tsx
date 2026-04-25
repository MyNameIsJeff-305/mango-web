import type React from "react";
import type { MangoPageBusiness } from "../../types/mangoPage";
import EmailIcon from "./icons/EmailIcon";
import PhoneIcon from "./icons/PhoneIcon";
import SMSIcon from "./icons/SMSIcon";
import WhatsappIcon from "./icons/WhatsappIcon";

type MangoPageViewMode = "auto" | "mobile" | "tablet" | "desktop";

type MangoPageContentProps = {
  business: MangoPageBusiness;
  viewMode?: MangoPageViewMode;

  /**
   * Kept for backwards compatibility.
   * Prefer using viewMode now.
   */
  isDesktop?: boolean;
  isTablet?: boolean;

  onAction?: (action: string) => void;
};

export default function MangoPageContent({
  business,
  viewMode,
  isDesktop = false,
  isTablet = false,
  onAction,
}: MangoPageContentProps) {
  const resolvedViewMode: MangoPageViewMode =
    viewMode ?? (isDesktop ? "desktop" : isTablet ? "tablet" : "auto");

  const isAuto = resolvedViewMode === "auto";
  const isForcedDesktop = resolvedViewMode === "desktop";
  const isForcedTablet = resolvedViewMode === "tablet";

  const contactActions = [
    {
      label: "WhatsApp",
      text: "Chat on WhatsApp",
      href: business.whatsappHref,
      Icon: WhatsappIcon,
    },
    {
      label: "Email",
      text: "Send an Email",
      href: business.emailHref,
      Icon: EmailIcon,
    },
    {
      label: "Text",
      text: "Send a Text",
      href: business.smsHref,
      Icon: SMSIcon,
    },
    {
      label: "Phone",
      text: "Call Now",
      href: business.phoneHref,
      Icon: PhoneIcon,
    },
  ];

  const handleAction = (action: string) => {
    onAction?.(action);
  };

  const formatHexColor = (color: string) => {
    if (!color) return "#da3c78";
    return color.startsWith("#") ? color : `#${color}`;
  };

  const mainColor = formatHexColor(business.mainColor);
  const secondaryColor = formatHexColor(business.secondaryColor);

  const rootLayoutClass = isAuto
    ? "grid-cols-1 lg:h-full lg:grid-cols-[0.9fr_1.1fr]"
    : isForcedDesktop
      ? "h-full grid-cols-[0.9fr_1.1fr]"
      : "grid-cols-1";

  const heroClass = isAuto
    ? "relative overflow-hidden bg-[#0f1115] p-6 text-white sm:p-8 lg:h-full lg:p-8"
    : [
        "relative overflow-hidden bg-[#0f1115] p-6 text-white",
        isForcedDesktop ? "h-full p-8" : "",
        isForcedTablet ? "p-8" : "",
      ].join(" ");

  const heroInnerClass = isAuto
    ? "relative z-10 flex h-full flex-col justify-between gap-8 lg:justify-center"
    : [
        "relative z-10 flex flex-col gap-8",
        isForcedDesktop ? "h-full justify-center" : "h-full justify-between",
      ].join(" ");

  const titleClass = isAuto
    ? "mt-3 font-nunito text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-5xl"
    : [
        "mt-3 font-nunito font-extrabold leading-tight text-white",
        isForcedDesktop ? "text-5xl" : isForcedTablet ? "text-5xl" : "text-4xl",
      ].join(" ");

  const contentClass = isAuto
    ? "space-y-5 p-5 sm:p-6 lg:h-full lg:overflow-y-auto lg:p-6"
    : [
        "space-y-5 p-5",
        isForcedDesktop ? "h-full overflow-y-auto p-6" : "",
        isForcedTablet ? "p-6" : "",
      ].join(" ");

  const contactGridClass = isAuto
    ? "grid gap-3 grid-cols-2 sm:grid-cols-4"
    : [
        "grid gap-3",
        isForcedDesktop || isForcedTablet ? "grid-cols-4" : "grid-cols-2",
      ].join(" ");

  const servicesGridClass = isAuto
    ? "mt-4 grid gap-3 grid-cols-2 md:grid-cols-3"
    : [
        "mt-4 grid gap-3",
        isForcedDesktop || isForcedTablet ? "grid-cols-3" : "grid-cols-2",
      ].join(" ");

  const hoursGridClass = isAuto
    ? "grid gap-4 md:grid-cols-[1fr_auto]"
    : [
        "grid gap-4",
        isForcedDesktop || isForcedTablet ? "grid-cols-[1fr_auto]" : "",
      ].join(" ");

  const socialsGridClass = isAuto
    ? "mt-4 grid gap-3 grid-cols-2 sm:grid-cols-4"
    : [
        "mt-4 grid gap-3",
        isForcedDesktop || isForcedTablet ? "grid-cols-4" : "grid-cols-2",
      ].join(" ");

  return (
    <div
      style={
        {
          "--mango-page-main": mainColor,
          "--mango-page-secondary": secondaryColor,
        } as React.CSSProperties
      }
      className={["grid min-h-full gap-0", rootLayoutClass].join(" ")}
    >
      {/* Hero */}
      <div className={heroClass}>
        {business.coverImage ? (
          <img
            src={business.coverImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#da3c78_0%,#fecd4c_52%,#019b90_100%)]" />
        )}

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--mango-page-secondary),transparent_42%),radial-gradient(circle_at_bottom_left,var(--mango-page-main),transparent_48%)] opacity-25" />

        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-16 left-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

        <div className={heroInnerClass}>
          <div>
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/20 bg-white p-2 shadow-soft backdrop-blur-md">
              {business.logoImage ? (
                <img
                  src={business.logoImage}
                  alt={`${business.name} logo`}
                  className="h-full w-full object-contain"
                  loading="eager"
                />
              ) : (
                <span className="font-nunito text-3xl font-black text-[#0f1115]">
                  {business.logoInitial}
                </span>
              )}
            </div>

            <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-white/75">
              {business.category}
            </p>

            <h1 className={titleClass}>{business.name}</h1>

            <p className="mt-4 max-w-md text-base leading-7 text-white/90">
              {business.tagline}
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={business.phoneHref}
                onClick={() => handleAction("Call Now")}
                className="rounded-full bg-[var(--mango-page-secondary)] px-4 py-3.5 text-center font-nunito text-sm font-extrabold text-[#0f1115] shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Call Now
              </a>

              <a
                href={business.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleAction("Directions")}
                className="rounded-full bg-[var(--mango-page-main)] px-4 py-3.5 text-center font-nunito text-sm font-extrabold text-white shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={contentClass}>
        {/* Contact grid */}
        <section className={contactGridClass}>
          {contactActions.map(({ label, text, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "WhatsApp" ? "_blank" : undefined}
              rel={label === "WhatsApp" ? "noopener noreferrer" : undefined}
              onClick={() => handleAction(label)}
              className="rounded-[1.25rem] border border-subtle bg-[rgb(var(--color-surface-soft))] p-4 text-left shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--mango-page-main)] text-white shadow-soft">
                <Icon />
              </span>

              <p className="truncate font-nunito text-base font-extrabold text-[rgb(var(--color-text))]">
                {text}
              </p>
            </a>
          ))}
        </section>

        {/* About */}
        <section className="rounded-[1.5rem] border border-subtle bg-[rgb(var(--color-surface-soft))] p-5">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--mango-page-main)]">
            About
          </p>

          <h2 className="mt-3 font-nunito text-2xl font-extrabold text-[rgb(var(--color-text))]">
            Welcome to {business.name}
          </h2>

          <p className="mt-3 text-sm leading-7 text-[rgb(var(--color-text-secondary))]">
            {business.description}
          </p>
        </section>

        {/* Featured */}
        <section className="relative overflow-hidden rounded-[1.5rem] border border-subtle bg-[rgb(var(--color-surface))] p-5 shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--mango-page-secondary),transparent_42%),radial-gradient(circle_at_bottom_left,var(--mango-page-main),transparent_45%)] opacity-20" />

          <div className="relative z-10">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[rgb(var(--color-text-secondary))]">
              Featured
            </p>

            <p className="mt-3 font-nunito text-xl font-extrabold leading-7 text-[rgb(var(--color-text))]">
              {business.featuredText}
            </p>
          </div>
        </section>

        {/* Services */}
        <section>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[rgb(var(--color-text-secondary))]">
            Services
          </p>

          <h2 className="mt-2 font-nunito text-2xl font-extrabold text-[rgb(var(--color-text))]">
            What we offer
          </h2>

          <div className={servicesGridClass}>
            {business.services.map((service) => (
              <div
                key={service}
                className="rounded-[1.25rem] border border-subtle bg-[rgb(var(--color-surface))] p-4 shadow-soft"
              >
                <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--mango-page-main),var(--mango-page-secondary))] text-xs font-black text-white">
                  ✓
                </span>

                <p className="font-nunito text-base font-extrabold leading-6 text-[rgb(var(--color-text))]">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Hours + QR */}
        <section className={hoursGridClass}>
          <div className="rounded-[1.5rem] border border-subtle bg-[rgb(var(--color-surface-soft))] p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[rgb(var(--color-text-secondary))]">
              Hours
            </p>

            <h2 className="mt-2 font-nunito text-2xl font-extrabold text-[rgb(var(--color-text))]">
              Business hours
            </h2>

            <div className="mt-4 space-y-3">
              {business.hours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between gap-4 border-b border-[rgb(var(--color-border)/0.12)] pb-3 last:border-b-0 last:pb-0"
                >
                  <p className="text-sm font-bold text-[rgb(var(--color-text))]">
                    {item.day}
                  </p>
                  <p className="text-right text-sm font-semibold text-[rgb(var(--color-text-secondary))]">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-subtle bg-[rgb(var(--color-surface))] p-5 shadow-soft">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[1.25rem] bg-white p-3 shadow-soft">
              <div className="grid h-full w-full grid-cols-5 grid-rows-5 gap-1">
                {Array.from({ length: 25 }).map((_, index) => (
                  <span
                    key={index}
                    className={[
                      "rounded-sm",
                      [
                        0, 1, 3, 4, 5, 7, 9, 11, 12, 13, 15, 17, 19, 20, 21, 23,
                        24,
                      ].includes(index)
                        ? "bg-[#0f1115]"
                        : "bg-slate-200",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>

            <p className="mt-4 text-center font-nunito text-sm font-extrabold text-[rgb(var(--color-text))]">
              QR Code Included
            </p>
          </div>
        </section>

        {/* Map */}
        <section className="overflow-hidden rounded-[1.5rem] border border-subtle bg-[rgb(var(--color-surface))] shadow-soft">
          <div className="p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[rgb(var(--color-text-secondary))]">
              Location
            </p>

            <h2 className="mt-2 font-nunito text-2xl font-extrabold text-[rgb(var(--color-text))]">
              Visit us
            </h2>

            <p className="mt-2 text-sm leading-7 text-[rgb(var(--color-text-secondary))]">
              {business.address}
            </p>
          </div>

          <div className="relative h-48 border-t border-subtle bg-[rgb(var(--color-surface-soft))]">
            <iframe
              title={`${business.name} location`}
              src={business.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="p-5">
            <a
              href={business.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleAction("Open Map")}
              className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--mango-page-main),var(--mango-page-secondary))] px-6 py-3.5 font-nunito text-sm font-extrabold text-white shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Open in Google Maps
            </a>
          </div>
        </section>

        {/* Socials */}
        <section>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[rgb(var(--color-text-secondary))]">
            Social
          </p>

          <h2 className="mt-2 font-nunito text-2xl font-extrabold text-[rgb(var(--color-text))]">
            Connect with us
          </h2>

          <div className={socialsGridClass}>
            {business.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleAction(social.label)}
                className="inline-flex items-center justify-center rounded-full border border-subtle bg-[rgb(var(--color-surface))] px-5 py-3.5 font-nunito text-sm font-extrabold text-[rgb(var(--color-text))] shadow-soft transition-transform hover:-translate-y-0.5"
              >
                {social.label}
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="rounded-[1.5rem] border border-subtle bg-[rgb(var(--color-surface))] p-5 text-center shadow-soft">
          <p className="font-nunito text-sm font-extrabold text-[rgb(var(--color-text))]">
            {business.name}
          </p>

          <p className="mt-1 text-xs leading-6 text-[rgb(var(--color-text-secondary))]">
            {business.address}
          </p>

          <div className="mt-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--color-surface-soft))] px-4 py-2 text-[10px] text-[rgb(var(--color-text-secondary))]">
              <span className="h-2 w-2 rounded-full bg-[linear-gradient(135deg,var(--mango-page-main),var(--mango-page-secondary))]" />
              Powered by{" "}
              <a
                href={business.poweredByUrl ?? "https://mangomedia305.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                Mango Media 305
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
