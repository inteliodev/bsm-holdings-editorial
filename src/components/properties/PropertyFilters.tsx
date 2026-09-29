import { useMemo, useState } from 'react';
import { ListingCard } from './ListingCard';
import { listings } from '@/data/listings';

type PetsFilter = 'any' | 'yes' | 'no';
type BedsFilter = 'any' | '1' | '2' | '3' | '4';
type RentFilter = 'any' | 'under-1200' | '1200-1600' | '1600-2000' | 'over-2000';
type SortKey = 'rent-asc' | 'rent-desc' | 'beds' | 'city';

const cities = Array.from(new Set(listings.map((l) => l.city))).sort();

function matchesRent(price: number, rent: RentFilter): boolean {
  if (rent === 'any') return true;
  if (rent === 'under-1200') return price < 1200;
  if (rent === '1200-1600') return price >= 1200 && price <= 1600;
  if (rent === '1600-2000') return price > 1600 && price <= 2000;
  return price > 2000;
}

export function PropertyFilters() {
  const [beds, setBeds] = useState<BedsFilter>('any');
  const [pets, setPets] = useState<PetsFilter>('any');
  const [city, setCity] = useState<string>('any');
  const [rent, setRent] = useState<RentFilter>('any');
  const [sort, setSort] = useState<SortKey>('rent-asc');

  const filtered = useMemo(() => {
    let rows = listings.filter((l) => {
      if (beds !== 'any' && l.beds < Number(beds)) return false;
      if (pets === 'yes' && !l.pets) return false;
      if (pets === 'no' && l.pets) return false;
      if (city !== 'any' && l.city !== city) return false;
      if (!matchesRent(l.price, rent)) return false;
      return true;
    });
    rows = [...rows].sort((a, b) => {
      if (sort === 'rent-asc') return a.price - b.price;
      if (sort === 'rent-desc') return b.price - a.price;
      if (sort === 'city') return a.city.localeCompare(b.city);
      return b.beds - a.beds;
    });
    return rows;
  }, [beds, pets, city, rent, sort]);

  const selectClass =
    'w-full rounded border border-border bg-white px-3 py-2 text-sm text-hhp-charcoal focus-ring';

  return (
    <div className="space-y-6">
      <div className="border border-border bg-surface px-4 py-4 sm:px-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-listing-muted">
            Location
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
            Rent
            <select
              className={`mt-1 ${selectClass}`}
              value={rent}
              onChange={(e) => setRent(e.target.value as RentFilter)}
            >
              <option value="any">Any</option>
              <option value="under-1200">Under $1,200</option>
              <option value="1200-1600">$1,200 – $1,600</option>
              <option value="1600-2000">$1,600 – $2,000</option>
              <option value="over-2000">Over $2,000</option>
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
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3">
          <p className="text-sm text-listing-muted">
            <span className="font-semibold text-brand-deep">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'property' : 'properties'}
          </p>
          <button
            type="button"
            onClick={() => {
              setBeds('any');
              setPets('any');
              setCity('any');
              setRent('any');
              setSort('rent-asc');
            }}
            className="text-xs font-semibold text-listing-muted hover:text-brand-deep focus-ring"
          >
            Clear filters
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="border border-dashed border-border bg-surface px-6 py-12 text-center">
          <p className="font-display text-base font-medium text-brand-deep">No matches</p>
          <p className="mt-2 text-sm text-listing-muted">
            Try clearing filters — or{' '}
            <a
              href="mailto:ty@bsmholdings.com?subject=Waitlist"
              className="font-medium text-brand hover:underline"
            >
              email us about upcoming homes
            </a>
            .
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((listing) => (
            <div key={listing.id} id={listing.slug} className="scroll-mt-32">
              <ListingCard listing={listing} className="!max-w-none h-full" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
