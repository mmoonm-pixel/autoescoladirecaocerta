import React, { useRef, useState, useEffect } from 'react';
import { PRACTICAL_PLANS, COMPANY_DATA, PracticalPlan } from '../data/company';
import { WhatsAppIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

export const PracticalPlans: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const card = scrollRef.current.querySelector('[data-plan-card]') as HTMLElement;
    if (card) {
      const cardWidth = card.offsetWidth + 16;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), PRACTICAL_PLANS.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('[data-plan-card]');
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('[data-plan-card]') as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 16 : 300;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleBookPlan = (plan: PracticalPlan) => {
    const message = `Olá! Vim pelo site da Autoescola Direção Certa e gostaria de saber mais sobre o ${plan.name} (${plan.lessons} aulas - ${plan.price}).`;
    const url = `${COMPANY_DATA.phone.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="planos" className="py-14 sm:py-20 bg-[#F5F5EE] border-b border-[#0D0F14]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER LIMPO E INTEGRADO (SEM CARD SEPARADO) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <ScrollReveal delay={0}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0D0F14] tracking-tight">
                PACOTES DE <span className="text-[#0D0F14] underline decoration-[#F2C143] decoration-4">AULAS PRÁTICAS</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <p className="text-sm sm:text-base font-bold text-[#0D0F14] mt-2">
                Aulas práticas com foco na sua aprovação.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <p className="text-xs sm:text-sm text-[#43403A] mt-1">
                Escolha o melhor plano para você e agende sua aula hoje mesmo.
              </p>
            </ScrollReveal>
          </div>

          {/* Botões de navegação no desktop */}
          <div className="hidden sm:flex items-center gap-2 self-end">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Plano anterior"
              className={`w-9 h-9 rounded-full border border-[#0D0F14]/20 flex items-center justify-center text-[#0D0F14] transition-all cursor-pointer ${
                canScrollLeft ? 'hover:bg-[#0D0F14] hover:text-[#F2C143]' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Próximo plano"
              className={`w-9 h-9 rounded-full border border-[#0D0F14]/20 flex items-center justify-center text-[#0D0F14] transition-all cursor-pointer ${
                canScrollRight ? 'hover:bg-[#0D0F14] hover:text-[#F2C143]' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CARROSSEL HORIZONTAL DE PLANOS INDIVIDUAIS (1 por vez no mobile com swipe/drag) */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 touch-pan-x snap-x snap-mandatory scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {PRACTICAL_PLANS.map((plan) => (
            <div
              key={plan.id}
              data-plan-card
              className={`min-w-[85vw] max-w-[88vw] sm:min-w-[280px] sm:max-w-[300px] snap-center sm:snap-start flex-shrink-0 flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-[#0D0F14] text-[#F5F5EE] border-2 border-[#F2C143] shadow-xl'
                  : 'bg-white text-[#0D0F14] border border-[#0D0F14]/15 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#F2C143] text-[#0D0F14] text-[10px] font-black uppercase tracking-wider shadow-sm">
                  Destaque
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-display text-base font-black uppercase tracking-wider ${
                    plan.popular ? 'text-[#F2C143]' : 'text-[#0D0F14]'
                  }`}>
                    {plan.name}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase ${
                    plan.popular ? 'bg-[#F2C143]/20 text-[#F2C143]' : 'bg-[#0D0F14]/10 text-[#0D0F14]'
                  }`}>
                    {plan.lessons} {plan.lessons === 1 ? 'AULA' : 'AULAS'}
                  </span>
                </div>

                <p className={`text-xs mb-4 min-h-[36px] ${
                  plan.popular ? 'text-gray-300' : 'text-[#43403A]'
                }`}>
                  “{plan.description}”
                </p>

                <div className="border-t border-[#0D0F14]/10 pt-4 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#43403A] block mb-1">
                    Investimento
                  </span>
                  <span className={`font-display text-2xl sm:text-3xl font-black ${
                    plan.popular ? 'text-[#F2C143]' : 'text-[#0D0F14]'
                  }`}>
                    {plan.price}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleBookPlan(plan)}
                className={`w-full py-3 px-4 rounded-2xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 ${
                  plan.popular
                    ? 'bg-[#F2C143] hover:bg-[#E3C56A] text-[#0D0F14]'
                    : 'bg-[#0D0F14] hover:bg-[#F2C143] text-[#F5F5EE] hover:text-[#0D0F14]'
                }`}
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Agendar aula</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Indicadores de bolinhas */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {PRACTICAL_PLANS.map((plan, idx) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir para plano ${plan.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? 'w-6 bg-[#0D0F14]'
                  : 'w-1.5 bg-[#0D0F14]/20 hover:bg-[#0D0F14]/40'
              }`}
            />
          ))}
        </div>

        {/* CTA CATÁLOGO COMPLETO */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={COMPANY_DATA.phone.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-catalogo-planos"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-extrabold text-xs text-[#0D0F14] bg-[#F2C143] hover:bg-[#E3C56A] shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wider cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <BookOpen className="w-4 h-4 text-[#0D0F14]" />
            <span>Ver catálogo completo</span>
            <ArrowRight className="w-4 h-4 text-[#0D0F14]" />
          </a>
        </div>

      </div>
    </section>
  );
};
