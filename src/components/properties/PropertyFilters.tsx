import { useMemo, useState } from 'react';
import { ListingCard } from './ListingCard';
import { listings, propertyTypes, type PropertyType } from '@/data/listings';

type PetsFilter = 'any' | 'yes' | 'no';
type BedsFilter = 'any' | '1' | '2' | '3' | '4';
type SortKey = 'rent-asc' | 'rent-desc' | 'beds' | 'city';

const cities = Array.from(new Set(listings.map((l) => l.city))).sort();

export function PropertyFilters() {
  const [type, setType] = useState<PropertyType | 'any'>('any');
  const [beds, setBeds] = useState<BedsFilter>('any');
  const [pets, setPets] = useState<PetsFilter>('any');
  const [city, setCity] = useState<string>('any');
  const [availableOnly, setAvailableOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>('rent-asc');

  const filtered = useMemo(() => {
    let rows = listings.filter((l) => {
      if (type !== 'any' && l.type !== type) return false;
      if (beds !== 'any' && l.beds < Number(beds)) return false;
      if (pets === 'yes' && !l.pets) return false;
      if (pets === 'no' && l.pets) return false;
      if (city !== 'any' && l.city !== city) return false;
      if (availableOnly && !l.available) return false;
      return true;
    });
    rows = [...rows].sort((a, b) => {
      if (sort === 'rent-asc') return a.price - b.price;
      if (sort === 'rent-desc') return b.price - a.price;
      if (sort === 'city') return a.city.localeCompare(b.city);
      return b.beds - a.beds;
    });
    return rows;
  }, [type, beds, pets, city, availableOnly, sort]);

  const selectClass =
    'w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-hhp-charcoal focus-ring';

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Quick city filters">
        <button
          type="button"
          onClick={() => setCity('any')}
          className={`rounded-[3px] border px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition focus-ring ${
            city === 'any'
              ? 'border-brand bg-brand text-white'
              : 'border-border bg-white text-brand-deep hover:border-brand/40'
          }`}
        >
          All cities
        </button>
        {cities.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCity(c)}
            className={`rounded-[3px] border px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition focus-ring ${
              city === c
                ? 'border-brand bg-brand text-white'
                : 'border-border bg-white text-brand-deep hover:border-brand/40'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="sticky top-[4.5rem] z-30 -mx-4 border-y border-border header-glass px-4 py-3.5 sm:mx-0 sm:rounded-xl sm:border sm:px-5 lg:top-[5rem]">
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-listing-muted">
            Type
            <select
              className={`mt-1 ${selectClass}`}
              value={type}
              onChange={(e) => setType(e.target.value as PropertyType | 'any')}
            >
              <option value="any">All types</option>
              {propertyTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-listing-muted">
            City
            <select
              className={`mt-1 ${selectClass}`}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="any">All cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-listing-muted">
            Beds
            <select
              className={`mt-1 ${selectClass}`}
              value={beds}
              onChange={(e) => setBeds(e.target.value as BedsFilter)}
            >
              <option value="any">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </label>
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-listing-muted">
            Pets
            <select
              className={`mt-1 ${selectClass}`}
              value={pets}
              onChange={(e) => setPets(e.target.value as PetsFilter)}
            >
              <option value="any">Any</option>
              <option value="yes">Pet-friendly</option>
              <option value="no">No pets</option>
            </select>
          </label>
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-listing-muted">
            Sort
            <select
              className={`mt-1 ${selectClass}`}
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
            >
              <option value="rent-asc">Rent: low → high</option>
              <option value="rent-desc">Rent: high → low</option>
              <option value="beds">Beds</option>
              <option value="city">City</option>
            </select>
          </label>
          <label className="flex items-end gap-2 pb-2 text-sm font-medium text-hhp-charcoal">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-border text-brand focus:ring-brand"
              checked={availableOnly}
              onChange={(e) => setAvailableOnly(e.target.checked)}
            />
            Available only
          </label>
          <div className="flex items-end">
            <p className="w-full rounded-md bg-surface px-3 py-2 text-sm text-listing-muted ring-1 ring-border">
              <span className="font-semibold text-brand-deep">{filtered.length}</span> properties
            </p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border pt-3">
          <span className="text-[11px] font-bold uppercase tracking-wide text-listing-muted">
            Quick:
          </span>
          <button
            type="button"
            onClick={() => {
              setPets('yes');
              setAvailableOnly(true);
            }}
            className={`rounded-[3px] border px-2.5 py-1 text-xs font-semibold focus-ring ${
              pets === 'yes' && availableOnly
                ? 'border-brand bg-brand text-white'
                : 'border-border bg-surface text-brand-deep hover:border-brand/40'
            }`}
          >
            Pet-friendly + available
          </button>
          <button
            type="button"
            onClick={() => {
              setType('any');
              setBeds('any');
              setPets('any');
              setCity('any');
              setAvailableOnly(false);
              setSort('rent-asc');
            }}
            className="rounded-[3px] border border-border bg-white px-2.5 py-1 text-xs font-semibold text-listing-muted hover:text-brand-deep focus-ring"
          >
            Clear filters
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-surface px-6 py-10 text-center">
          <p className="font-display text-base font-medium text-brand-deep">No matches</p>
          <p className="mt-2 text-sm text-listing-muted">
            Try clearing filters — or{' '}
            <a
              href="mailto:ty@bsmholdings.com?subject=Waitlist"
              className="font-medium text-brand hover:underline"
            >
              join the waitlist
            </a>
            .
          </p>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((listing) => (
            <div key={listing.id} id={listing.slug} className="scroll-mt-40">
              <ListingCard listing={listing} className="!max-w-none" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
