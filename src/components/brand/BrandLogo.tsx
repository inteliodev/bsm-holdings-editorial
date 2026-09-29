import { Link } from 'react-router-dom';
import { trackLinkClick } from '@/utils/analytics';

type Props = {
  /** Dark navy / transparent hero — white wordmark. Light header — navy wordmark. */
  variant?: 'light' | 'dark';
  className?: string;
  /** Link to home (default) or render as a static mark. */
  linked?: boolean;
};

/**
 * Shield mark (full color — no invert silhouette) + readable "BSM Holdings" wordmark.
 * Invert filters flatten the crest lettering; keep the colored mark and spell the name.
 */
export function BrandLogo({ variant = 'light', className = '', linked = true }: Props) {
  const wordmarkClass =
    variant === 'dark'
      ? 'text-white'
      : 'text-hhp-navy';

  const mark = (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <img
        src="/brand/bsm-logo.png"
        alt=""
        width={140}
        height={140}
        className="h-9 w-auto object-contain sm:h-10 md:h-11"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        aria-hidden="true"
      />
      <span
        className={`font-display text-[0.95rem] font-semibold leading-tight tracking-tight sm:text-base md:text-[1.05rem] ${wordmarkClass}`}
      >
        BSM Holdings
      </span>
    </span>
  );

  if (!linked) {
    return (
      <span className="inline-flex" role="img" aria-label="BSM Holdings">
        {mark}
      </span>
    );
  }

  return (
    <Link
      to="/"
      className="flex min-h-[44px] flex-shrink-0 items-center focus-ring rounded-sm"
      aria-label="BSM Holdings home"
      onClick={() => trackLinkClick('BSM Logo', '/')}
    >
      {mark}
    </Link>
  );
}
