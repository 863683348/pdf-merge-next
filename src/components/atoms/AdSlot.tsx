'use client';

import { useEffect } from 'react';

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? '';
const DEFAULT_SLOT = process.env.NEXT_PUBLIC_ADSENSE_SLOT ?? '';

interface AdSlotProps {
  /** AdSense ad unit slot ID. Defaults to NEXT_PUBLIC_ADSENSE_SLOT. */
  slot?: string;
  /** Ad format: "auto" | "horizontal" | "vertical" | "rectangle". Defaults to "auto". */
  format?: string;
  /** Enable full-width responsive. Defaults to true. */
  fullWidthResponsive?: boolean;
  /** Extra className for layout. */
  className?: string;
}

/**
 * Google AdSense manual ad unit.
 *
 * Only renders in production with a valid AdSense client.
 * Uses responsive layout — Google decides the best ad size.
 */
export function AdSlot({
  slot = DEFAULT_SLOT,
  format = 'auto',
  fullWidthResponsive = true,
  className = '',
}: AdSlotProps) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' || !ADSENSE_CLIENT || !slot) return;
    try {
      // @ts-expect-error — AdSense injects this onto window
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded yet — silently skip
    }
  }, [slot]);

  // Don't render in dev or without config
  if (process.env.NODE_ENV !== 'production' || !ADSENSE_CLIENT || !slot) {
    return null;
  }

  return (
    <div
      className={`flex justify-center py-6 ${className}`}
      aria-label="Advertisement"
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
}
