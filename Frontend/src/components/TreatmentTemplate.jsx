import { Activity, ShieldCheck, Heart, Phone } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function TreatmentTemplate({ treatment }) {
  if (!treatment) return <div className="p-8 text-center">Treatment not found</div>;
  
  // Dynamically resolve icon if available
  const IconComponent = Icons[treatment.icon] || Activity;

  return (
    <div className="bg-brand-bg min-h-screen py-16 px-6 text-text-main font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Treatment Hero */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-primary/5 shadow-soft text-left flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left: Illustrative Treatment Image */}
          {treatment.image && (
            <div className="w-full md:w-80 h-52 md:h-auto overflow-hidden rounded-2xl border border-primary/10 shadow-sm shrink-0 relative">
              <img 
                src={`${import.meta.env.BASE_URL}${treatment.image}`} 
                alt={treatment.name} 
                className={`w-full h-full object-cover ${treatment.align || 'object-center'}`}
              />
              {/* Floating Badge/Icon over Image */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur w-10 h-10 rounded-xl border border-primary/10 shadow-soft flex items-center justify-center text-primary z-10">
                <IconComponent className="w-5 h-5" />
              </div>
            </div>
          )}
          
          <div className="space-y-4 flex-1 flex flex-col justify-center">
            <div>
              <span className="text-xs bg-accent/15 text-accent font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Specialized Treatment
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary-darker">{treatment.name}</h1>
            <p className="text-text-secondary leading-relaxed max-w-xl text-sm md:text-base">
              {treatment.shortDescription}
            </p>
          </div>
        </div>

        {/* Treatment Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-8 rounded-3xl border border-primary/5 shadow-soft space-y-4">
            <h3 className="font-serif font-bold text-2xl text-primary-dark flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary" /> Key Treatment Focus
            </h3>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Direct pain reduction and inflammation management using targeted protocols.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Restoring full mechanical alignment and active range of joint motion.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Custom therapeutic exercise routines to strengthen surrounding stabilizing muscles.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Long-term preventive advice to avoid injury recurrence in daily activities.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-primary/5 shadow-soft space-y-4">
            <h3 className="font-serif font-bold text-2xl text-primary-dark flex items-center gap-2">
              <Heart className="w-6 h-6 text-accent" /> Clinical Pathway
            </h3>
            <div className="relative pl-6 border-l-2 border-primary/20 space-y-6 text-sm">
              <div className="relative">
                <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                <h4 className="font-semibold text-primary-dark font-serif">Step 1: Clinical Assessment</h4>
                <p className="text-text-secondary text-xs">Biomechanical diagnostic evaluation and symptom mapping.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-white"></div>
                <h4 className="font-semibold text-primary-dark font-serif">Step 2: Targeted Therapy</h4>
                <p className="text-text-secondary text-xs">Customized clinical sessions utilizing advanced modalities.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                <h4 className="font-semibold text-primary-dark font-serif">Step 3: Stabilization & Home Plan</h4>
                <p className="text-text-secondary text-xs">Supervised functional exercises and custom stretching routines.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-linear-to-tr from-primary-dark to-primary-darker p-8 md:p-12 rounded-3xl text-white text-center space-y-6 shadow-soft">
          <h2 className="text-2xl md:text-3xl font-bold font-serif">Ready to start your recovery for {treatment.name}?</h2>
          <p className="text-teal-100 max-w-lg mx-auto text-sm">
            Schedule a comprehensive assessment with Dr. Vinay Gulati at our clinic in 4W15, Sector - 4, Talwandi, Kota.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+917737465987"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary border border-primary/20 hover:bg-primary/5 font-semibold rounded-xl transition duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/917737465987?text=Hello%2C%20I%20want%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition duration-300 shadow-lg shadow-accent/25"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
