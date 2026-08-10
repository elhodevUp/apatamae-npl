import React from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProgramModal({ program, onClose, onContact }) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="glass-panel w-full max-w-2xl rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative border border-white/80 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#edeeef] hover:bg-[#c1c8c2] text-[#012d1d] transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge & Title */}
        <div className="mb-4">
          <span className="px-3 py-1 rounded-full bg-[#012d1d] text-white text-xs font-bold uppercase tracking-wider">
            {program.category} — {program.badge}
          </span>
        </div>

        <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#012d1d] mb-2">
          {program.title}
        </h3>
        <p className="text-sm font-bold text-[#396093] mb-6">
          {program.tagline}
        </p>

        {/* Full Content */}
        <div className="prose prose-sm text-[#414844] space-y-4 mb-8">
          <p className="leading-relaxed">
            {program.fullContent}
          </p>

          <div className="p-4 rounded-2xl bg-[#edeeef]/60 border border-[#c1c8c2]/50">
            <h4 className="font-headline font-bold text-xs text-[#012d1d] uppercase tracking-wider mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#396093]" />
              Livrables Majeurs
            </h4>
            <ul className="space-y-2">
              {program.highlights.map((h, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-[#012d1d]">
                  <CheckCircle className="w-4 h-4 text-[#1b4332]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#c1c8c2]/40">
          <span className="text-xs font-bold text-[#012d1d] bg-[#c1ecd4]/50 px-3 py-1.5 rounded-lg">
            {program.stats}
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="btn btn-sm btn-ghost text-[#717973] font-semibold text-xs flex-1 sm:flex-initial"
            >
              Fermer
            </button>
            <button
              onClick={() => {
                onClose();
                onContact();
              }}
              className="btn btn-sm bg-[#012d1d] text-white hover:bg-[#1b4332] rounded-full px-5 text-xs font-semibold flex-1 sm:flex-initial gap-2"
            >
              <span>Participer au Projet</span>
              <ArrowRight className="w-4 h-4 text-[#daa520]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
