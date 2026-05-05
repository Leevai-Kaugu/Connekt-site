"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, Eye, EyeOff, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useOnboarding, OnboardingPayload } from "../hooks/useOnboarding";
import { useActiveCountries } from "../hooks/useActiveCountries";

const EMPTY: OnboardingPayload = {
  first_name: "",
  last_name: "",
  middle_name: "",
  other_name: "",
  email: "",
  mobile: "",
  terms: false,
  password: "",
  confirm_password: "",
  country: "",
};

interface Props {
  open: boolean;
  onClose: () => void;
}

/* ── Field component ─────────────────────────────────────────────── */
function Field({
  label,
  required,
  children,
  error,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-[#0A2A33]/70 uppercase tracking-wide">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-[11px] text-red-500">{error}</p>}
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-[#0A2A33]/15 bg-white/60 px-4 py-2.5 text-sm text-[#0A2A33] placeholder:text-[#0A2A33]/30 focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]/50 focus:border-[#1F7A8C] transition";

/* ── Modal ───────────────────────────────────────────────────────── */
export default function OnboardingModal({ open, onClose }: Props) {
  const { submit, loading, error: apiError, success, reset } = useOnboarding();
  const { countries, loading: countriesLoading, error: countriesError } = useActiveCountries();

  const [form, setForm] = useState<OnboardingPayload>(EMPTY);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof OnboardingPayload, string>>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  /* reset state when modal closes */
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setForm(EMPTY);
        setFieldErrors({});
        setShowPassword(false);
        setShowConfirm(false);
        reset();
      }, 300);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  /* close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const set = (key: keyof OnboardingPayload, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  /* ── Validation ─────────────────────────────────────────────── */
  const validate = (): boolean => {
    const errs: Partial<Record<keyof OnboardingPayload, string>> = {};
    if (!form.first_name.trim()) errs.first_name = "First name is required.";
    if (!form.last_name.trim()) errs.last_name = "Last name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!form.mobile.trim()) errs.mobile = "Mobile number is required.";
    if (!form.country) errs.country = "Please select your country.";
    if (!form.password) {
      errs.password = "Password is required.";
    } else if (form.password.length < 8) {
      errs.password = "Password must be at least 8 characters.";
    }
    if (!form.confirm_password) {
      errs.confirm_password = "Please confirm your password.";
    } else if (form.password !== form.confirm_password) {
      errs.confirm_password = "Passwords do not match.";
    }
    if (!form.terms) errs.terms = "You must accept the terms to continue.";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const result = await submit(form);
    if (!result.success) {
      const msg = result.message.toLowerCase();
      if (msg.includes("email") && (msg.includes("exist") || msg.includes("taken") || msg.includes("registered"))) {
        setFieldErrors((prev) => ({ ...prev, email: result.message }));
        reset(); // clear the generic banner — the field error is enough
      }
    }
  };

  if (!open) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(10,42,51,0.6)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90dvh] overflow-y-auto rounded-3xl bg-gradient-to-br from-[#e8f4fd] to-[#c8e8f0] shadow-2xl"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#1F7A8C33 transparent" }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 pt-6 pb-4 bg-gradient-to-br from-[#e8f4fd] to-[#e0f0f8] border-b border-[#0A2A33]/10">
          <div className="flex items-center gap-3">
            <Image src="/Connekt Icon.svg" alt="Connekt" width={36} height={36} className="w-9 h-9" />
            <div>
              <h2 className="text-lg font-extrabold text-[#0A2A33] leading-tight">Create your account</h2>
              <p className="text-xs text-[#1F7A8C] font-medium">Get started with Connekt SaaS for free</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0A2A33]/8 hover:bg-[#0A2A33]/15 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-[#0A2A33]" />
          </button>
        </div>

        {/* Success state */}
        {success ? (
          <div className="flex flex-col items-center justify-center py-16 px-8 text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#1F7A8C]/15 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-[#1F7A8C]" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-extrabold text-[#0A2A33]">You&apos;re all set!</h3>
            <p className="text-sm text-[#0A2A33]/70 max-w-sm">
              Your account has been created. Check your email for next steps.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-8 py-2.5 rounded-full bg-[#0A2A33] text-white font-medium text-sm hover:scale-105 transition cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="px-6 py-6 flex flex-col gap-5">

            {/* API error banner */}
            {apiError && (
              <div className="flex items-start gap-2.5 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-red-700">{apiError}</p>
              </div>
            )}

            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="First Name" required error={fieldErrors.first_name}>
                <input
                  className={inputCls}
                  placeholder="John"
                  value={form.first_name}
                  onChange={(e) => set("first_name", e.target.value)}
                  autoComplete="given-name"
                />
              </Field>
              <Field label="Last Name" required error={fieldErrors.last_name}>
                <input
                  className={inputCls}
                  placeholder="Doe"
                  value={form.last_name}
                  onChange={(e) => set("last_name", e.target.value)}
                  autoComplete="family-name"
                />
              </Field>
            </div>

            {/* Middle / Other name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Middle Name" error={fieldErrors.middle_name}>
                <input
                  className={inputCls}
                  placeholder="Michael"
                  value={form.middle_name}
                  onChange={(e) => set("middle_name", e.target.value)}
                />
              </Field>
              <Field label="Other Name" error={fieldErrors.other_name}>
                <input
                  className={inputCls}
                  placeholder="Jr"
                  value={form.other_name}
                  onChange={(e) => set("other_name", e.target.value)}
                />
              </Field>
            </div>

            {/* Email */}
            <Field label="Email Address" required error={fieldErrors.email}>
              <input
                type="email"
                className={inputCls}
                placeholder="john.doe@example.com"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                autoComplete="email"
              />
            </Field>

            {/* Mobile + Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Mobile Number" required error={fieldErrors.mobile}>
                <input
                  type="tel"
                  className={inputCls}
                  placeholder="0977123456"
                  value={form.mobile}
                  onChange={(e) => set("mobile", e.target.value)}
                  autoComplete="tel"
                />
              </Field>
              <Field label="Country" required error={fieldErrors.country}>
                <select
                  className={`${inputCls} cursor-pointer`}
                  value={form.country}
                  onChange={(e) => set("country", e.target.value)}
                  disabled={countriesLoading || !!countriesError}
                >
                  <option value="" disabled>
                    {countriesLoading ? "Loading countries…" : countriesError ? "Could not load countries" : "Select country"}
                  </option>
                  {countries.map(({ id, name, flag }) => (
                    <option key={id} value={id}>{flag} {name}</option>
                  ))}
                </select>
              </Field>
            </div>

            {/* Password */}
            <Field label="Password" required error={fieldErrors.password}>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`${inputCls} pr-11`}
                  placeholder="Min. 8 characters"
                  value={form.password}
                  onChange={(e) => set("password", e.target.value)}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0A2A33]/40 hover:text-[#0A2A33]/70 transition cursor-pointer"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </Field>

            {/* Confirm password */}
            <Field label="Confirm Password" required error={fieldErrors.confirm_password}>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  className={`${inputCls} pr-11`}
                  placeholder="Repeat your password"
                  value={form.confirm_password}
                  onChange={(e) => set("confirm_password", e.target.value)}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0A2A33]/40 hover:text-[#0A2A33]/70 transition cursor-pointer"
                  tabIndex={-1}
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </Field>

            {/* Terms */}
            <div className="flex flex-col gap-1">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={form.terms}
                    onChange={(e) => set("terms", e.target.checked)}
                  />
                  <div
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition ${
                      form.terms
                        ? "bg-[#1F7A8C] border-[#1F7A8C]"
                        : "bg-white border-[#0A2A33]/20 group-hover:border-[#1F7A8C]/60"
                    }`}
                  >
                    {form.terms && (
                      <svg viewBox="0 0 12 10" className="w-3 h-3 fill-none stroke-white stroke-2">
                        <polyline points="1,5 4.5,8.5 11,1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-xs text-[#0A2A33]/70 leading-relaxed">
                  I agree to the{" "}
                  <a href="#" className="text-[#1F7A8C] underline underline-offset-2 hover:opacity-80">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#1F7A8C] underline underline-offset-2 hover:opacity-80">
                    Privacy Policy
                  </a>
                </span>
              </label>
              {fieldErrors.terms && (
                <p className="text-[11px] text-red-500 ml-8">{fieldErrors.terms}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-1 w-full flex items-center justify-center gap-2 rounded-full bg-[#0A2A33] text-white font-semibold text-sm py-3 hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Creating account…
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}
