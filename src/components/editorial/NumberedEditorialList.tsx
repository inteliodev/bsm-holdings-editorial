import { cn } from '@/lib/utils';

export type NumberedEditorialItem = {
  /** @deprecated Ignored — numerals removed sitewide. Kept optional for call-site compatibility. */
  number?: string;
  title: string;
  /** Soft supporting sentence under the title */
  body: string;
  /** Optional secondary bullets (shown without accordion chrome) */
  details?: string[];
};

type NumberedEditorialListProps = {
  items: NumberedEditorialItem[];
  className?: string;
  /** Visual density — default is generous editorial spacing */
  density?: 'default' | 'compact';
};

/**
 * Clean editorial service stack: headings + one sentence, hairline dividers.
 * Numerals (01/02/…) are intentionally not rendered.
 */
export function NumberedEditorialList({
  items,
  className,
  density = 'default',
}: NumberedEditorialListProps) {
  const padY = density === 'compact' ? 'py-5 sm:py-6' : 'py-6 sm:py-8';

  return (
    <ul className={cn('border-t border-border', className)}>
      {items.map((item) => (
        <li
          key={item.title}
          className={cn(
            'group relative border-b border-border',
            'pl-4 transition-[border-color] duration-300 ease-out-expo sm:pl-5',
            'before:absolute before:left-0 before:top-0 before:h-full before:w-px',
            'before:bg-transparent before:transition-colors before:duration-300 before:ease-out-expo',
            'hover:before:bg-brand',
          )}
        >
          <div className={cn(padY)}>
            <h3
              className={cn(
                'font-display text-xl font-semibold tracking-tight text-hhp-navy sm:text-2xl',
                'transition-colors duration-300 ease-out-expo',
                'group-hover:text-brand',
              )}
            >
              {item.title}
            </h3>
            <p className="mt-1.5 max-w-xl text-base leading-relaxed text-hhp-charcoal/85 sm:text-[1.0625rem]">
              {item.body}
            </p>

            {item.details && item.details.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 text-sm leading-relaxed text-hhp-charcoal sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.7rem] inline-block h-px w-3.5 shrink-0 bg-brand/70"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default NumberedEditorialList;
