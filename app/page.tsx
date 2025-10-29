'use client';

import { motion } from 'framer-motion';
import { Server, Terminal, PackageCheck } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      {/* Header */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/icon.png" alt="Icon" className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg" />
          <div>
            <div className="text-lg font-semibold">Mockondo</div>
            <div className="text-xs text-gray-400">
              A Customizable Mock Server for Frontend Developers
            </div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          {/* <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#interpolation" className="hover:text-white">
            Interpolation
          </a>
          <a href="#roadmap" className="hover:text-white">
            Roadmap
          </a> */}
        </nav>
        {/* <div className="flex items-center gap-3">
          <a
            href="#get"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm shadow"
          >
            Get Mockondo
          </a>
        </div> */}
      </header>

      {/* Hero Showcase */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
          {/* Left Content */}
          <div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.08 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              No Code. No Hassle. Just Realistic Mock APIs.
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.18 }}
              className="mt-4 text-gray-300 max-w-xl"
            >
              Mockondo helps frontend developers easily create and test APIs
              without writing backend code. With an intuitive interface,
              powerful simulation features, and multi-project support, Mockondo
              accelerates your frontend workflow with realistic and flexible
              mock data.
            </motion.p>

            <div className="flex gap-3 mt-6">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/muhammadsaddamnur/mockondo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white font-medium shadow border border-gray-700 hover:bg-gray-700"
                aria-label="View on GitHub"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.26-1.68-1.26-1.68-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.74.4-1.23.72-1.51-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.44-2.71 5.41-5.29 5.69.41.35.77 1.04.77 2.11 0 1.52-.01 2.75-.01 3.12 0 .3.21.66.79.55C20.71 21.38 24 17.08 24 12 24 5.73 18.27.5 12 .5z" />
                </svg>
                <span>View on GitHub</span>
              </motion.a>
              {/* <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#docs"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-gray-700 text-gray-200"
              >
                Documentation
              </motion.a> */}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                {
                  icon: Server,
                  color: 'text-indigo-400',
                  title: 'HTTP Server',
                  desc: 'Run mock server on any port',
                },
                {
                  icon: Terminal,
                  color: 'text-emerald-400',
                  title: 'Simple GUI',
                  desc: 'No coding required',
                },
                {
                  icon: PackageCheck,
                  color: 'text-yellow-400',
                  title: 'Open Source',
                  desc: 'MIT License',
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.28 + i * 0.06 }}
                  className="p-3 rounded-lg bg-gray-800 border border-gray-800"
                >
                  <div className="flex items-center gap-3">
                    <f.icon className={`w-5 h-5 ${f.color}`} />
                    <div>
                      <div className="text-sm font-medium">{f.title}</div>
                      <div className="text-xs text-gray-400">{f.desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Live Preview */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.18 }}
              className="rounded-2xl bg-gradient-to-br from-[#0f1724] to-[#0b1220] p-6 shadow-2xl border border-gray-800"
            >
              {/* <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-300">Live Mock Preview</div>
                <div className="text-xs text-gray-500">localhost:8080</div>
              </div> */}

              <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono overflow-hidden relative">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.24 }}
                >
                <img src="/screenshot.png" alt="Icon" className="bg-gray-900 rounded-lg p-4 text-sm font-mono overflow-hidden relative" />
                </motion.div>

                <motion.div
                  className="absolute -top-6 -left-6 opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 30 }}
                >
                  <svg
                    width="220"
                    height="220"
                    viewBox="0 0 220 220"
                    fill="none"
                  >
                    <circle
                      cx="110"
                      cy="110"
                      r="100"
                      stroke="rgba(99,102,241,0.12)"
                      strokeWidth="18"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.36 }}
              className="mt-6 text-xs text-gray-500"
            >
              Tip: use <span className="text-gray-300">{`{{ pagination.data }}`}</span> and{' '}
              <span className="text-gray-300">{`{{ request.url.query.page }}`}</span>
            </motion.div> */}
          </div>
        </section>

        {/* 🚀 Key Features */}
        <section id="features" className="mt-20">
          {/* <h3 className="text-2xl font-semibold mb-6">🚀 Key Features</h3> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ['HTTP Server', 'Run mock server on custom ports.'],
              ['Pagination Simulation', 'Simulate paginated responses.'],
              ['Delay Response', 'Add artificial delay for realism.'],
              ['Multiple Projects', 'Manage many APIs easily.'],
              ['Proxy URL', 'Forward unmatched requests.'],
              ['Random Response', 'Generate dynamic data.'],
            ].map(([t, d], i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="p-5 rounded-xl bg-gray-800 border border-gray-700"
              >
                <div className="font-medium">{t}</div>
                <div className="text-sm text-gray-400 mt-2">{d}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-800 pt-8 pb-20 text-sm text-gray-400">
          <div className="flex items-center justify-between">
            <div>📜 MIT License © 2025 — Mockondo Team</div>
            <div className="space-x-4">
              <a href="https://github.com/muhammadsaddamnur/mockondo">GitHub</a>
              {/* <a href="#">Issues</a>
              <a href="#">Changelog</a> */}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
