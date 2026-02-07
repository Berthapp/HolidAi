"use client";

import { useEffect, useState } from "react";
import { getAffiliateRedirectUrl } from "@/src/lib/affiliate/actions";
import type { AffiliateContext, Partner } from "@/src/lib/affiliate/partners";

type AffiliateButtonProps = {
  partner: Partner;
  ctx: AffiliateContext;
  label: string;
  className?: string;
  href?: string;
};

export function AffiliateButton({
  partner,
  ctx,
  label,
  className,
  href,
}: AffiliateButtonProps) {
  const [resolvedHref, setResolvedHref] = useState<string | null>(
    href ?? null
  );

  const ctxKey = JSON.stringify(ctx);

  useEffect(() => {
    let mounted = true;
    if (href) {
      setResolvedHref(href);
      return;
    }

    getAffiliateRedirectUrl(partner, ctx)
      .then((url) => {
        if (mounted) setResolvedHref(url);
      })
      .catch(() => {
        if (mounted) setResolvedHref(null);
      });

    return () => {
      mounted = false;
    };
  }, [ctxKey, href, partner]);

  const isReady = Boolean(resolvedHref);

  return (
    <a
      href={resolvedHref ?? "#"}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800 ${
        isReady ? "" : "pointer-events-none opacity-50"
      } ${className ?? ""}`}
      aria-disabled={!isReady}
    >
      {label}
    </a>
  );
}
