'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { sections } from './sections';

function SidebarLinks({ activeSection, onSelect }: { activeSection: string; onSelect: (id: string) => void }) {
  return (
    <div className="py-6 px-4">
      <p className="text-xs text-[#444] uppercase tracking-widest px-2 mb-3">On this page</p>
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => onSelect(s.id)}
          className={`w-full text-left flex items-center gap-2 px-2 py-1.5 rounded text-xs transition-colors duration-150 ${
            activeSection === s.id
              ? 'text-white font-medium'
              : 'text-[#555] hover:text-[#999]'
          }`}
        >
          <s.icon className={`w-3 h-3 shrink-0 ${activeSection === s.id ? 'text-[#4ec9b0]' : 'text-[#444]'}`} />
          {s.label}
        </button>
      ))}
    </div>
  );
}

export default function DocsSidebar() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setSidebarOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-52 shrink-0 border-r border-white/6 overflow-y-auto">
        <SidebarLinks activeSection={activeSection} onSelect={scrollTo} />
      </aside>

      {/* Mobile toggle */}
      <div className="md:hidden fixed top-3.5 right-4 z-50">
        <button
          className="p-1.5 rounded border border-white/10 bg-[#0d0d0d] text-[#888]"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <div className="absolute inset-0 bg-black/70" onClick={() => setSidebarOpen(false)} />
          <motion.div
            initial={{ x: -16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute left-0 top-0 bottom-0 w-56 bg-[#0d0d0d] border-r border-white/6 overflow-y-auto pt-14"
          >
            <SidebarLinks activeSection={activeSection} onSelect={scrollTo} />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
