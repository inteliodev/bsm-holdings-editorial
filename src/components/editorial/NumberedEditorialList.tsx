import { cn } from '@/lib/utils';

export type NumberedEditorialItem = {
  /** Display index, e.g. "01" */
  number: string;
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
 * Premium numbered service stack: large muted navy numerals as typographic
 * accent, hairline dividers, left accent rule on hover — no cards/boxes.
 */
export function NumberedEditorialList({
  items,
  className,
  density = 'default',
}: NumberedEditorialListProps) {
  const padY = density === 'compact' ? 'py-5 sm:py-6' : 'py-6 sm:py-8';

  return (
    <ol className={cn('border-t border-border', className)}>
      {items.map((item) => (
        <li
          key={`${item.number}-${item.title}`}
          className={cn(
            'group relative border-b border-border',
            'pl-4 transition-[border-color] duration-300 ease-out-expo sm:pl-5',
            'before:absolute before:left-0 before:top-0 before:h-full before:w-px',
            'before:bg-transparent before:transition-colors before:duration-300 before:ease-out-expo',
            'hover:before:bg-brand',
          )}
        >
          <div className={cn('grid gap-3 sm:grid-cols-[auto_1fr] sm:gap-x-6 sm:gap-y-1', padY)}>
            <span
              aria-hidden="true"
              className={cn(
                'font-display tabular-nums leading-none tracking-tight text-hhp-navy/20',
                'text-[2.75rem] sm:text-[3.25rem]',
                'transition-colors duration-300 ease-out-expo',
                'group-hover:text-hhp-navy/35',
              )}
            >
              {item.number}
            </span>

            <div className="min-w-0 self-center">
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
          </div>
        </li>
      ))}
    </ol>
  );
}

export default NumberedEditorialList;
