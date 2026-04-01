'use client';

import { motion } from 'framer-motion';
import {
  Server,
  Radio,
  HardDrive,
  FileUp,
  FileDown,
  WifiOff,
  Braces,
  Download,
  ArrowRight,
  Github,
  ExternalLink,
  Layers,
  Send,
} from 'lucide-react';

const features = [
  {
    icon: Server,
    color: 'from-indigo-500 to-blue-500',
    iconColor: 'text-indigo-400',
    title: 'Mock HTTP Server',
    desc: 'Run realistic HTTP mock servers on any custom port. Define endpoints, status codes, headers, and response bodies with zero backend code.',
  },
  {
    icon: Layers,
    color: 'from-blue-500 to-sky-500',
    iconColor: 'text-blue-400',
    title: 'Mock Pagination',
    desc: 'Simulate paginated API responses with customizable page sizes, total counts, and navigation perfect for testing infinite scroll and data tables.',
  },
  {
    icon: Radio,
    color: 'from-emerald-500 to-teal-500',
    iconColor: 'text-emerald-400',
    title: 'Mock WebSocket Server',
    desc: 'Simulate real-time WebSocket connections for chat, notifications, live updates, and any bidirectional communication flow.',
  },
  {
    icon: HardDrive,
    color: 'from-orange-500 to-amber-500',
    iconColor: 'text-orange-400',
    title: 'Mock Storage (S3)',
    desc: 'S3-compatible mock storage for testing file uploads, downloads, and bucket operations without cloud dependencies.',
  },
  {
    icon: FileUp,
    color: 'from-violet-500 to-purple-500',
    iconColor: 'text-violet-400',
    title: 'Export/Import OpenAPI',
    desc: 'Seamlessly import existing OpenAPI specs to generate mocks, or export your mock definitions as standards-compliant OpenAPI documents.',
  },
  {
    icon: FileDown,
    color: 'from-pink-500 to-rose-500',
    iconColor: 'text-pink-400',
    title: 'Export/Import AsyncAPI',
    desc: 'Full AsyncAPI specification support for event-driven architectures. Import and export async API definitions effortlessly.',
  },
  {
    icon: WifiOff,
    color: 'from-cyan-500 to-sky-500',
    iconColor: 'text-cyan-400',
    title: 'Offline First',
    desc: 'Works entirely without an internet connection. All mock servers run locally on your machine for maximum privacy and speed.',
  },
  {
    icon: Braces,
    color: 'from-yellow-500 to-lime-500',
    iconColor: 'text-yellow-400',
    title: 'Interpolation Custom Data',
    desc: 'Dynamic response data with template interpolation. Use variables like ${faker.name}, ${request.query}, and custom expressions.',
  },
  {
    icon: Send,
    color: 'from-fuchsia-500 to-pink-500',
    iconColor: 'text-fuchsia-400',
    title: 'HTTP & WebSocket Client',
    desc: 'A built-in alternative to P*stman. Send requests and test your WebSocket connections directly within the app without switching context.',
  },
];

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#060a14] text-gray-100 overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 animate-pulse-glow" />
        <div className="absolute top-[30%] right-[-15%] w-[500px] h-[500px] rounded-full bg-purple-600/10 animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-cyan-600/8 animate-pulse-glow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="/icon.png"
                alt="Mockondo"
                className="w-10 h-10 rounded-xl shadow-lg shadow-indigo-500/20"
              />
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-sm -z-10" />
            </div>
            <span className="text-lg font-bold tracking-tight">Mockondo</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
            <a href="#download" className="hover:text-white transition-colors duration-200">Download</a>
            <a
              href="https://github.com/muhammadsaddamnur/mockondo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200 flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </nav>

          <a
            href="#download"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:brightness-110 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-gray-300 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open Source · MIT License
              </motion.div> */}

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
              >
                No Code. No Hassle.{' '}
                <span className="text-gradient">Just Realistic Mock APIs.</span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed"
              >
                Mockondo helps frontend developers easily create and test APIs
                without writing backend code. HTTP, WebSocket, S3 storage
                all in one powerful, offline-first desktop app.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <a
                  href="https://github.com/muhammadsaddamnur/mockondo/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:brightness-110 transition-all duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download for macOS
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="https://github.com/muhammadsaddamnur/mockondo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl glass-card text-gray-200 font-medium hover:bg-white/10 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                </a>
              </motion.div>

              {/* Quick stats
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-8 mt-10"
              >
                {[
                  { label: 'Features', value: '8+' },
                  { label: 'Platforms', value: 'macOS' },
                  { label: 'License', value: 'MIT' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-xl font-bold text-white">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div> */}
            </div>

            {/* Right - App Screenshot */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              {/* Mac window frame */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white/10">
                {/* Title bar */}
                <div className="bg-[#1a1f2e] px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-500">Mockondo</div>
                </div>
                {/* Screenshot */}
                <img
                  src="/screenshot.png"
                  alt="Mockondo app screenshot"
                  className="w-full"
                />
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-2xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Everything you need to{' '}
              <span className="text-gradient">mock anything</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
              From HTTP servers to S3 storage, Mockondo gives you a complete local
              mocking toolkit no internet required.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative p-6 rounded-2xl glass-card hover:border-white/12 transition-all duration-300 ${i === features.length - 1 && features.length % 3 === 1
                  ? 'md:col-span-2 lg:col-span-1'
                  : ''
                  }`}
              >
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <f.icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none`}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Download CTA */}
        <section id="download" className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20" />
            <div className="absolute inset-0 glass-card" />

            <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to accelerate your{' '}
                <span className="text-gradient">frontend workflow</span>?
              </h2>
              <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
                Download Mockondo for macOS and start mocking APIs, WebSockets,
                and storage all offline, all free.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <a
                  href="https://github.com/muhammadsaddamnur/mockondo/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:brightness-110 transition-all duration-200"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download for macOS
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <p className="mt-6 text-sm text-gray-500">
                Requires macOS 10.15+ · Apple Silicon supported
              </p>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <img src="/icon.png" alt="Mockondo" className="w-5 h-5 rounded" />
              <span>© 2025 Mockondo</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/muhammadsaddamnur/mockondo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://github.com/muhammadsaddamnur/mockondo/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                Releases
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
