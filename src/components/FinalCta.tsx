import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { COMPANY_DATA } from '../data/company';
import { ScrollReveal } from './ScrollReveal';

export const FinalCta: React.FC = () => {
  return (
    <section className="relative bg-[#0D0F14] text-[#F5F5EE] py-16 sm:py-20 overflow-hidden border-t-2 border-[#F2C143] select-none">
      
      {/* Detalhes de iluminação dourada */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#F2C143] blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#F2C143]/30 text-[#F5F5EE] text-[11px] font-mono font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2C143]" />
            <span>AUTOESCOLA DIREÇÃO CERTA • MACEIÓ</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#F5F5EE] tracking-tight leading-tight mb-3">
            SEU CAMINHO CERTO PARA <span className="text-[#F2C143]">CONQUISTAR SUA CNH</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <p className="text-xs sm:text-sm text-[#F5F5EE]/80 max-w-xl mx-auto mb-7 leading-relaxed font-normal">
            Dê o primeiro passo rumo à sua independência no trânsito. Nossa equipe em Maceió está pronta para orientar você em cada etapa com total transparência e dedicação.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              id="btn-final-whatsapp"
              href={COMPANY_DATA.phone.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-xs sm:text-sm text-[#0D0F14] bg-[#F2C143] hover:bg-[#E3C56A] transition-all duration-200 shadow-xl uppercase tracking-wider group cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#0D0F14]" />
              <span>FALAR NO WHATSAPP COM A DIREÇÃO CERTA</span>
              <ArrowRight className="w-4 h-4 text-[#0D0F14] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="text-[11px] text-[#F5F5EE]/60 mt-5 font-mono">
            {COMPANY_DATA.address.full}
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};
