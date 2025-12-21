import Image from "next/image";

export default function Home() {
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
              <a href="#layanan" className="text-slate-600 hover:text-[#1E3A8A] transition-colors font-medium">Layanan</a>
              <a href="#keunggulan" className="text-slate-600 hover:text-[#1E3A8A] transition-colors font-medium">Keunggulan</a>
              <a href="#workflow" className="text-slate-600 hover:text-[#1E3A8A] transition-colors font-medium">Alur Kerja</a>
              <a href="#tentang" className="text-slate-600 hover:text-[#1E3A8A] transition-colors font-medium">Tentang Kami</a>
              <a href="#kontak" className="btn-primary px-6 py-2.5 rounded-full font-semibold">
                Hubungi Kami
              </a>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Solusi Digital Terpercaya untuk Web, Mobile, dan Desktop
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Partner teknologi profesional yang menghadirkan solusi aplikasi berkualitas tinggi,
                scalable, dan didukung tim berpengalaman.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#kontak" className="btn-primary px-8 py-4 rounded-full font-semibold text-lg text-center">
                  Konsultasi Gratis
                </a>
                <a href="#layanan" className="btn-outline px-8 py-4 rounded-full font-semibold text-lg text-center">
                  Lihat Layanan
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
                    <p className="text-2xl font-semibold">Kualitas Terjamin</p>
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
            <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-8">
              Kami menyediakan solusi teknologi lengkap untuk membantu bisnis Anda berkembang di era digital
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
              <h3 className="text-xl font-bold text-slate-800 mb-3">Web Development</h3>
              <p className="text-slate-600">Website responsif dan aplikasi web modern dengan teknologi terkini</p>
            </div>

            {/* Mobile App */}
            <div className="card-hover bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Mobile App Development</h3>
              <p className="text-slate-600">Aplikasi mobile iOS & Android yang intuitif dan performa tinggi</p>
            </div>

            {/* Desktop App */}
            <div className="card-hover bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Desktop Application</h3>
              <p className="text-slate-600">Aplikasi desktop cross-platform yang powerful dan reliable</p>
            </div>

            {/* Maintenance */}
            <div className="card-hover bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Maintenance & Support</h3>
              <p className="text-slate-600">Dukungan teknis berkelanjutan dan pemeliharaan sistem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Keunggulan */}
      <section id="keunggulan" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-8">
              Keunggulan yang menjadikan PurwaWeb sebagai partner teknologi terpercaya
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tim Berpengalaman */}
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E3A8A, #06B6D4)' }}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Tim Berpengalaman</h3>
              <p className="text-slate-600">Developer profesional dengan pengalaman bertahun-tahun di industri</p>
            </div>

            {/* Teknologi Terkini */}
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E3A8A, #06B6D4)' }}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Teknologi Terkini</h3>
              <p className="text-slate-600">Menggunakan stack teknologi modern dan best practices terbaru</p>
            </div>

            {/* Proses Terstruktur */}
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E3A8A, #06B6D4)' }}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Proses Kerja Terstruktur</h3>
              <p className="text-slate-600">Metodologi pengembangan yang jelas dan terukur</p>
            </div>

            {/* Support Berkelanjutan */}
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E3A8A, #06B6D4)' }}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Support Berkelanjutan</h3>
              <p className="text-slate-600">Dukungan teknis dan maintenance setelah project selesai</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">Alur Kerja Kami</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-8">
              Proses pengembangan yang terstruktur untuk hasil optimal
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {/* Step 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl" style={{ background: '#1E3A8A' }}>
                1
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Konsultasi & Analisis</h3>
              <p className="text-slate-600 text-sm">Memahami kebutuhan dan tujuan bisnis Anda</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl" style={{ background: '#2563EB' }}>
                2
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Perencanaan & Desain</h3>
              <p className="text-slate-600 text-sm">Merancang arsitektur dan UI/UX terbaik</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl" style={{ background: '#06B6D4' }}>
                3
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Development</h3>
              <p className="text-slate-600 text-sm">Membangun aplikasi dengan standar tinggi</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-8 md:max-w-3xl md:mx-auto">
            {/* Step 4 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl" style={{ background: '#0891B2' }}>
                4
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Testing & Deployment</h3>
              <p className="text-slate-600 text-sm">Pengujian menyeluruh dan peluncuran</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </div>

            {/* Step 5 */}
            <div className="text-center p-6 md:col-span-2">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl" style={{ background: '#1E3A8A' }}>
                5
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Maintenance</h3>
              <p className="text-slate-600 text-sm">Dukungan berkelanjutan pasca peluncuran</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-24 hero-gradient">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tentang PurwaWeb</h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              PurwaWeb adalah penyedia jasa pembuatan website yang terpercaya, terjangkau, dan berkualitas.
              Kami siap membantu UMKM dan bisnis di Indonesia membangun kehadiran digital yang profesional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
                Visi
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Menjadi penyedia jasa pembuatan website yang terpercaya, terjangkau, dan berkualitas,
                serta mampu membantu UMKM dan bisnis di Indonesia membangun kehadiran digital yang
                profesional dan berkelanjutan.
              </p>
            </div>
            {/* Misi */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" />
                </svg>
                Misi
              </h3>
              <ul className="text-blue-100 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Menyediakan layanan pembuatan website profesional dengan harga yang terjangkau dan fleksibel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Menghasilkan website yang fungsional, responsif, dan sesuai dengan kebutuhan setiap klien.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Mengutamakan kualitas desain, struktur, dan pengalaman pengguna.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Memberikan proses kerja yang transparan, terstruktur, dan tepat waktu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Menyediakan konsultasi dan dukungan teknis untuk membantu klien memahami dan mengelola website mereka.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Menjadi mitra digital yang dapat diandalkan bagi UMKM, bisnis, dan personal.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="kontak" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">Siap Memulai Project Anda?</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-8 mb-10">
            Konsultasikan kebutuhan aplikasi Anda dengan tim kami secara gratis.
            Kami siap membantu mewujudkan ide Anda menjadi solusi digital yang nyata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:purwaweb14@gmail.com"
              className="btn-primary px-10 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Our Email
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
                Partner digital terpercaya untuk solusi teknologi berkelanjutan
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#layanan" className="hover:text-cyan-400 transition-colors">Web Development</a></li>
                <li><a href="#layanan" className="hover:text-cyan-400 transition-colors">Mobile App</a></li>
                <li><a href="#layanan" className="hover:text-cyan-400 transition-colors">Desktop Application</a></li>
                <li><a href="#layanan" className="hover:text-cyan-400 transition-colors">Maintenance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
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
            <p>&copy; 2025 PurwaWeb. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
