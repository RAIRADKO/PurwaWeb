"use client";

import Image from "next/image";
import { useState } from "react";
import { translations, Lang } from "./translations";

export default function Home() {
  const [lang, setLang] = useState<Lang>("id");

  const t = (key: keyof typeof translations) => translations[key][lang];

  const toggleLang = () => setLang(lang === "id" ? "en" : "id");

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="navbar fixed top-0 left-0 right-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <Image src="/logo.png" alt="PurwaWeb Logo" width={40} height={40} />
              <span className="text-2xl font-bold" style={{ color: '#1E3A8A' }}>Purwa<span style={{ color: '#06B6D4' }}>Web</span></span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#layanan" className="text-slate-600 hover:text-[#1E3A8A] transition-colors font-medium">{t("nav_layanan")}</a>
              <a href="#keunggulan" className="text-slate-600 hover:text-[#1E3A8A] transition-colors font-medium">{t("nav_keunggulan")}</a>
              <a href="#workflow" className="text-slate-600 hover:text-[#1E3A8A] transition-colors font-medium">{t("nav_workflow")}</a>
              <a href="#harga" className="text-slate-600 hover:text-[#1E3A8A] transition-colors font-medium">{t("nav_harga")}</a>
              <a href="#testimoni" className="text-slate-600 hover:text-[#1E3A8A] transition-colors font-medium">{t("nav_testimoni")}</a>
              <a href="#tentang" className="text-slate-600 hover:text-[#1E3A8A] transition-colors font-medium">{t("nav_tentang")}</a>
              <a href="#kontak" className="btn-primary px-6 py-2.5 rounded-full font-semibold">
                {t("nav_kontak")}
              </a>
              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className="lang-toggle flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 hover:border-[#06B6D4] transition-all text-sm font-semibold"
                aria-label="Toggle Language"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <span className={`lang-label ${lang === "id" ? "active" : ""}`}>ID</span>
                <span className="text-slate-300">|</span>
                <span className={`lang-label ${lang === "en" ? "active" : ""}`}>EN</span>
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={toggleLang}
                className="lang-toggle flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-slate-200 text-xs font-semibold"
                aria-label="Toggle Language"
              >
                <span className={`lang-label ${lang === "id" ? "active" : ""}`}>ID</span>
                <span className="text-slate-300">|</span>
                <span className={`lang-label ${lang === "en" ? "active" : ""}`}>EN</span>
              </button>
              <button className="p-2" aria-label="Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {t("hero_title")}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                {t("hero_subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#kontak" className="btn-primary px-8 py-4 rounded-full font-semibold text-lg text-center">
                  {t("hero_cta")}
                </a>
                <a href="#layanan" className="btn-outline px-8 py-4 rounded-full font-semibold text-lg text-center">
                  {t("hero_cta2")}
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative animate-float">
                <div className="w-80 h-80 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-32 h-32 mx-auto mb-4 opacity-90" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <p className="text-2xl font-semibold">{t("hero_quality")}</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-cyan-400/30 backdrop-blur-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ringkasan Layanan */}
      <section id="layanan" className="py-24 bg-white grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">{t("layanan_title")}</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-8">
              {t("layanan_subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Development */}
            <div className="card-hover bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t("layanan_web")}</h3>
              <p className="text-slate-600">{t("layanan_web_desc")}</p>
            </div>

            {/* Mobile App */}
            <div className="card-hover bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t("layanan_mobile")}</h3>
              <p className="text-slate-600">{t("layanan_mobile_desc")}</p>
            </div>

            {/* Desktop App */}
            <div className="card-hover bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t("layanan_desktop")}</h3>
              <p className="text-slate-600">{t("layanan_desktop_desc")}</p>
            </div>

            {/* Maintenance */}
            <div className="card-hover bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t("layanan_maintenance")}</h3>
              <p className="text-slate-600">{t("layanan_maintenance_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Keunggulan */}
      <section id="keunggulan" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">{t("keunggulan_title")}</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-8">
              {t("keunggulan_subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E3A8A, #06B6D4)' }}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t("keunggulan_tim")}</h3>
              <p className="text-slate-600">{t("keunggulan_tim_desc")}</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E3A8A, #06B6D4)' }}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t("keunggulan_tech")}</h3>
              <p className="text-slate-600">{t("keunggulan_tech_desc")}</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E3A8A, #06B6D4)' }}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t("keunggulan_proses")}</h3>
              <p className="text-slate-600">{t("keunggulan_proses_desc")}</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E3A8A, #06B6D4)' }}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t("keunggulan_support")}</h3>
              <p className="text-slate-600">{t("keunggulan_support_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">{t("workflow_title")}</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-8">
              {t("workflow_subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl" style={{ background: '#1E3A8A' }}>
                1
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t("workflow_step1")}</h3>
              <p className="text-slate-600 text-sm">{t("workflow_step1_desc")}</p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl" style={{ background: '#2563EB' }}>
                2
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t("workflow_step2")}</h3>
              <p className="text-slate-600 text-sm">{t("workflow_step2_desc")}</p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl" style={{ background: '#06B6D4' }}>
                3
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t("workflow_step3")}</h3>
              <p className="text-slate-600 text-sm">{t("workflow_step3_desc")}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-8 md:max-w-3xl md:mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl" style={{ background: '#0891B2' }}>
                4
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t("workflow_step4")}</h3>
              <p className="text-slate-600 text-sm">{t("workflow_step4_desc")}</p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </div>

            <div className="text-center p-6 md:col-span-2">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl" style={{ background: '#1E3A8A' }}>
                5
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{t("workflow_step5")}</h3>
              <p className="text-slate-600 text-sm">{t("workflow_step5_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricelist */}
      <section id="harga" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">{t("pricing_title")}</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-8">
              {t("pricing_subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Starter */}
            <div className="pricing-card bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="mb-6">
                <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">{t("pricing_starter")}</h3>
                <p className="text-slate-500 text-sm mt-1">{t("pricing_starter_desc")}</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-slate-500">{t("pricing_from")}</span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-bold" style={{ color: '#1E3A8A' }}>Rp 500K</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {(["pricing_starter_f1", "pricing_starter_f2", "pricing_starter_f3", "pricing_starter_f4", "pricing_starter_f5", "pricing_starter_f6", "pricing_starter_f7"] as const).map((key) => (
                  <li key={key} className="flex items-start gap-2 text-slate-600 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                    {t(key)}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/6282328579038?text=Halo,%20saya%20tertarik%20dengan%20paket%20Starter" target="_blank" rel="noopener noreferrer" className="btn-pricing-outline w-full py-3 rounded-xl font-semibold text-center block">
                {t("pricing_starter_cta")}
              </a>
            </div>

            {/* Professional - Popular */}
            <div className="pricing-card pricing-popular bg-white rounded-2xl p-8 border-2 shadow-lg flex flex-col relative" style={{ borderColor: '#06B6D4' }}>
              <div className="pricing-badge absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #1E3A8A, #06B6D4)' }}>
                {t("pricing_popular")}
              </div>
              <div className="mb-6">
                <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">{t("pricing_pro")}</h3>
                <p className="text-slate-500 text-sm mt-1">{t("pricing_pro_desc")}</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-slate-500">{t("pricing_from")}</span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-bold" style={{ color: '#1E3A8A' }}>Rp 1.5 Jt</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {(["pricing_pro_f1", "pricing_pro_f2", "pricing_pro_f3", "pricing_pro_f4", "pricing_pro_f5", "pricing_pro_f6", "pricing_pro_f7", "pricing_pro_f8"] as const).map((key) => (
                  <li key={key} className="flex items-start gap-2 text-slate-600 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                    {t(key)}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/6282328579038?text=Halo,%20saya%20tertarik%20dengan%20paket%20Professional" target="_blank" rel="noopener noreferrer" className="btn-primary w-full py-3 rounded-xl font-semibold text-center block">
                {t("pricing_pro_cta")}
              </a>
            </div>

            {/* Business */}
            <div className="pricing-card bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="mb-6">
                <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">{t("pricing_biz")}</h3>
                <p className="text-slate-500 text-sm mt-1">{t("pricing_biz_desc")}</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-slate-500">{t("pricing_from")}</span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-bold" style={{ color: '#1E3A8A' }}>Rp 3.5 Jt</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {(["pricing_biz_f1", "pricing_biz_f2", "pricing_biz_f3", "pricing_biz_f4", "pricing_biz_f5", "pricing_biz_f6", "pricing_biz_f7", "pricing_biz_f8"] as const).map((key) => (
                  <li key={key} className="flex items-start gap-2 text-slate-600 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                    {t(key)}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/6282328579038?text=Halo,%20saya%20tertarik%20dengan%20paket%20Business" target="_blank" rel="noopener noreferrer" className="btn-pricing-outline w-full py-3 rounded-xl font-semibold text-center block">
                {t("pricing_biz_cta")}
              </a>
            </div>

            {/* Enterprise */}
            <div className="pricing-card bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="mb-6">
                <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">{t("pricing_ent")}</h3>
                <p className="text-slate-500 text-sm mt-1">{t("pricing_ent_desc")}</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-slate-500">{t("pricing_price_label")}</span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-bold" style={{ color: '#1E3A8A' }}>Custom</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {(["pricing_ent_f1", "pricing_ent_f2", "pricing_ent_f3", "pricing_ent_f4", "pricing_ent_f5", "pricing_ent_f6", "pricing_ent_f7"] as const).map((key) => (
                  <li key={key} className="flex items-start gap-2 text-slate-600 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                    {t(key)}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/6282328579038?text=Halo,%20saya%20tertarik%20dengan%20paket%20Enterprise" target="_blank" rel="noopener noreferrer" className="btn-pricing-outline w-full py-3 rounded-xl font-semibold text-center block">
                {t("pricing_ent_cta")}
              </a>
            </div>

          </div>
          <p className="text-center text-slate-500 text-sm mt-10">
            {t("pricing_note")}
          </p>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-24 hero-gradient">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("tentang_title")}</h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              {t("tentang_desc")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
                {t("tentang_visi")}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {t("tentang_visi_desc")}
              </p>
            </div>
            {/* Misi */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" />
                </svg>
                {t("tentang_misi")}
              </h3>
              <ul className="text-blue-100 space-y-3">
                {(["tentang_misi_1", "tentang_misi_2", "tentang_misi_3", "tentang_misi_4", "tentang_misi_5", "tentang_misi_6"] as const).map((key) => (
                  <li key={key} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">{t("testimoni_title")}</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-8">
              {t("testimoni_subtitle")}
            </p>
          </div>
        </div>
        <div className="testimoni-wrapper">
          <div className="testimoni-track">
            {[0, 1].map((setIndex) =>
              ([
                { nameKey: "testimoni_1_name", textKey: "testimoni_1_text", initials: "BS", gradient: "linear-gradient(135deg, #1E3A8A, #2563EB)" },
                { nameKey: "testimoni_2_name", textKey: "testimoni_2_text", initials: "SD", gradient: "linear-gradient(135deg, #06B6D4, #0891B2)" },
                { nameKey: "testimoni_3_name", textKey: "testimoni_3_text", initials: "AR", gradient: "linear-gradient(135deg, #7C3AED, #6D28D9)" },
                { nameKey: "testimoni_4_name", textKey: "testimoni_4_text", initials: "LP", gradient: "linear-gradient(135deg, #EC4899, #DB2777)" },
                { nameKey: "testimoni_5_name", textKey: "testimoni_5_text", initials: "RP", gradient: "linear-gradient(135deg, #F59E0B, #D97706)" },
                { nameKey: "testimoni_6_name", textKey: "testimoni_6_text", initials: "DF", gradient: "linear-gradient(135deg, #10B981, #059669)" },
              ] as const).map((item, i) => (
                <div key={`${setIndex}-${i}`} className="testimoni-card">
                  <span className="quote-icon">&ldquo;</span>
                  <div className="testimoni-stars">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="testimoni-text">
                    {t(item.textKey)}
                  </p>
                  <div className="testimoni-author">
                    <div className="testimoni-avatar" style={{ background: item.gradient }}>
                      {item.initials}
                    </div>
                    <div className="testimoni-author-info">
                      <h4>{t(item.nameKey)}</h4>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="kontak" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">{t("kontak_title")}</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-8 mb-10">
            {t("kontak_subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:purwaweb14@gmail.com"
              className="btn-primary px-10 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              {t("kontak_email")}
            </a>
            <a
              href="https://wa.me/6282328579038"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 border-2 hover:bg-slate-50 transition-colors"
              style={{ borderColor: '#1E3A8A', color: '#1E3A8A' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <a href="#" className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="PurwaWeb Logo" width={36} height={36} />
                <span className="text-2xl font-bold">Purwa<span style={{ color: '#06B6D4' }}>Web</span></span>
              </a>
              <p className="text-slate-400">
                {t("footer_tagline")}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t("footer_layanan")}</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#layanan" className="hover:text-cyan-400 transition-colors">{t("layanan_web")}</a></li>
                <li><a href="#layanan" className="hover:text-cyan-400 transition-colors">Mobile App</a></li>
                <li><a href="#layanan" className="hover:text-cyan-400 transition-colors">{t("layanan_desktop")}</a></li>
                <li><a href="#layanan" className="hover:text-cyan-400 transition-colors">Maintenance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t("footer_kontak")}</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  purwaweb14@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  +62 823-2857-9038
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>{t("footer_copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
