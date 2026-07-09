import React, { useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight, CheckCircle, Clock, ArrowRight, Phone } from 'lucide-react';
import { treatments } from '../data/treatments';

export default function TreatmentPage() {
  const { slug } = useParams();

  const treatment = useMemo(() => treatments.find(t => t.slug === slug), [slug]);

  // Related treatments: pick 3 random others
  const related = useMemo(() => {
    if (!treatment) return [];
    const others = treatments.filter(t => t.slug !== slug);
    const shuffled = [...others].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, [slug, treatment]);

  // 404 redirect if slug doesn't match
  if (!treatment) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="bg-brand-bg min-h-screen font-sans text-text-main">
      
      {/* PAGE TITLE BANNER */}
      <section className="relative min-h-[380px] md:min-h-[420px] flex items-center bg-cover bg-center py-16 px-6 text-white overflow-hidden" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/rehab_exercise.png')` }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary-darker/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-darker/90 via-primary-darker/40 to-transparent"></div>
        
        <div className="w-full max-w-4xl mx-auto space-y-4 relative z-10 text-left">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-teal-200 font-medium flex-wrap">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3 h-3 text-teal-200/50" />
            <span className="text-teal-200">Treatments</span>
            <ChevronRight className="w-3 h-3 text-teal-200/50" />
            <span className="text-white font-semibold">{treatment.shortTitle || treatment.title}</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            {treatment.title}
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 md:py-24 px-6 bg-brand-bg">
        <div className="max-w-4xl mx-auto space-y-12 text-left">
          
          {/* Intro paragraph */}
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
            {treatment.intro}
          </p>

          {/* Body sections */}
          {treatment.sections && treatment.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="font-serif font-bold text-xl md:text-2xl text-primary-darker border-l-4 border-teal-600 pl-4">
                {section.heading}
              </h2>
              <p className="text-[1.05rem] leading-[1.8] text-slate-600">
                {section.content}
              </p>
            </div>
          ))}

          {/* Effective For (condition pills) */}
          {treatment.effectiveFor && treatment.effectiveFor.length > 0 && (
            <div className="bg-white rounded-2xl border border-primary/5 shadow-soft p-6 md:p-8 space-y-4">
              <h3 className="font-serif font-bold text-lg text-primary-darker">
                Effective For
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {treatment.effectiveFor.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3.5 py-1.5 bg-teal-50 text-primary border border-primary/10 text-xs font-semibold rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Session Info (amber info box) */}
          {treatment.sessionInfo && (
            <div className="bg-amber-50/60 border border-accent/15 rounded-2xl p-6 md:p-8 flex gap-4 items-start">
              <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-text-main">Session Information</h4>
                <p className="text-sm md:text-[0.95rem] leading-relaxed text-slate-600">
                  {treatment.sessionInfo}
                </p>
              </div>
            </div>
          )}

          {/* Rehabilitation Highlights (checklist) */}
          {treatment.highlights && treatment.highlights.length > 0 && (
            <div className="space-y-5">
              <h3 className="font-serif font-bold text-lg md:text-xl text-primary-darker">
                Rehabilitation Highlights
              </h3>
              <div className="space-y-3">
                {treatment.highlights.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+917737465987"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary border border-primary/20 hover:bg-primary/5 font-bold rounded-xl shadow-soft hover:-translate-y-0.5 transition-all duration-300 text-sm uppercase tracking-wider w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                Call Helpline
              </a>
              <a
                href="https://wa.me/917737465987?text=Hello%2C%20I%20want%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl shadow-soft hover:-translate-y-0.5 transition-all duration-300 text-sm uppercase tracking-wider w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Appointment
              </a>
            </div>

          {/* RELATED TREATMENTS */}
          {related.length > 0 && (
            <div className="pt-8 border-t border-primary/10 space-y-6">
              <h3 className="font-serif font-bold text-lg md:text-xl text-primary-darker">
                Related Treatments
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/treatments/${r.slug}`}
                    className="group bg-white rounded-xl border border-primary/5 shadow-soft p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-3"
                  >
                    <h4 className="font-serif font-bold text-sm md:text-base text-primary-darker group-hover:text-primary transition-colors">
                      {r.name}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                      {r.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
