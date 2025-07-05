import React from 'react';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111] border-r border-white/10 p-6 overflow-y-auto h-screen sticky top-0 hidden md:block">
        <nav className="flex flex-col gap-1 text-sm">
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Getting Started</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Installation</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Project Structure</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Layouts and Pages</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Linking and Navigating</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Server and Client Components</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10 flex items-center gap-1">Partial Prerendering <span className="text-xs">🧪</span></a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Fetching Data</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Updating Data</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Caching and Revalidating</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Error Handling</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">CSS</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Image Optimization</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Font Optimization</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Metadata and OG images</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Route Handlers and Middleware</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Deploying</a>
          <a href="#" className="py-1 px-2 rounded hover:bg-white/10">Upgrading</a>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        {children}
      </main>
    </div>
  );
} 