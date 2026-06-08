"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, ArrowDownRight } from 'lucide-react';
import Section from "../Section";

const SOCIALS = [
  { label: 'LinkedIn', url: 'https://linkedin.com', iconPath: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z' },
  { label: 'Facebook', url: 'https://facebook.com', iconPath: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { label: 'Instagram', url: 'https://instagram.com', iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
];

const CONTACT_INFO = [
  { Icon: Phone, text: '+254 720 129069' },
  { Icon: Mail, text: 'info@connektsaas.com' },
  { Icon: MapPin, text: 'Nairobi, Kenya' },
];

export default function ContactSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submit logic
    console.log('Email submitted:', email);
  };

  return (
    <Section
      id="contact"
      className="!h-auto min-h-[60dvh]"
      style={{ background: "linear-gradient(135deg, #0a1f2e 0%, #0d2d3d 50%, #0f3a4a 100%)" }}
    >
      <div className="relative z-10 flex items-center justify-center px-6 py-12 w-full">
        
        <div 
          className="w-full max-w-[900px] rounded-[18px] p-10 flex flex-wrap gap-10 bg-white/10 backdrop-blur-md border border-white/20"
          style={{ 
            boxShadow: 'inset 0 1px 0 hsla(0, 27%, 35%, 0.10), 0 8px 32px rgba(0,0,0,0.2)'
          }}
        >

          {/* ── LEFT ── */}
          <div className="flex-1 min-w-[220px] flex flex-col justify-between gap-5">
            <div>
              {/* Arrow icon */}
              <div className="mb-2">
                <ArrowDownRight size={26} color="#FFFFFF" strokeWidth={2} />
              </div>

              <h1 
                className="text-white text-5xl font-extrabold uppercase leading-[50px] mb-4"
                style={{ letterSpacing: '-0.5px' }}
              >
                CONTACT<br />US TODAY
              </h1>

              <p className="text-white/80 text-sm leading-[21px] max-w-[300px] mb-6">
                Contact us today to schedule a consultation and discover how we can help your business thrive.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {SOCIALS.map(({ label, url, iconPath }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 bg-[#1F7A8C]/80 backdrop-blur-md border border-[#1F7A8C]/60 shadow-md"
                  aria-label={label}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff" stroke="none">
                    <path d={iconPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="flex-1 min-w-[260px] flex flex-col justify-between gap-8">
            {/* Email form */}
            <form onSubmit={handleSubmit}>
              <label className="block text-white text-[15px] font-semibold mb-3.5">
                Get a Free consultation
              </label>
              <div className="flex items-center bg-white rounded-[50px] pl-3.5 pr-1 py-1 gap-1">
                <Mail size={17} color="#9aa3b0" strokeWidth={1.8} className="mr-1.5" />
                <input
                  type="email"
                  className="flex-1 text-[13px] text-gray-700 py-2 outline-none bg-transparent placeholder-[#b0b8c4] min-w-0"
                  placeholder="Enter your email to get started"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-[50px] py-2.5 pl-3.5 pr-1.5 transition-all hover:scale-105 bg-[#0A2A33] border border-[#0A2A33]/40 shadow-lg"
                >
                  <span className="text-white text-xs font-bold uppercase tracking-wider">
                    GET STARTED
                  </span>
                  <div 
                    className="w-[26px] h-[26px] rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                  >
                    <ArrowRight size={13} color="#fff" strokeWidth={2.2} />
                  </div>
                </button>
              </div>
            </form>

            {/* Contact info */}
            <div className="flex flex-col gap-3.5">
              {CONTACT_INFO.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3.5">
                  <div 
                    className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#1F7A8C]/30 backdrop-blur-sm border border-[#1F7A8C]/50"
                  >
                    <Icon size={15} color="#FFFFFF" strokeWidth={2} />
                  </div>
                  <span className="text-white text-[13.5px] font-medium flex-1">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </Section>
  );
}