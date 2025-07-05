import React from 'react';

const Features = () => {
  return (
    <section className="relative py-24 px-4 lg:px-0 bg-black flex flex-col items-center">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text and tags */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get started in seconds <span className="text-white/60 text-lg font-normal">Deploy Next.js to Vercel</span>
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Starter", "Ecommerce", "Blog", "AI", "Portfolio", "SaaS", "Multi-tenant App"].map((tag, i) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${["bg-purple-700/80","bg-green-700/80","bg-yellow-700/80","bg-blue-700/80","bg-fuchsia-700/80","bg-green-900/80","bg-orange-700/80"][i]}
                  text-white`}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-white/80 mb-2">
            Vercel is a frontend cloud from the creators of Next.js, making it easy to get started with Next.js quickly.
          </p>
          <p className="text-white/60 mb-6">
            Jumpstart your Next.js development with pre-built solutions from Vercel and our community.
          </p>
          <a
            href="https://vercel.com/templates"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Deploy a Template on Vercel &rarr;
          </a>
        </div>
        {/* Right: Card showcase */}
        <div className="flex-1 flex justify-center relative min-h-[300px]">
          {/* Example cards */}
          <div className="absolute left-8 top-8 w-64 h-40 bg-white/10 rounded-xl shadow-lg rotate-[-8deg] z-0"></div>
          <div className="absolute left-16 top-16 w-64 h-40 bg-white/20 rounded-xl shadow-lg rotate-[-4deg] z-10"></div>
          <div className="relative w-72 h-48 bg-white rounded-xl shadow-2xl z-20 flex flex-col justify-end p-6">
            <div className="font-bold text-black text-lg mb-1">Next.js Boilerplate</div>
            <div className="text-black/70 text-sm">A Next.js starter from create-next-app.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 