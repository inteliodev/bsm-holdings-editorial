/**
 * Line marks per asset class, in the same stroke language as the scrollytelling
 * diagrams.
 *
 * These were private to `AssetTypePage` until the asset types index and the Home
 * band needed them: the brokerage track lists all six classes, and six more
 * photographs there would have read as a stock-image wall. A drawn mark carries
 * the class at small size without competing with the photography that the
 * management track uses.
 */

export type AssetMarkName =
  | 'office'
  | 'retail'
  | 'industrial'
  | 'multifamily'
  | 'senior'
  | 'affordable';

const AssetMark = ({ mark, className }: { mark: AssetMarkName; className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className || 'h-14 w-14'}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {mark === 'office' && (
      <>
        <path d="M18 56V14h28v42" />
        <path d="M10 56h44" />
        <path d="M24 22h6M34 22h6M24 31h6M34 31h6M24 40h6M34 40h6" />
        <path d="M29 56v-8h6v8" />
      </>
    )}
    {mark === 'retail' && (
      <>
        <path d="M12 26h40v30H12z" />
        <path d="M10 26l4-12h36l4 12" />
        <path d="M22 56V40h12v16" />
        <path d="M40 38h8v8h-8z" />
      </>
    )}
    {mark === 'industrial' && (
      <>
        <path d="M10 56V30l14-8 14 8v26" />
        <path d="M38 56V34h16v22" />
        <path d="M8 56h48" />
        <path d="M16 56v-12h10v12" />
        <path d="M43 40h6M43 47h6" />
      </>
    )}
    {mark === 'multifamily' && (
      <>
        <path d="M14 56V18h20v38" />
        <path d="M34 56V28h16v28" />
        <path d="M8 56h48" />
        <path d="M20 25h8M20 34h8M20 43h8M40 35h5M40 44h5" />
      </>
    )}
    {mark === 'senior' && (
      <>
        <path d="M12 34l20-14 20 14" />
        <path d="M16 34v22h32V34" />
        <path d="M8 56h48" />
        <path d="M24 56V44h8v12" />
        <path d="M38 42h6v7h-6z" />
      </>
    )}
    {mark === 'affordable' && (
      <>
        <path d="M12 32l20-14 20 14" />
        <path d="M16 32v24h32V32" />
        <path d="M8 56h48" />
        <path d="M32 38l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8v-5z" />
      </>
    )}
  </svg>
);

export default AssetMark;
