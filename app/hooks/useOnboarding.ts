"use client";

import { useState } from "react";

export interface OnboardingPayload {
  first_name: string;
  last_name: string;
  middle_name: string;
  other_name: string;
  email: string;
  mobile: string;
  terms: boolean;
  password: string;
  confirm_password: string;
  country: string;
}

export interface OnboardingResult {
  success: boolean;
  message: string;
}

interface UseOnboardingReturn {
  submit: (payload: OnboardingPayload) => Promise<OnboardingResult>;
  loading: boolean;
  error: string | null;
  success: boolean;
  reset: () => void;
}

// Always call the local Next.js proxy — avoids CORS in the browser
const PROXY_BASE = "/api/onboarding";

export function useOnboarding(): UseOnboardingReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const reset = () => {
    setError(null);
    setSuccess(false);
  };

  const submit = async (payload: OnboardingPayload): Promise<OnboardingResult> => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch(`${PROXY_BASE}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const message: string =
          data?.message ?? data?.error ?? `Request failed (${res.status})`;
        setError(message);
        return { success: false, message };
      }

      setSuccess(true);
      const message: string = data?.message ?? "Account created successfully!";
      return { success: true, message };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Network error. Please try again.";
      setError(message);
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error, success, reset };
}
