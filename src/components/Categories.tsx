import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { HABILITACAO_CATEGORIES, COMPANY_DATA } from '../data/company';
import { WhatsAppIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

interface CategoriesProps {
  onSelectCategory?: (category: 'A' | 'B' | 'AB') => void;
}

// 3 categorias oficiais: A (Moto), B (Carro), AB (Carro + Moto)
const STRICT_CATEGORIES = HABILITACAO_CATEGORIES.filter((c) =>
  ['A', 'B', 'AB'].includes(c.id)
);

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  // Categoria AB selecionada inicialmente por ser a mais procurada
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('AB');

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('[data-category-card]');
    const targetCard = cards[index] as HTMLElement;
    if (targetCard) {
      const container = scrollRef.current;
      const cardLeft = targetCard.offsetLeft;
      const cardWidth = targetCard.offsetWidth;
      const containerWidth = container.clientWidth;
      // Centraliza com precisão matemática o card selecionado no container
      const targetScroll = cardLeft - (containerWidth - cardWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth',
      });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const currentIndex = STRICT_CATEGORIES.findIndex((c) => c.id === selectedCategoryId);
    const newIndex =
      direction === 'left'
        ? Math.max(0, currentIndex - 1)
        : Math.min(STRICT_CATEGORIES.length - 1, currentIndex + 1);
    
    handleSelectCategory(STRICT_CATEGORIES[newIndex].id, newIndex);
  };

  const handleSelectCategory = (catId: string, index: number) => {
    setSelectedCategoryId(catId);
    if (onSelectCategory && (catId === 'A' || catId === 'B' || catId === 'AB')) {
      onSelectCategory(catId as 'A' | 'B' | 'AB');
    }
    scrollToIndex(index);
  };

  const handleOpenWhatsApp = (cat: (typeof STRICT_CATEGORIES)[number]) => {
    if (onSelectCategory && (cat.id === 'A' || cat.id === 'B' || cat.id === 'AB')) {
      onSelectCategory(cat.id as 'A' | 'B' | 'AB');
    }
    const url = `${COMPANY_DATA.phone.whatsappUrl}?text=${encodeURIComponent(cat.whatsappMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="habilitacao" className="py-12 sm:py-16 bg-[#0D0F14] text-[#F5F5EE] border-b border-[#F2C143]/20 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-4">
          <div className="text-left">
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
              <p className="text-xs sm:text-sm text-[#F5F5EE]/75 mt-2 max-w-xl">
                Toque na categoria desejada para selecioná-la e consulte as condições especiais no WhatsApp.
              </p>
            </ScrollReveal>
          </div>

          {/* Botões de navegação para mobile / tablet */}
          <div className="flex md:hidden items-center gap-2 self-end">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Categoria anterior"
              className={`w-9 h-9 rounded-full border border-[#F2C143]/30 flex items-center justify-center text-[#F2C143] transition-all cursor-pointer ${
                canScrollLeft ? 'hover:bg-[#F2C143] hover:text-[#0D0F14]' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Próxima categoria"
              className={`w-9 h-9 rounded-full border border-[#F2C143]/30 flex items-center justify-center text-[#F2C143] transition-all cursor-pointer ${
                canScrollRight ? 'hover:bg-[#F2C143] hover:text-[#0D0F14]' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CONTAINER DO CARROSSEL:
            - Espaçamento vertical generoso (pt-6 pb-6) para a etiqueta e sombras não serem cortadas
            - Largura e padding lateral calibrados para que o contorno amarelo fique 100% visível
            - Cantos arredondados uniformes (rounded-3xl)
            - Box-sizing: border-box estrito para a borda ficar dentro dos limites do card
        */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto no-scrollbar pt-6 pb-6 px-4 -mx-4 sm:px-6 sm:-mx-6 md:mx-0 md:px-0 touch-pan-x snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {STRICT_CATEGORIES.map((cat, index) => {
            const isSelected = selectedCategoryId === cat.id;

            return (
              <div
                key={cat.id}
                data-category-card
                onClick={() => handleSelectCategory(cat.id, index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelectCategory(cat.id, index);
                  }
                }}
                className={`w-[82vw] max-w-[340px] sm:w-[340px] md:w-full md:max-w-none snap-center shrink-0 rounded-3xl p-6 sm:p-7 flex flex-col justify-between box-border border-2 transition-all duration-300 ease-out relative cursor-pointer outline-none select-none ${
                  isSelected
                    ? 'bg-[#0D0F14] border-[#F2C143] shadow-[0_0_0_1px_rgba(242,193,67,0.4),0_12px_36px_rgba(242,193,67,0.2)]'
                    : 'bg-[#050202] border-[#F2C143]/20 hover:border-[#F2C143]/45 shadow-md'
                }`}
                style={{ boxSizing: 'border-box' }}
              >
                {/* ETIQUETA SUPERIOR CENTRALIZADA:
                    - Perfeitamente alinhada no centro superior do card
                    - Integrada ao contorno com elegância sem corte
                */}
                {isSelected ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 px-3.5 py-0.5 rounded-full bg-[#F2C143] text-[#0D0F14] text-[10px] font-black uppercase tracking-wider shadow-md flex items-center justify-center gap-1 whitespace-nowrap transition-all duration-300 pointer-events-none">
                    <Check className="w-3 h-3 stroke-[3]" />
                    <span>SELECIONADA</span>
                  </div>
                ) : cat.popular ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-0.5 rounded-full bg-[#F2C143]/20 border border-[#F2C143]/40 text-[#F2C143] text-[10px] font-black uppercase tracking-wider shadow-sm whitespace-nowrap">
                    MAIS ESCOLHIDA
                  </div>
                ) : null}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`font-mono text-2xl sm:text-3xl font-black transition-colors duration-300 ${
                        isSelected ? 'text-[#F2C143]' : 'text-[#F5F5EE]/80'
                      }`}
                    >
                      CATEGORIA {cat.id}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 shrink-0 ${
                        isSelected
                          ? 'bg-[#F2C143]/20 text-[#F2C143] border border-[#F2C143]/30'
                          : 'bg-white/10 text-[#E3C56A]'
                      }`}
                    >
                      {cat.vehicle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#F5F5EE]/80 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5 mb-2 border-t border-white/10 pt-4">
                    {cat.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-xs text-[#F5F5EE]/90">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 transition-colors duration-300 ${
                            isSelected ? 'text-[#F2C143]' : 'text-[#F2C143]/70'
                          }`}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão para WhatsApp perfeitamente posicionado */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectCategory(cat.id, index);
                    handleOpenWhatsApp(cat);
                  }}
                  className={`w-full py-3.5 px-6 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md mt-6 ${
                    isSelected
                      ? 'bg-[#F2C143] hover:bg-[#E3C56A] text-[#0D0F14]'
                      : 'bg-[#F5F5EE] hover:bg-[#F2C143] text-[#0D0F14]'
                  }`}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Quero saber mais</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Indicadores de bolinhas no mobile */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-2">
          {STRICT_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                handleSelectCategory(cat.id, idx);
              }}
              aria-label={`Ir para categoria ${cat.id}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                selectedCategoryId === cat.id
                  ? 'w-6 bg-[#F2C143]'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
