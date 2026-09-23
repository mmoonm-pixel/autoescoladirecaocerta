import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HABILITACAO_CATEGORIES, COMPANY_DATA } from '../data/company';
import { WhatsAppIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

interface CategoriesProps {
  onSelectCategory?: (category: 'A' | 'B' | 'AB') => void;
}

// SOMENTE os 3 itens solicitados: Categoria A (Moto), Categoria B (Carro), Categoria AB (Carro + Moto)
const STRICT_CATEGORIES = HABILITACAO_CATEGORIES.filter((c) =>
  ['A', 'B', 'AB'].includes(c.id)
);

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const handleOpenWhatsApp = (cat: (typeof STRICT_CATEGORIES)[number]) => {
    if (onSelectCategory && (cat.id === 'A' || cat.id === 'B' || cat.id === 'AB')) {
      onSelectCategory(cat.id as 'A' | 'B' | 'AB');
    }
    const url = `${COMPANY_DATA.phone.whatsappUrl}?text=${encodeURIComponent(cat.whatsappMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="habilitacao" className="py-12 sm:py-16 bg-[#0D0F14] text-[#F5F5EE] border-b border-[#F2C143]/20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#F2C143]/15 border border-[#F2C143]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2C143]" />
              <span className="font-mono text-[11px] font-bold tracking-widest text-[#F2C143] uppercase">
                Conquiste sua CNH em Maceió
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F5EE]">
              1ª <span className="text-[#F2C143]">HABILITAÇÃO</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <p className="text-xs sm:text-sm text-[#F5F5EE]/75 mt-2 max-w-xl mx-auto">
              Escolha a categoria ideal para sua rotina e inicie com todo o suporte e acompanhamento em Maceió.
            </p>
          </ScrollReveal>
        </div>

        {/* CARDS EMPILHADOS NO MOBILE E EM 3 COLUNAS NO DESKTOP (SEM CARROSSEL, SEM SWIPE, 100% COMPLETOS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {STRICT_CATEGORIES.map((cat, index) => (
            <ScrollReveal key={cat.id} delay={index * 0.08} className="h-full flex">
              <div
                className={`w-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  cat.popular
                    ? 'bg-[#050202] border-2 border-[#F2C143] shadow-[0_10px_35px_rgba(242,193,67,0.18)]'
                    : 'bg-[#050202] border border-[#F2C143]/20 hover:border-[#F2C143]/50'
                }`}
              >
                {cat.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#F2C143] text-[#0D0F14] text-[10px] font-black uppercase tracking-wider shadow-md">
                    MAIS ESCOLHIDA
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-[#F2C143]">
                      CATEGORIA {cat.id}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-[#E3C56A]">
                      {cat.vehicle}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase text-[#F5F5EE] tracking-tight mb-2">
                    {cat.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F5F5EE]/80 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5 mb-8 border-t border-white/10 pt-4">
                    {cat.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-xs text-[#F5F5EE]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#F2C143] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão para WhatsApp */}
                <button
                  type="button"
                  onClick={() => handleOpenWhatsApp(cat)}
                  className={`w-full py-3.5 px-6 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    cat.popular
                      ? 'bg-[#F2C143] hover:bg-[#E3C56A] text-[#0D0F14]'
                      : 'bg-[#F5F5EE] hover:bg-[#F2C143] text-[#0D0F14]'
                  }`}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Quero saber mais</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
