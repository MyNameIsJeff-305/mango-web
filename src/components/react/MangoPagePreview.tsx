import { useMemo, useState } from "react";
import type { MangoPageBusiness } from "../../types/mangoPage";
import MangoPageContent from "./MangoPageContent";

type Device = "mobile" | "tablet" | "desktop";

type MangoPagePreviewProps = {
  business: MangoPageBusiness;
  title?: string;
  description?: string;
};

const devices: {
  id: Device;
  label: string;
  frameClass: string;
  previewClass: string;
}[] = [
  {
    id: "mobile",
    label: "Mobile",
    frameClass: "max-w-[390px]",
    previewClass: "aspect-[9/16]",
  },
  {
    id: "tablet",
    label: "Tablet",
    frameClass: "max-w-[760px]",
    previewClass: "aspect-[4/3]",
  },
  {
    id: "desktop",
    label: "Desktop",
    frameClass: "max-w-[980px]",
    previewClass: "aspect-[16/9]",
  },
];

export default function MangoPagePreview({
  business,
  title = "See how a Mango Quick Page could look for a local business.",
  description = "Switch between mobile, tablet, and desktop views to preview a sample business page experience.",
}: MangoPagePreviewProps) {
  const [device, setDevice] = useState<Device>("mobile");
  const [activeAction, setActiveAction] = useState("Call Now");

  const selectedDevice = useMemo(
    () => devices.find((item) => item.id === device) ?? devices[0],
    [device],
  );

  const isDesktop = device === "desktop";
  const isTablet = device === "tablet";

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[4%] top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(218,60,120,0.10),transparent_64%)] blur-3xl" />
        <div className="absolute right-[5%] bottom-8 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(176,241,34,0.12),transparent_62%)] blur-3xl" />
      </div>

      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-6 font-nunito text-3xl font-extrabold tracking-tight text-[rgb(var(--color-text))] sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-base leading-8 text-[rgb(var(--color-text-secondary))] sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {devices.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setDevice(item.id)}
              className={[
                "rounded-full px-5 py-3 font-nunito text-sm font-extrabold transition-transform duration-200 hover:-translate-y-0.5",
                device === item.id
                  ? "bg-[linear-gradient(135deg,#da3c78_0%,#fecd4c_100%)] text-white shadow-mango"
                  : "border border-subtle bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text))] shadow-soft hover:bg-[rgb(var(--color-surface-soft))]",
              ].join(" ")}
              aria-pressed={device === item.id}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <div
            className={[
              "mx-auto transition-all duration-500 ease-out",
              selectedDevice.frameClass,
            ].join(" ")}
          >
            <div className="surface-panel radius-brand-xl overflow-hidden p-3 shadow-card sm:p-4">
              <div className="mb-3 flex items-center justify-between rounded-[1.25rem] bg-[rgb(var(--color-surface-soft))] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <p className="truncate px-4 text-center text-xs font-bold text-[rgb(var(--color-text-secondary))]">
                  mangomedia305.com/pages/{business.slug}
                </p>

                <div className="h-3 w-12" />
              </div>

              <div
                className={[
                  "relative overflow-hidden rounded-[1.75rem] border border-subtle bg-[rgb(var(--color-bg))] transition-all duration-500",
                  selectedDevice.previewClass,
                ].join(" ")}
              >
                <div
                  className={[
                    "absolute inset-0 overscroll-contain",
                    isDesktop ? "overflow-hidden" : "overflow-y-auto",
                  ].join(" ")}
                >
                  <MangoPageContent
                    business={business}
                    viewMode={device}
                    onAction={setActiveAction}
                  />
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-sm font-semibold text-[rgb(var(--color-text-secondary))]">
              Current preview:{" "}
              <span className="font-black text-[rgb(var(--color-text))]">
                {selectedDevice.label}
              </span>{" "}
              · Last interaction:{" "}
              <span className="font-black text-[rgb(var(--color-text))]">
                {activeAction}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
