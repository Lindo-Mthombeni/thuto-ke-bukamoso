import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import logo from "@/assets/logo.svg";
import { BrandName } from "@/components/brand-name";
import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt={`${site.name} logo`}
                width={48}
                height={48}
                className="size-12 shrink-0"
              />
              <BrandName className="font-heading text-lg font-semibold tracking-tight" />
            </div>
            <p className="text-sm text-muted-foreground">
              {site.subTagline}. {site.slogan}.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-sm font-semibold tracking-wide uppercase">
              Contact Us
            </h2>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-primary" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-primary" />
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p className="font-heading font-medium tracking-[0.15em] uppercase">
            Children • Skills • Opportunities • A Brighter Tomorrow
          </p>
          <p>© 2026 {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
