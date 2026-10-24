"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

import { BrandName } from "@/components/brand-name";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Logo
            className="size-12 shrink-0"
            aria-label={`${site.name} logo`}
            role="img"
          />
          <span className="flex flex-col leading-tight">
            <BrandName className="font-heading text-base font-semibold tracking-tight sm:text-lg" />
            <span className="text-[0.65rem] font-medium tracking-[0.2em] text-muted-foreground uppercase">
              {site.slogan}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Button
                key={link.href}
                asChild
                variant={isActive ? "secondary" : "ghost"}
                size="sm"
                className="font-heading"
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            asChild
            size="sm"
            className="hidden font-heading sm:inline-flex"
          >
            <a href={site.phoneHref}>
              <Phone data-icon="inline-start" />
              Call Us
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>

      <nav className="flex items-center gap-1 overflow-x-auto border-t border-border/60 px-4 py-2 md:hidden">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Button
              key={link.href}
              asChild
              variant={isActive ? "secondary" : "ghost"}
              size="sm"
              className="shrink-0 font-heading"
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          );
        })}
      </nav>
    </header>
  );
}
