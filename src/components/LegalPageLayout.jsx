import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function LegalPageLayout({ breadcrumbs, heading, lastUpdated, children }) {
  return (
    <div className="bg-brand-bg min-h-screen font-sans text-text-main">
      
      {/* PAGE TITLE BANNER */}
      <section className="relative min-h-[380px] md:min-h-[420px] flex items-center bg-cover bg-center py-16 px-6 text-white overflow-hidden" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/clinic_room.png')` }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary-darker/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-darker/90 via-primary-darker/40 to-transparent"></div>
        
        <div className="w-full max-w-4xl mx-auto space-y-4 relative z-10 text-left">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-teal-200 font-medium">
            <Link to="/" className="hover:text-white transition">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-teal-200/50" />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-white font-semibold">{crumb}</span>
                ) : (
                  <span className="text-teal-200">{crumb}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            {heading}
          </h1>
        </div>
      </section>

      {/* CONTENT CONTAINER */}
      <section className="py-16 md:py-24 px-6 bg-brand-bg">
        <div className="max-w-212.5 mx-auto">
          <div className="bg-white rounded-2xl border border-primary/5 shadow-soft p-8 md:p-12 text-left space-y-8">
            
            {/* Last Updated Badge */}
            {lastUpdated && (
              <span className="inline-block px-3 py-1 bg-slate-100 text-text-secondary text-xs font-semibold rounded-full tracking-wide">
                Last Updated: {lastUpdated}
              </span>
            )}

            {/* Page Content (children) */}
            {children}

          </div>
        </div>
      </section>

    </div>
  );
}
