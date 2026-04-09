'use client';

import { AnimatePresence, motion } from 'framer-motion';

import {
  Server, Radio, HardDrive, FileUp, FileDown,
  WifiOff, Braces, Download, ArrowRight, Github,
  ExternalLink, Layers, Send, Bot,
} from 'lucide-react';
import Link from 'next/link';
import Slider from './slider';

const features = [
  { icon: Server,    title: 'Mock HTTP Server',         desc: 'Define endpoints, status codes, headers, and response bodies with zero backend code.' },
  { icon: Layers,    title: 'Mock Pagination',           desc: 'Simulate paginated API responses with customizable page sizes and total counts.' },
  { icon: Radio,     title: 'Mock WebSocket Server',     desc: 'Simulate real-time connections for chat, notifications, and live update flows.' },
  { icon: HardDrive, title: 'Mock Storage (S3)',         desc: 'S3-compatible local storage for testing file uploads and bucket operations.' },
  { icon: FileUp,    title: 'Export/Import OpenAPI',     desc: 'Import OpenAPI specs to generate mocks or export definitions as valid documents.' },
  { icon: FileDown,  title: 'Export/Import AsyncAPI',    desc: 'Full AsyncAPI support for event-driven architectures. Import and export effortlessly.' },
  { icon: WifiOff,   title: 'Offline First',             desc: 'Runs entirely on your machine. No internet, no account, no cloud required.' },
  { icon: Braces,    title: 'Interpolation System',      desc: 'Dynamic responses with ${random.*}, ${request.*}, and custom data expressions.' },
  { icon: Send,      title: 'HTTP & WebSocket Client',   desc: 'Built-in alternative to Postman. Test endpoints without switching context.' },
  { icon: Bot,       title: 'AI Agent Integration',      desc: 'Describe your API in plain language and let AI generate the mock server for you.' },
];

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: (i: number) => ({
    y: 0, opacity: 1,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0, 0, 0.2, 1] as const },
  }),
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e5e5e5]">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/6 bg-[#0d0d0d]/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src="/icon.png" alt="Mockondo" className="w-7 h-7 rounded-lg" />
            <span className="text-sm font-semibold text-white">Mockondo</span>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm text-[#888]">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
            <a href="https://github.com/muhammadsaddamnur/mockondo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/sponsors/muhammadsaddamnur"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-[#ea4aaa]/30 text-[#ea4aaa] text-xs font-semibold hover:bg-[#ea4aaa]/10 transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
              </svg>
              Sponsor
            </a>
            <a
              href="https://github.com/muhammadsaddamnur/mockondo/releases"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white text-[#0d0d0d] text-xs font-semibold hover:bg-[#e0e0e0] transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Download
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-[#888] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ec9b0]" />
              Open Source
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white">
              Mock APIs.<br />
              <span className="text-gradient">No backend needed.</span>
            </h1>

            <p className="mt-6 text-lg text-[#888] max-w-xl mx-auto leading-relaxed">
              Mockondo is an offline-first desktop app for frontend developers to create
              realistic HTTP, WebSocket, and S3 mock servers without writing a single line of backend code.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
              <a
                href="https://github.com/muhammadsaddamnur/mockondo/releases"
                target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#0d0d0d] text-sm font-semibold hover:bg-[#e0e0e0] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download for macOS
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://github.com/muhammadsaddamnur/mockondo"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-sm text-[#ccc] hover:text-white hover:border-white/20 transition-colors"
              >
                <Github className="w-4 h-4" /> View on GitHub
                <ExternalLink className="w-3 h-3 text-[#555]" />
              </a>
            </div>
          </motion.div>

          {/* Screenshot */}
          <Slider />
        </section>

        {/* Features */}
        <section id="features" className="max-w-5xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Everything in one place
            </h2>
            <p className="mt-3 text-[#888] max-w-lg">
              A complete local mocking toolkit no internet, no config files, no hassle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6 rounded-xl overflow-hidden border border-white/6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#0d0d0d] p-6 hover:bg-[#141414] transition-colors group"
              >
                <f.icon className="w-5 h-5 text-[#4ec9b0] mb-4" />
                <h3 className="text-sm font-semibold text-white mb-1.5">{f.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GitHub Sponsor */}
        <section className="max-w-5xl mx-auto px-6 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[#ea4aaa]/20 bg-[#ea4aaa]/5 px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ea4aaa]/15 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#ea4aaa]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Support Mockondo</p>
                <p className="text-xs text-[#888] mt-0.5">Help keep this project free and actively maintained.</p>
              </div>
            </div>
            <a
              href="https://github.com/sponsors/muhammadsaddamnur"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#ea4aaa] hover:bg-[#d03d98] text-white text-sm font-semibold transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
              </svg>
              Sponsor on GitHub
            </a>
          </motion.div>
        </section>

        {/* CTA */}
        <section id="download" className="max-w-5xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/8 bg-[#111] px-8 py-14 sm:px-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Start mocking in seconds
            </h2>
            <p className="mt-3 text-[#888] max-w-md mx-auto">
              Download Mockondo for macOS and ship frontend faster no backend, no internet required.
            </p>
            <a
              href="https://github.com/muhammadsaddamnur/mockondo/releases"
              target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-white text-[#0d0d0d] text-sm font-semibold hover:bg-[#e0e0e0] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for macOS
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <p className="mt-4 text-xs text-[#444]">macOS 10.15+ · Apple Silicon supported</p>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="max-w-5xl mx-auto px-6 py-8 border-t border-white/6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#444]">
            <div className="flex items-center gap-2">
              <img src="/icon.png" alt="Mockondo" className="w-4 h-4 rounded" />
              <span>© 2025 Mockondo</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="https://github.com/muhammadsaddamnur/mockondo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a href="https://github.com/muhammadsaddamnur/mockondo/releases" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5" /> Releases
              </a>
              <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
