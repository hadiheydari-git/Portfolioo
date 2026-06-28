"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { useLanguage } from "@/components/providers/language-provider";

export function Contact() {
  const { t, locale } = useLanguage();

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="container-edge flex flex-col gap-12">
        <SectionHeading
          labelKey="contact.label"
          titleKey="contact.title"
          subtitleKey="contact.subtitle"
          align="center"
        />

        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-card p-8 shadow-lifted sm:p-12 dark:border-white/10">
          {/* decorative aurora */}
          <div className="pointer-events-none absolute -top-1/4 -right-1/4 h-96 w-96 rounded-full bg-foreground/[0.06] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-1/4 -left-1/4 h-96 w-96 rounded-full bg-foreground/[0.04] blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left: info */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  {t("contact.availability")}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {t("contact.title")}
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                <InfoRow
                  icon={<MapPin className="h-4 w-4" />}
                  label={t("contact.locationLabel")}
                  value={t("contact.location")}
                />
                <InfoRow
                  icon={<Phone className="h-4 w-4" />}
                  label={t("contact.phoneLabel")}
                  value={t("contact.phone")}
                  href="tel:+989352126934"
                />
              </div>
            </div>

            {/* Right: actions */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="tel:+989352126934"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lifted active:scale-[0.98]"
              >
                <Phone className="h-4 w-4" />
                {t("contact.callMe")}
              </a>
              <a
                href="mailto:hadiheydari.business@gmail.com"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-background/40 px-6 text-sm font-medium transition-all duration-300 hover:bg-secondary hover:shadow-card dark:border-white/10"
              >
                <Mail className="h-4 w-4" />
                {t("contact.emailMe")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-secondary/40 text-muted-foreground dark:border-white/10">
        {icon}
      </span>
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-sm font-medium">{value}</span>
      </div>
    </>
  );
  if (href) {
    return (
      <a href={href} className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-70">
        {inner}
      </a>
    );
  }
  return <div className="flex items-center gap-3">{inner}</div>;
}
