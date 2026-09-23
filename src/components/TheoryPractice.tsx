import React from 'react';
import { motion } from 'motion/react';

interface SpecItem {
  number: string;
  title: string;
  description: string;
}

const SPEC_ITEMS: SpecItem[] = [
  {
    number: '01',
    title: 'FORMAÇÃO COMPLETA',
    description: 'Aulas teóricas e práticas com metodologia focada na assimilação e aprovação.',
  },
  {
    number: '02',
    title: 'PRÁTICAS EM VIAS REAIS',
    description: 'Experiência prática nas ruas de Maceió em veículos com ar-condicionado e duplo comando de pedais.',
  },
  {
    number: '03',
    title: 'TREINAMENTO EM MOTO',
    description: 'Circuito prático para desenvolvimento seguro de equilíbrio, manobras e circuito de exame.',
  },
  {
    number: '04',
    title: 'INSTRUTORES PACIENTES',
    description: 'Acompanhamento dedicado e humanizado para você superar inseguranças e dirigir com confiança.',
  },
];

export const TheoryPractice: React.FC = () => {
  return (
    <section
      id="formacao"
      className="pt-12 pb-10 sm:pt-16 sm:pb-14 bg-[#F5F5EE] relative overflow-hidden border-t border-[#0D0F14]/10 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LADO ESQUERDO */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="inline-flex items-center gap-1.5 mb-2 px-3 py-1 rounded-full bg-[#F2C143]/20 border border-[#F2C143]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D0F14]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0D0F14]">
                  Metodologia de Excelência
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0D0F14] tracking-tight leading-none mb-3">
                PREPARAÇÃO TEÓRICA E <br className="hidden sm:inline" />
                <span className="text-[#0D0F14] underline decoration-[#F2C143] decoration-4">PRÁTICA</span>
              </h2>

              <div className="w-12 h-1 bg-[#F2C143] mb-4 rounded-full" />

              <p className="text-xs sm:text-sm text-[#43403A] leading-relaxed font-medium max-w-md">
                Estrutura de ponta com aulas planejadas para preparar você com total tranquilidade para a direção defensiva e para as provas em Maceió.
              </p>
            </motion.div>
          </div>

          {/* LADO DIREITO: 4 ITENS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {SPEC_ITEMS.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] }}
                className="bg-white rounded-3xl p-6 border border-[#0D0F14]/10 shadow-xs hover:border-[#F2C143] transition-colors"
              >
                <span className="font-mono text-xs font-black text-[#F2C143] block mb-2">
                  {item.number}
                </span>

                <h3 className="font-display text-base font-extrabold uppercase text-[#0D0F14] tracking-tight mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs text-[#43403A] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
