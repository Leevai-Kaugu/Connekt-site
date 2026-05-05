"use client";

import { useEffect, useState } from "react";

export interface ActiveCountry {
  id: string;
  name: string;
  flag: string;
}

interface UseActiveCountriesReturn {
  countries: ActiveCountry[];
  loading: boolean;
  error: string | null;
}

export function useActiveCountries(): UseActiveCountriesReturn {
  const [countries, setCountries] = useState<ActiveCountry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchCountries = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/countries/active");
        if (!res.ok) {
          throw new Error(`Failed to load countries (${res.status})`);
        }
        const raw = await res.json();
        // Normalise: accept a plain array or { success, data: [] } wrapper
        if (raw?.success === false) {
          throw new Error(raw?.message ?? "Failed to load countries.");
        }
        const data: ActiveCountry[] = Array.isArray(raw)
          ? raw
          : Array.isArray(raw?.data)
          ? raw.data
          : [];
        if (!cancelled) setCountries(data);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Could not load countries.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCountries();
    return () => { cancelled = true; };
  }, []);

  return { countries, loading, error };
}
