import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { FAQ_LIST, COMPANY_DATA } from '../data/company';
import { WhatsAppIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-14 sm:py-20 bg-[#F5F5EE] relative overflow-hidden border-t border-[#0D0F14]/10 select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="mb-8 sm:mb-12 pb-4 border-b border-[#0D0F14]/10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-1.5 mb-2 px-3 py-1 rounded-full bg-[#F2C143]/20 border border-[#F2C143]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D0F14]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0D0F14]">
                  Tire Suas Dúvidas
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-[#0D0F14] tracking-tight leading-none">
                PERGUNTAS <span className="text-[#0D0F14] underline decoration-[#F2C143] decoration-4">FREQUENTES</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <span className="font-mono text-[11px] text-[#43403A] uppercase tracking-widest font-semibold">
              MACEIÓ – ALAGOAS
            </span>
          </ScrollReveal>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-[#0D0F14]/10 border-b border-[#0D0F14]/10">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} delay={0.04 * index}>
                <div
                  id={`faq-item-${index}`}
                  className="py-4 sm:py-5 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left flex items-start justify-between gap-4 focus:outline-none cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-baseline gap-3.5">
                      <span className="font-mono text-xs font-black text-[#F2C143] shrink-0">
                        0{index + 1}.
                      </span>
                      <span className="font-sans font-bold text-sm sm:text-base text-[#0D0F14] group-hover:text-[#43403A] transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <div className="text-[#0D0F14] group-hover:text-[#F2C143] shrink-0 transition-transform mt-0.5">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pl-7 sm:pl-8 pr-4 text-xs sm:text-sm text-[#43403A] leading-relaxed font-normal">
                          <p className="max-w-2xl">{faq.answer}</p>
                          <div className="w-8 h-0.5 bg-[#F2C143] mt-3 rounded-full" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Rodapé do FAQ com Contato */}
        <ScrollReveal delay={0.25}>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <p className="text-[#43403A] font-semibold">
              Possui alguma dúvida específica não listada aqui?
            </p>
            <a
              href={COMPANY_DATA.phone.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-[#0D0F14] hover:text-[#43403A] transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#F2C143]" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
