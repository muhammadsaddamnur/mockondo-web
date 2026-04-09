import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { Download, Github } from 'lucide-react';
import DocsSidebar from './DocsSidebar';
import { sections } from './sections';

const contentDir = path.join(process.cwd(), 'app/docs/content');

function readSection(id: string): string {
  try {
    return fs.readFileSync(path.join(contentDir, `${id}.md`), 'utf-8');
  } catch {
    return '';
  }
}

const mdComponents = {
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-base font-semibold text-white mt-10 mb-3">{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="text-sm font-semibold text-[#ccc] mt-7 mb-2">{children}</h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="text-sm text-[#888] leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="space-y-1.5 text-sm text-[#888] list-disc list-inside mb-4">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="space-y-1.5 text-sm text-[#888] list-decimal list-inside mb-4">{children}</ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="text-[#ccc] font-medium">{children}</strong>
  ),
  code: ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    const isBlock = className?.includes('language-');
    if (isBlock) {
      return (
        <code className="block bg-[#111] border border-white/6 rounded-lg px-4 py-3 font-mono text-xs text-[#ccc] leading-relaxed whitespace-pre-wrap overflow-x-auto">
          {children}
        </code>
      );
    }
    return (
      <code className="text-[#4ec9b0] bg-[#4ec9b0]/8 px-1.5 py-0.5 rounded text-xs font-mono">{children}</code>
    );
  },
  pre: ({ children }: { children?: React.ReactNode }) => (
    <pre className="my-4">{children}</pre>
  ),
  table: ({ children }: { children?: React.ReactNode }) => (
    <div className="overflow-x-auto rounded-lg border border-white/6 my-4">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: { children?: React.ReactNode }) => (
    <thead className="border-b border-white/6">{children}</thead>
  ),
  th: ({ children }: { children?: React.ReactNode }) => (
    <th className="text-left px-4 py-2.5 text-xs font-medium text-[#666] uppercase tracking-wide">{children}</th>
  ),
  td: ({ children }: { children?: React.ReactNode }) => (
    <td className="px-4 py-2.5 text-xs text-[#888] font-mono border-b border-white/4 last:border-0">{children}</td>
  ),
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <div className="flex gap-3 px-4 py-3 rounded-lg bg-[#4ec9b0]/6 border border-[#4ec9b0]/15 text-[#4ec9b0] text-xs my-4">
      <span className="shrink-0 mt-0.5">ℹ</span>
      <div className="[&>p]:mb-0 [&>p]:text-[#4ec9b0]">{children}</div>
    </div>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#4fc1ff] hover:text-white underline underline-offset-2 transition-colors">
      {children}
    </a>
  ),
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e5e5e5]">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/6 bg-[#0d0d0d]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-[#555]">
            <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors">
              <img src="/icon.png" alt="Mockondo" className="w-6 h-6 rounded-md" />
              <span className="font-semibold text-white">Mockondo</span>
            </Link>
            <span>/</span>
            <span className="text-[#555]">Docs</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-[#888]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <a
              href="https://github.com/muhammadsaddamnur/mockondo"
              target="_blank" rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <div className="flex items-center gap-2">
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
          </nav>
        </div>
      </header>

      {/* Body: sidebar + content */}
      <div className="flex" style={{ height: 'calc(100vh - 57px)' }}>
        <DocsSidebar />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-8 py-10 pb-24">

            {/* Page title */}
            <div className="mb-10 pb-8 border-b border-white/6">
              <h1 className="text-2xl font-bold text-white mb-2">Documentation</h1>
              <p className="text-sm text-[#666]">
                Everything you need to know about Mockondo a no-code mock server desktop app.
              </p>
            </div>

            {/* Sections */}
            {sections.map((s) => {
              const content = readSection(s.id);
              return (
                <section key={s.id} id={s.id} className="mb-14 scroll-mt-6 pb-14 border-b border-white/4 last:border-0">
                  <div className="flex items-center gap-2.5 mb-5">
                    <s.icon className="w-4 h-4 text-[#4ec9b0] shrink-0" />
                    <h2 className="text-lg font-semibold text-white">{s.label}</h2>
                  </div>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={mdComponents as Record<string, React.ElementType>}
                  >
                    {content}
                  </ReactMarkdown>
                </section>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
