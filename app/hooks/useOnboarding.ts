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

    // Normalise: trim all string fields; lowercase email, password, confirm_password
    const normalised: OnboardingPayload = {
      ...payload,
      first_name:       payload.first_name.trim(),
      last_name:        payload.last_name.trim(),
      middle_name:      payload.middle_name.trim(),
      other_name:       payload.other_name.trim(),
      email:            payload.email.trim().toLowerCase(),
      mobile:           payload.mobile.trim(),
      password:         payload.password.trim(),
      confirm_password: payload.confirm_password.trim(),
      country:          payload.country.trim(),
    };

    try {
      const res = await fetch(`${PROXY_BASE}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(normalised),
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
