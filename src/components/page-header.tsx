import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

type PageHeaderProps = {
  badge: string;
  title: ReactNode;
  description?: string;
};

export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <header className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
      <div className="animate-route-enter" style={{ animationDelay: "0ms" }}>
        <Badge variant="outline">{badge}</Badge>
      </div>
      <h1
        className="animate-route-enter font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        style={{ animationDelay: "90ms" }}
      >
        {title}
      </h1>
      {description ? (
        <p
          className="animate-route-enter text-muted-foreground text-pretty"
          style={{ animationDelay: "180ms" }}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
